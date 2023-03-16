<template>
  <section class="bg-slate-100 pt-14 pb-10 px-8 md:pt-28 md:pb-32 md:px-28">
    <h2 class="text-4xl font-bold">My Repos</h2>
    <p class="text-slate-500">List of all repository</p>
    <article class="mt-6 grid gap-6 md:grid-cols-2">
      <div
        class="shadow-lg py-4 px-4 lg:px-8 rounded-lg hover:bg-slate-50 transition-all"
        v-for="item in listItems"
        v-bind:key="item"
      >
        <div class="lg:flex justify-between">
          <a :href="item.html_url" target="_blank" class="text-indigo-400">
            <p>{{ item.name }}</p>
          </a>
          <p
            class="capitalize text-sm border border-indigo-300 text-indigo-400 mt-4 lg:mt-0 px-4 py-1 rounded-3xl text-center w-24 h-8"
          >
            {{ item.visibility }}
          </p>
        </div>

        <p class="my-6 text-slate-500">{{ item.description }}</p>
        <div class="flex justify-between">
          <div class="text-slate-400 flex items-center gap-2">
            <span class="block w-4 h-4 bg-indigo-600 rounded-full"></span>
            {{ item.language }}
          </div>
          <div>
            <router-link
              class="text-sm py-2 px-4 bg-slate-700 text-white rounded-lg flex justify-center items-center hover:bg-slate-600"
              :to="{ name: 'repo', params: { id: item.name } }"
              >Show Details</router-link
            >
          </div>
        </div>
      </div>
    </article>
  </section>
</template>



<script>
export default {
  data() {
    return {
      listItems: [],
    };
  },

  methods: {
    async getData() {
      const res = await fetch("https://api.github.com/users/safoah91/repos");
      const finalRes = await res.json();
      this.listItems = finalRes;
    },
  },

  mounted() {
    this.getData();
  },
};
</script>

