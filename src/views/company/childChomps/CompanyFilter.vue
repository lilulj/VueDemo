<template>
  <div class="jobplace">
    <div class="inner">
      <div class="jobplace-work">
        <span class="title">公司地点:</span>
        <div>
          <span
            v-for="(item,index) in companyData.cityName"
            :key="item.name"
            :class="index===companyDataIndex.companyIndex?'greencolor':''"
            @click="companyClick(item,index)"
          >{{item}}</span>
        </div>
      </div>
      <div class="jobplace-item">
        <span class="title">行业类型:</span>
        <div>
          <span
            v-for="(item,index) in companyData.companyitem"
            :key="item.name"
            :class="index===companyDataIndex.jobplaceIndex?'greencolor':''"
            @click="jobplaceClick(item,index)"
          >{{item}}</span>
        </div>
      </div>
      <!-- 融资阶段 -->
      <div class="jobplace-financing">
        <span class="title">融资阶段:</span>
        <div>
          <span
            v-for="(item,index) in companyData.financing"
            :key="item.name"
            :class="index===companyDataIndex.financingIndex?'greencolor':''"
            @click="financingClick(item,index)"
          >{{item}}</span>
        </div>
      </div>
      <!-- 公司规模 -->
      <div class="jobplace-scale">
        <span class="title">公司规模:</span>
        <div>
          <span
            v-for="(item,index) in companyData.scale"
            :key="item.name"
            :class="index===companyDataIndex.scaleIndex?'greencolor':''"
            @click="scaleClick(item,index)"
          >{{item}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CompanyFilter",
  props: {
    companyData: {
      type: Object,
      default() {
        return {};
      },
    },
    companyDataIndex: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  data() {
    return {};
  },
  methods: {
    //搜索查询
    //公司地点
    companyClick(item, index) {
      this.companyDataIndex.companyIndex = index;
      this.$emit("companyClick", item);
    },
    //搜索查询
    //行业类型
    jobplaceClick(item, index) {
      this.companyDataIndex.jobplaceIndex = index;
      this.$emit("jobplaceClick", item);
    },
    //搜索查询
    //融资阶段
    financingClick(item, index) {
      this.companyDataIndex.financingIndex = index;
      this.$emit("financingClick", item);
    },
    //搜索查询
    //公司规模
    scaleClick(item, index) {
      this.companyDataIndex.scaleIndex = index;
      this.$emit("scaleClick", item);
    },
  },
  components: {},
};
</script>

<style lang="less" scoped>
.jobplace {
  padding: 30px 0 17px;
  font-size: 14px;
  background-color: #fff;
  line-height: 25px;
  span {
    display: inline-block;
    margin-right: 6px;
    padding: 0 8px;
    font-size: 13px;
    color: #959bac;
    cursor: pointer;
  }
  span:hover {
    color: #00d7c6;
  }
  .title {
    font-size: 14px;
    font-weight: 500;
    color: #414a60;
    width: 90px;
    flex-shrink: 0;
  }
  .greencolor {
    color: #00d7c6;
  }
  .jobplace-work {
    margin: 0 auto 13px;
    display: flex;
  }
  .jobplace-item,
  .jobplace-financing,
  .jobplace-scale {
    display: flex;
    margin: 0 auto 13px;
  }
}
</style>
