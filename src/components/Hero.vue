<script setup>
import WelcomeItem from "./WelcomeItem.vue";
import DocumentationIcon from "./icons/IconDocumentation.vue";
import ToolingIcon from "./icons/IconTooling.vue";
import EcosystemIcon from "./icons/IconEcosystem.vue";
import CommunityIcon from "./icons/IconCommunity.vue";
import SupportIcon from "./icons/IconSupport.vue";
</script>

<template>
  <div class="bg-slate-800 pt-28 pb-32 px-28">
    <div class="flex flex-col items-center justify-center text-center">
      <div class="w-1/2 flex flex-col items-center">
        <img src="./../assets/images/avatar.png" class="w-32" alt="" />
        <h2 class="text-white py-2 mt-2 text-lg">Anastasia S. Lamptey</h2>
        <p class="text-indigo-300 text-base">
          Frontend Developer -
          <span class="text-indigo-100 text-sm">Safoah91</span>
        </p>
      </div>
      <div class="px-32 pt-6">
        <h1 class="text-7xl font-bold text-white">
          There’s no better way to showcase your projects
        </h1>
        <p class="text-xl text-slate-100 py-6 w-1/2 text-center mx-auto">
          GitHub is an online software development platform. It's used for
          storing, tracking, and collaborating on software projects.
        </p>
      </div>
    </div>
  </div>
</template>
