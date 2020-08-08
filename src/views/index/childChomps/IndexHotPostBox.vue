<template>
  <div>
    <div class="indexcommonbox displayflex">
      <div
        v-for="(item,index) in indexcommonbox"
        :key="item.name"
        class="indexcommonbox-item displayflex cursorpointer"
        @click="DetailHotPostList(index)"
      >
        <div class="indexcommonbox-left">{{item.entLogo}}</div>
        <div class="indexcommonbox-right">
          <p class="title singleomit">{{item.recTitle}}</p>
          <p class="job-text singleomit">
            {{item.workCity}}
            <span class="vline"></span>
            {{item.workExp}}
            <span class="vline"></span>
            {{item.workDip}}
          </p>
          <p class="salary singleomit">
            {{item.workSalary}}
            <!-- {{item.salaryStart * 1>1000?item.salaryStart/1000 +"K":"0."+item.salaryStart/1000+"K"}}-{{item.salaryEnd * 1>1000?item.salaryEnd/1000 +"K":"0."+item.salaryEnd/1000+"K"}} -->
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
  name: "IndexHotPostBox",
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
    //跳转招聘信息详情页面
    DetailHotPostList(index) {
      this.$router.push({ name: "DetailHotPostList", params: { id: index } });
    },
    //查看更多
    lookMore(){
      this.$router.push('/DetailHotPost')
    }
  },
  computed: {},
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
  width: 32.5%;
  height: 130px;
  box-sizing: border-box;
  margin-bottom: 16px;
  padding: 0 30px;
  align-items: center;
}
.indexcommonbox-item:hover {
  box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.05);
}
.indexcommonbox-item:hover .title {
  color: #00c2b3;
}
.indexcommonbox-left {
  width: 60px;
  height: 60px;
  background: burlywood;
  margin-right: 20px;
}
.title {
  line-height: 35px;
  font-size: 16px;
  color: #61687c;

  max-width: 192px;
  display: inline-block;
  vertical-align: middle;
}
.vline {
  display: inline-block;
  width: 1px;
  height: 12px;
  vertical-align: middle;
  background: #e0e0e0;
  margin: 0 10px;
}
.job-text {
  font-size: 14px;
  color: #61687c;
  padding-right: 0;
  line-height: 28px;
  max-width: 240px;
}
.salary {
  line-height: 35px;
  font-size: 16px;
  color: #fc6c38;
  max-width: 240px;
}
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
