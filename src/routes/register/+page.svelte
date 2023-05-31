<script lang="ts">
    import type { ActionData } from "./$types";
  
    export let form: ActionData;
  </script>
  
  <div class="page">
    <form method="post">
      <h1>Register User</h1>
      {#if form?.missing}<p class="error">Missing field required!</p>{/if}
      <input
        name="email"
        placeholder="email"
        type="text"
        value={form?.email ?? ""}
      />
      <input
        name="username"
        placeholder="Your Name"
        type="text"
        value={form?.username ?? ""}
      />
      <input
        name="password"
        placeholder="password"
        type="password"
        value={form?.password ?? ""}
      />
      <button type="submit">Create</button>
      <a class="back" href="/"> or Cancel </a>
    </form>
  </div>