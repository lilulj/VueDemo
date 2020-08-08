<template>
  <div class="index">
    <nav-bar>
      <div slot="navbar-city" class="navbar-city">
        <span>{{city}}</span>
        <span class="cursorpointer" @click="cityClick">[切换城市]</span>
      </div>
    </nav-bar>
    <div class="hidecity">
      <div class="hidecity-box">
        <div class="title">
          <span class="tilte-content title-main">城市选择</span>
          <span class="tilte-content title-sub">切换城市分站，寻找当地心仪工作</span>
        </div>
      </div>
    </div>
    <index-login @getCode="getCode"></index-login>
    <search></search>
    <index-item-classity :itemclassity="itemclassity"></index-item-classity>
    <index-hot-post :itemclassity="itemclassity"></index-hot-post>
    <index-hot-company></index-hot-company>
    <footer-index></footer-index>
  </div>
</template>

<script>
import NavBar from "components/content/navbar/NavBar";
import IndexLogin from "./childChomps/IndexLogin";
import Search from "components/content/search/Search";
import IndexItemClassity from "./childChomps/IndexItemClassity";
import IndexHotPost from "./childChomps/IndexHotPost";
import IndexHotCompany from "./childChomps/IndexHotCompany";
import FooterIndex from "components/content/footer/Footer";

import { getCity, getJobClassity } from "network/index";
export default {
  name: "Index",
  data() {
    return {
      city: "成都",
      itemclassity: [],
    };
  },
  components: {
    NavBar,
    IndexLogin,
    Search,
    IndexHotPost,
    IndexHotCompany,
    FooterIndex,
    IndexItemClassity,
  },
  mounted() {
    //获取全部职业分类数据
    this.getJobClassity();
  },
  methods: {
    //通过手机号获取验证码
    getCode() {},
    cityClick() {
      getCity().then((result) => {
        console.log(result);
      });
    },
    //获取全部职业分类数据
    getJobClassity() {
      getJobClassity().then((result) => {
        // console.log(result.data.data.children);
        this.itemclassity = result.data.data.children;
      });
    },
  },
};
</script>

<style scoped lang="less">
/* 顶部导航城市定位 */
.navbar-city {
  width: 122px;
}
.index {
  position: relative;
  .hidecity {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: rgba(37, 40, 48, 0.7);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1009;
    display: none;
    .hidecity-box {
      width: 590px;
      height: 590px;
      background: #fff;
      .title {
        background: #5dd5c8;
        color: #fff;
        .title-main {
          font-size: 16px;
          line-height: 50px;
          padding-left: 30px;
          font-weight: 400;
          margin-right: 10px;
        }
        .title-sub {
          font-size: 12px;
        }
        .title-content {
        }
      }
    }
  }
}
</style>
