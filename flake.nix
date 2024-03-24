{
  inputs = {
    nixpkgs.url = "github:nixos/nixpkgs/nixos-unstable";
    rust-overlay.url = "github:oxalica/rust-overlay";
    flake-utils.url = "github:numtide/flake-utils";
  };

  outputs = {
    self,
    nixpkgs,
    flake-utils,
    rust-overlay,
  }:
    flake-utils.lib.eachDefaultSystem (system: let
      inherit (nixpkgs) lib;

      overlays = [(import rust-overlay)];
      pkgs = import nixpkgs {
        inherit system overlays;
      };

      rust-toolchain = pkgs.rust-bin.fromRustupToolchainFile ./rust-toolchain.toml;
      llvm = pkgs.llvmPackages_17;

      clangBuildInputs = with llvm; [
        clang
        libclang
        libcxx
        lld
        lldb
      ];

      nativeBuildInputs = with pkgs;
        [
          pkg-config
          rust-toolchain
          cmake
        ]
        ++ clangBuildInputs;

      libraries = with pkgs; [
        webkitgtk
        gtk4
        cairo
        gdk-pixbuf
        glib
        dbus
        openssl_3
        librsvg
      ];

      packages = with pkgs; [
        curl
        wget
        pkg-config
        dbus
        openssl_3
        glib
        gtk4
        libsoup_3
        webkitgtk_4_1
        librsvg

        playwright-driver.browsers
        nodejs_20
        nodePackages.pnpm
      ];
    in {
      formatter = pkgs.alejandra;

      devShell = pkgs.mkShell {
        nativeBuildInputs = nativeBuildInputs;
        buildInputs = packages;

        shellHook = ''
          export LD_LIBRARY_PATH=${pkgs.lib.makeLibraryPath libraries}:$LD_LIBRARY_PATH
          export XDG_DATA_DIRS=${pkgs.gsettings-desktop-schemas}/share/gsettings-schemas/${pkgs.gsettings-desktop-schemas.name}:${pkgs.gtk3}/share/gsettings-schemas/${pkgs.gtk3.name}:$XDG_DATA_DIRS
          export RUST_SRC_PATH=${rust-toolchain}
          export RUST_BACKTRACE=1
          export LIBCLANG_PATH="${llvm.libclang.lib}/lib";
          export WEBKIT_DISABLE_COMPOSITING_MODE=1
          export PLAYWRIGHT_BROWSERS_PATH=${pkgs.playwright-driver.browsers}
          export PLAYWRIGHT_SKIP_VALIDATE_HOST_REQUIREMENTS=true
        '';
      };
    });
}
