<template>
  <div class="detailhotpost">
    <!-- 顶部导航 -->
    <nav-bar></nav-bar>
    <!-- <h2>{{$route.params.hotPostName}}</h2> -->
    <!-- 搜索框组件 -->
    <DetailHotPostSearch></DetailHotPostSearch>

    <!-- 发布职位展示组件 -->
    <DetaikHopePostItem></DetaikHopePostItem>
    <!-- 滚轮到底回到顶部按钮 -->
    <el-backtop></el-backtop>
  </div>
</template>
<script>
import NavBar from "components/content/navbar/NavBar";
import DetailHotPostSearch from "views/detail/childChomps/DetailHotPostSearch";
import DetaikHopePostItem from "views/detail/childChomps/DetaikHopePostItem";
export default {
  name: "DetailHotPost",
  data() {
    return {};
  },
  components: {
    NavBar,
    DetailHotPostSearch,
    DetaikHopePostItem,
  },
  methods: {},
};
</script>

<style scoped>
</style>
