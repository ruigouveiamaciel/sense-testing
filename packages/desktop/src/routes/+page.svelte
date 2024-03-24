<script lang="ts">
  import { invoke } from "@tauri-apps/api/core";

  let name = "";
  let greetMsg = "";

  async function greet() {
    greetMsg = await invoke("greet", { name });
  }
</script>

<h1>Welcome to SvelteKit!</h1>
<form on:submit|preventDefault={greet}>
  <input id="greet-input" placeholder="Enter a name..." bind:value={name} />
  <button type="submit">Greet</button>
  <p>{greetMsg}</p>
</form>
