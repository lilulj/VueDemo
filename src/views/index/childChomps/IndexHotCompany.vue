<template>
  <div class="indexhotpost inner">
    <!-- 热门企业 -->
    <div class="indexhotpost-title">热门企业</div>
    <!-- item -->
    <index-hot-company-box :indexcommonbox="indexcommonbox" class="indexcommonbox"></index-hot-company-box>
  </div>
</template>

<script>
import IndexHotCompanyBox from "./IndexHotCompanyBox";

import { getFindHotEnt } from "network/index";
export default {
  name: "",
  data() {
    return {
      indexcommonbox: [],
    };
  },
  mounted() {
    //获取主页公司招聘信息
    this.getFindHotEnt();
  },
  methods: {
    // 获取主页公司招聘信息
    getFindHotEnt() {
      getFindHotEnt().then((result) => {
        this.indexcommonbox = result.data.data;
      });
    },
  },
  components: {
    IndexHotCompanyBox
  },
};
</script>

<style scoped>
/* 热招职位 */
.indexhotpost {
  margin-top: 37px;
  margin-bottom: 43px;
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
  padding: 0 15px;
  margin-bottom: 10px;
}
.indexhotpost-item span {
  margin-right: 77px;
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
