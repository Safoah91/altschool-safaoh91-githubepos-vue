<template>
  <section class="bg-slate-100 py-32 px-28">
    <h2 class="text-4xl font-bold">My Repos</h2>
    <p class="text-slate-500">
      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
    </p>
    <article class="mt-6 grid grid-cols-2 gap-6">
      <div
        class="shadow-lg py-4 px-8 rounded-lg"
        v-for="item in listItems"
        v-bind:key="item"
      >
        <div class="flex justify-between">
          <a
            :href="item.html_url"
            class="text-indigo-400 hover:text-indigo-600"
          >
            <p>{{ item.name }}</p>
          </a>
          <p
            class="
              capitalize
              text-sm
              border border-indigo-300
              text-indigo-400
              hover:bg-indigo-500 hover:text-white hover:cursor-pointer
              px-4
              py-1
              rounded-3xl
            "
          >
            {{ item.visibility }}
          </p>
        </div>

        <p class="my-6 text-slate-500">{{ item.description }}</p>
        <p class="text-slate-400 flex items-center gap-2">
          <span class="block w-4 h-4 bg-indigo-600 rounded-full"></span
          >{{ item.language }}
        </p>
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

