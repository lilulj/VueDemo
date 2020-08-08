<template>
  <div class="indexhotpost inner">
    <!-- 热招职位 -->
    <div class="indexhotpost-title">热招职位</div>
    <!-- 项目分类 -->
    <h3 class="indexhotpost-item">
      <el-link
        :underline="false"
        class="itemlist"
        v-for="item in itemclassity"
        :key="item.name"
        v-show="item.anotherName!=null"
      >{{item.anotherName}}</el-link>
    </h3>
    <!-- item -->
    <index-hot-post-box :indexcommonbox="indexcommonbox" class="indexcommonbox"></index-hot-post-box>
  </div>
</template>

<script>
import IndexHotPostBox from "./IndexHotPostBox";

import { getRecruit } from "network/index";
export default {
  name: "",
  props: {
    itemclassity: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {
      indexcommonbox: [],
    };
  },
  mounted() {
    //获取主页公司招聘信息
    this.getRecruit();
  },
  methods: {
    //获取主页公司招聘信息
    getRecruit() {
      getRecruit().then((result) => {
        this.indexcommonbox = result.data.data;
        // console.log(result.data.data);
      });
    },
  },
  components: {
    IndexHotPostBox,
  },
};
</script>

<style scoped>
/* 热招职位 */
.indexhotpost {
  margin-top: 37px;
}
.indexhotpost-title {
  font-size: 24px;
  text-align: center;
  position: relative;
  margin-bottom: 24px;
}
.indexhotpost-title::after,
.indexhotpost-title::before {
  content: "";
  display: inline-block;
  vertical-align: 8px;
  margin: 0 10px;
  width: 50px;
  height: 1px;
  background: #d1d4db;
}
.indexhotpost-item {
  background: #fff;
  box-sizing: border-box;
  padding: 0 20px;
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
}
.indexhotpost-item .itemlist {
  line-height: 50px;
  color: #8d92a1;
  font-size: 14px;
  cursor: pointer;
}
.indexcommonbox {
  display: flex;
  justify-content: space-between;
}
</style>
