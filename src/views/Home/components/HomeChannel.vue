<template>
  <!-- tab栏 -->
  <van-tabs v-model:active="active">
    <van-tab v-for="item in TabData" :title="item.text" :key="item.id">
    </van-tab>
  </van-tabs>
  <!-- 轮播图 -->
  <van-swipe :autoplay="3000" lazy-render>
    <van-swipe-item v-for="(item, index) in LbtData" :key="index">
      <img :src="item.imgSrc" />
    </van-swipe-item>
  </van-swipe>
  <!-- 视频推荐页 -->
  <appVideoItemVue />
</template>

<script setup lang="ts">
import appVideoItemVue from "@/components/app-video-item.vue";
import { ref } from "vue";
import axios from "axios";
const active = ref(0);
// 用ts定义一个接口格式,数组每一项都要符合定义，item有数据提醒
interface LbtItem {
  link: string;
  imgSrc: string;
}
interface INVaItem {
  id: string;
  text: string;
}
const TabData = ref<INVaItem[]>([]);
const LbtData = ref<LbtItem[]>([]);
// const onChange = (index) => Toast("当前 Swipe 索引：" + index);

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
});
</script>
