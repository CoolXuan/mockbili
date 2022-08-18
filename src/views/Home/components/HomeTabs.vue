<template>
  <van-tabs v-model:active="active">
    <van-tab v-for="index in 8" :title="'标签 ' + index" :key="index">
      内容{{ index }}
    </van-tab>
  </van-tabs>
</template>

<script setup lang="ts">
import { ref } from "vue";
import axios from "axios";
const active = ref(0);
axios({
  url: "",
  method: "get",
});
</script>
