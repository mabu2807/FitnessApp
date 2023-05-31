<!-- src/routes/+page.svelte -->

<!-- 1. -->
<script lang="ts">
  import type { PageData } from './$types'

  export let data: PageData
</script>

<div>
  <h1>Users</h1>
  <main>
    <div>
      <!-- 2. -->
      {#each data.feed as user (user.id)}
        <div>
          <h2>{user.username}</h2>
          <p>Email: {user.email}</p>
        </div>
      {/each}
    </div>
  </main>
</div>