<template>
  <router-link
    v-for="item in videosList"
    class="v-card"
    :to="`/video/${item.id}`"
    :key="item.id"
  >
    <div class="card">
      <div class="card-img">
        <img class="pic" :src="item.imgSrc" alt="视频描述" />
      </div>
      <div class="count">
        <span>
          <i class="iconfont icon_shipin_bofangshu"></i>
          {{ item.playCount }}
        </span>
        <span>
          <i class="iconfont icon_shipin_danmushu"></i>
          {{ item.commentCount }}
        </span>
      </div>
    </div>
    <p class="title">{{ item.desc }}</p>
  </router-link>
</template>
<script lang="ts" setup>
import axios from "axios";
import { ref } from "vue";
interface VideoList {
  id: string;
  link: string;
  imgSrc: string;
  desc: string;
  playCount: string;
  commentCount: string;
  videoSrc: string;
}

const videosList = ref<VideoList[]>([]);
axios({
  url: "/videosList",
  method: "get",
}).then((res) => {
  videosList.value = res.data.result;
});
</script>
<style lang="less" scoped>
.v-card {
  width: 50%;
  height: auto;
  padding: 2vw 1vw;
  float: left;
  .card {
    position: relative;
    background: #f3f3f3 center no-repeat;
    background-size: 36%;
    border-radius: 0.53333vw;
    overflow: hidden;

    .card-img {
      .pic {
        height: 120px;
        width: 100%;
        object-fit: cover;
      }
    }

    .count {
      background-image: linear-gradient(0deg, #000000d9, #0000);
      color: #fff;
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      font-size: 3vw;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 1.2vw 1.5vw;

      span {
        .iconfont {
          font-size: 3vw;
        }
      }
    }
  }

  .title {
    margin-top: 1.5vw;
    font-size: 3.2vw;
    color: #212121;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
}
</style>
