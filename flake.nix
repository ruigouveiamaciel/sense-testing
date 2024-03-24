{
  inputs = {
    nixpkgs.url = "github:nixos/nixpkgs/nixos-unstable";
    rust-overlay.url = "github:oxalica/rust-overlay";
    flake-utils.url = "github:numtide/flake-utils";
    devenv.url = "github:cachix/devenv";
  };

  nixConfig = {
    extra-trusted-public-keys = "devenv.cachix.org-1:w1cLUi8dv3hnoSPGAuibQv+f9TZLr6cv/Hm9XgU50cw=";
    extra-substituters = "https://devenv.cachix.org";
  };

  outputs = {
    self,
    nixpkgs,
    flake-utils,
    rust-overlay,
    devenv,
  } @ inputs:
    flake-utils.lib.eachDefaultSystem (system: let
      inherit (nixpkgs) lib;

      overlays = [(import rust-overlay)];
      pkgs = import nixpkgs {
        inherit system overlays;
      };

      rust-toolchain = pkgs.rust-bin.fromRustupToolchainFile ./rust-toolchain.toml;
      gtk-package = pkgs.gtk4;
    in {
      formatter = pkgs.alejandra;

      devShell = devenv.lib.mkShell {
        inherit inputs pkgs;
        modules = [
          ({
            pkgs,
            config,
            ...
          }: {
            packages = with pkgs; [
              # Rust
              rust-toolchain

              # Tauri dependencies
              gtk-package
              curl
              wget
              pkg-config
              dbus
              openssl_3
              glib
              libsoup_3
              webkitgtk_4_1
              librsvg

              # Playwright dependencies
              playwright-driver.browsers
            ];

            env = {
              # Rust
              RUST_SRC_PATH = rust-toolchain;
              RUST_BACKTRACE = 1;

              # Tauri
              XDG_DATA_DIRS = "${pkgs.gsettings-desktop-schemas}/share/gsettings-schemas/${pkgs.gsettings-desktop-schemas.name}:${gtk-package}/share/gsettings-schemas/${gtk-package.name}:$XDG_DATA_DIRS";
              WEBKIT_DISABLE_COMPOSITING_MODE = 1;

              # Playwright
              PLAYWRIGHT_BROWSERS_PATH = pkgs.playwright-driver.browsers;
              PLAYWRIGHT_SKIP_VALIDATE_HOST_REQUIREMENTS = "true";
            };

            languages = {
              javascript = {
                enable = true;
                package = pkgs.nodejs_20;
                pnpm = {
                  enable = true;
                  package = pkgs.nodePackages.pnpm;
                  install.enable = false;
                };
              };
            };

            pre-commit.hooks = {
              clippy = {
                enable = true;
                entry = pkgs.lib.mkDefault "cargo clippy --all-targets --all-features -- -D warnings";
              };
              eslint = {
                enable = true;
                entry = pkgs.lib.mkDefault "pnpm lint";
              };
            };
          })
        ];
      };
    });
}
