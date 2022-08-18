<template>
  <div>
    <!-- <h1>Home界面</h1>
    <router-link to="/video/1">点击去视频界面</router-link>-->
    <AppHeader />
    <HomeChannel />
  </div>
</template>

<script lang="ts" setup>
// setup 导入组件不需要注册
import AppHeader from "@/components/app-header.vue";
// import HomeTabs from "./components/HomeTabs.vue";
import HomeChannel from "./components/HomeChannel.vue";
</script>
