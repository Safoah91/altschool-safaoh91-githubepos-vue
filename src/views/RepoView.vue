<template>
  <main
    class="flex items-center justify-center bg-slate-100 px-8 py-24 md:py-36"
  >
    <section class="max-w-xl">
      <h2 class="text-4xl font-bold">{{ listItem.owner?.login }}</h2>
      <p class="text-slate-500">
        Frontend Developer @ AltSchool Africa School of Engineering
      </p>
      <article class="mt-6">
        <div class="shadow-lg py-4 px-8 rounded-lg">
          <div class="md:flex md:justify-between md:items-center">
            <div>
              <a
                :href="listItem?.html_url"
                class="text-indigo-400 text-xl hover:text-indigo-600"
              >
                {{ listItem.name }}
              </a>
              <p class="text-slate-500">{{ listItem.created_at }}</p>
            </div>
            <div
              class="capitalize text-sm border border-indigo-300 text-indigo-400 h-8 px-4 rounded-3xl flex justify-center items-center mt-4 md:mt-0"
            >
              {{ listItem.visibility }}
            </div>
          </div>

          <p class="mt-6 mb-5 text-slate-500">{{ listItem.description }}</p>

          <div class="text-slate-400 flex items-center gap-2">
            <span class="text-slate-700">Main language:</span>
            <span> {{ listItem.language }}</span>
          </div>

          <div class="flex gap-2">
            <p>All topics:</p>
            <div class="flex gap-2 text-slate-500 capitalize mb-2">
              <p
                class="underline"
                v-for="topic in listItem.topics"
                v-bind:key="topic"
              >
                {{ topic }}
              </p>
            </div>
          </div>
        </div>
      </article>
    </section>
  </main>
</template>


<script>
import { useRoute } from "vue-router";

export default {
  name: "RepoView",
  data() {
    return {
      repoID: "",
      listItem: [],
    };
  },

  methods: {
    async getData() {
      const res = await fetch(
        `https://api.github.com/repos/safoah91/${this.repoID}`
      );
      const finalRes = await res.json();
      this.listItem = finalRes;
    },
  },

  mounted() {
    const route = useRoute();
    this.repoID = route.params.id;
    this.getData();
  },
};
</script>


