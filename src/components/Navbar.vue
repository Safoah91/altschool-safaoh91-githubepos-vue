<script>
import { RouterView, RouterLink } from "vue-router";
</script>
<template>
  <header class="bg-slate-900">
    <nav class="px-[7rem] flex justify-between items-center py-2">
      <div>
        <RouterLink class="text-white hover:text-slate-200" to="/"
          >Safoah91</RouterLink
        >
      </div>

      <ul class="flex justify-between py-2 gap-2">
        <!-- <li>
          <RouterLink class="text-white hover:text-slate-200 px-6 py-2 text-sm" to="/">Home</RouterLink>
        </li>
        <li>
          <RouterLink class="text-white hover:text-slate-200 px-6 py-2 text-sm" to="/repository">Repositories</RouterLink>
        </li> -->
        <li>
          <a
            class="text-white px-6 py-2 hover:text-slate-200 text-sm"
            href="https://github.com/safoah91"
            >GitHub</a
          >
        </li>
      </ul>
    </nav>
  </header>
  <RouterView />
</template>