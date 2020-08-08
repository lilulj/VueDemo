<template>
  <div>
    <div class="indexcommonbox displayflex">
      <div
        v-for="item in indexcommonbox"
        :key="item.name"
        class="indexcommonbox-item cursorpointer"
        @click="itemClick"
      >
        <div class="indexcommonbox-top">{{item.entLogo}}</div>
        <div class="indexcommonbox-bottom">
          <p class="title singleomit">{{item.entName}}</p>
          <p class="enter">
            {{item.entStageMarket}}
            <span class="vline"></span>
            {{item.entJobName}}
          </p>
          <p class="about-info">
            <span>{{item.countRecruit}}</span>个热招职位
          </p>
        </div>
      </div>
    </div>
    <div class="common-tab-more">
      <p class="btn-outline" @click="lookMore">查看更多</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "IndexCompanyBox",
  props: {
    indexcommonbox: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {};
  },
  methods: {
    lookMore() {
      this.$router.push("/company");
    },
    itemClick(){
      this.$router.push("/DetailHotCompany")
    }
  },
  components: {},
};
</script>

<style scoped>
.indexcommonbox {
  width: 100%;
  flex-wrap: wrap;
  justify-content: space-between;
}
.indexcommonbox-item {
  background: #fff;
  width: 24%;
  height: 238px;
  box-sizing: border-box;
  margin-bottom: 16px;
  padding: 32px 20px 0 20px;
  text-align: center;
}
.indexcommonbox-item:hover {
  box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.05);
}
.indexcommonbox-item:hover .title {
  color: #00c2b3;
}
.indexcommonbox-top {
  width: 60px;
  height: 60px;
  background: burlywood;
  margin: 0 auto 8px;
}
.title {
  line-height: 35px;
  font-size: 16px;
  color: #61687c;

  /* max-width: 192px; */
  /* display: inline-block; */
  /* vertical-align: middle; */
}
.vline {
  display: inline-block;
  width: 1px;
  height: 12px;
  vertical-align: middle;
  background: #e0e0e0;
  margin: 0 10px;
}
.enter {
  height: 18px;
  line-height: 18px;
  color: #898e9d;
  font-size: 12px;
  display: inline-block;
  white-space: nowrap;
}
.about-info {
  width: 180px;
  height: 34px;
  color: #61687c;
  line-height: 34px;
  font-size: 12px;
  margin: 13px auto 0;
  text-align: center;
  border: 1px solid #e3e7ed;
}
.about-info > span {
  color: #00c2b3;
}
/* 查看更多 */
.common-tab-more {
  text-align: center;
  margin: 0 auto;
  margin-top: 4px;
}
.btn-outline {
  width: 382px;
  font-size: 15px;
  height: 32px;
  line-height: 32px;
  background: #f6f6f8;
  color: #00c2b3;
  min-width: 112px;
  box-sizing: content-box;
  border: 1px #5dd5c8 solid;
  letter-spacing: 1px;
  text-align: center;
  cursor: pointer;
}
.btn-outline:hover {
  color: #fff;
  background: #5dd5c8;
}
</style>
