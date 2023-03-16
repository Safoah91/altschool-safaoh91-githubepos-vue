<template>
  <header class="bg-slate-900">
    <nav class="px-4 md:px-[7rem] flex justify-between items-center py-2">
      <div>
        <RouterLink class="text-white font-bold hover:text-slate-200" to="/"
          >Safoah91</RouterLink
        >
      </div>

      <ul class="flex justify-between py-2 gap-4">
        <li>
          <RouterLink
            class="text-white hover:text-slate-200 px-2 py-2 md:px-6 text-sm"
            to="/"
            >Home</RouterLink
          >
        </li>
        <li>
          <a
            class="text-white px-2 py-2 md:px-6 hover:text-slate-200 text-sm"
            href="https://github.com/safoah91"
            >GitHub</a
          >
        </li>
      </ul>
    </nav>
  </header>
</template>