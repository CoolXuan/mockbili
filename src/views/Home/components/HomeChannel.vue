<template>
  <!-- tab栏 -->
  <van-tabs v-model:active="active">
    <van-tab v-for="item in TabData" :title="item.text" :key="item.id">
      {{ item.text }}
    </van-tab>
  </van-tabs>
  <!-- 轮播图 -->
  <van-swipe @change="onChange">
    <van-swipe-item v-for="item in LbtData" :title="item.text" :key="item.id">
      <img :src="item.imgSrc" />
    </van-swipe-item>
  </van-swipe>
</template>

<script setup lang="ts">
import { ref } from "vue";
import axios from "axios";
import { Toast } from "vant";
const active = ref(0);
const TabData = ref([]);
const LbtData = ref([]);
const onChange = (index) => Toast("当前 Swipe 索引：" + index);

// 得到后端导航栏数据
axios({
  url: "/navList",
  method: "get",
}).then((res) => {
  TabData.value = res.data.result;
});

// 得到后端轮播图数据
axios({
  url: "/swiperList",
  method: "get",
}).then((res) => {
  LbtData.value = res.data.result;
  console.log(LbtData.value);
});
</script>
