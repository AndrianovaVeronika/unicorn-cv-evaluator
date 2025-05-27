<script setup lang="ts">
import Popup from "./components/Popup.vue";
import {onMounted, ref} from "vue";

const jobDescription = ref<string>();
const alert = ref<string>()

onMounted(() => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    const tab = tabs[0];
    if (!tab?.id) return;

    chrome.scripting.executeScript(
        {
          target: { tabId: tab.id },
          func: () => document.body.innerText,

        },
        (results) => {
          const innerText = results?.[0]?.result;
          if (innerText) {
            jobDescription.value = innerText;
          } else {
            alert.value = "Could not extract page text";
          }
        }
    );
  });
});
</script>

<template>
  <div>{{ alert }}</div>
  <Popup :job-description="jobDescription"/>
</template>

<style scoped>

</style>