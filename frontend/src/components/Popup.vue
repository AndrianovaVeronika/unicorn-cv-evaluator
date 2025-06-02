<template>
  <div style="padding: 1rem; font-family: sans-serif; width: 300px">
    <h2>🦄 Unicorn CV Evaluator</h2>

    <button @click="analyze" :disabled="loading">
      {{ loading ? "Analyzing..." : "Analyze job description" }}
    </button>

    <div v-if="result" style="margin-top: 1rem">
      <b>Title</b>
      <div>{{ result.title }}</div>

      <b>Languages</b>
      <div>{{ result.devLanguages }}</div>

      <b>Technologies</b>
      <div>{{ result.technologies }}</div>

      <b>Product</b>
      <div>{{ result.product }}</div>

      <b>Languages required</b>
      <div>{{ result.languagesReq }}</div>
    </div>

<!--    <button @click="" :disabled="loading1">-->
<!--      {{ loading1 ? "Analyzing..." : "Calculate Unicorn Score" }}-->
<!--    </button>-->
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const {jobDescription} = defineProps<{
  jobDescription?: string
}>()

const loading = ref(false);
const result = ref<any>(null);

const analyze = async () => {
  // if (!resume.value || !job.value) {
  //   alert("Please fill in both fields.");
  //   return;
  // }

  loading.value = true;

  try {
    // const res = await fetch("http://localhost:3001/api/evaluate", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify({ resume: resume.value, jobDescription: job.value })
    // });

    const res = await fetch("http://localhost:3001/api/context", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ jobDescriptionPage: jobDescription })
    });

    const data = await res.json();
    result.value = JSON.parse(data.result);
  } catch (e) {
    alert("Request failed.");
    console.error(e);
  } finally {
    loading.value = false;
  }
};
</script>
