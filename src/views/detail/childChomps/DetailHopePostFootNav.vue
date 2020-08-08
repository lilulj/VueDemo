<template>
  <!-- 职位页面尾部导航 -->
  <div class="box">
    <div class="wrap">
      <el-tabs v-model="activeName" @tab-click="handleClick" :stretch="true">
        <el-tab-pane label="热门职位" name="first">
          <ul>
            <li>热门职位111</li>
            <li>热门职位111</li>
            <li>热门职位111</li>
            <li>热门职位111</li>
            <li>热门职位111</li>
            <li>热门职位111</li>
            <li>热门职位111</li>
            <li>热门职位111</li>
            <li>热门职位111</li>
            <li>热门职位111</li>
            <li>热门职位111</li>
            <li>热门职位111</li>
            <li>热门职位111</li>
            <li>热门职位111</li>
            <li>热门职位111</li>
            <li>热门职位111</li>
            <li>热门职位111</li>
          </ul>
        </el-tab-pane>
        <el-tab-pane label="热门城市" name="second">
          <ul>
            <li>热门城市</li>
          </ul>
        </el-tab-pane>
        <el-tab-pane label="热门企业" name="third">
          <ul>
            <li>热门企业</li>
          </ul>
        </el-tab-pane>
        <el-tab-pane label="附近城市" name="fourth">
          <ul>
            <li>附近城市</li>
          </ul>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      activeName: "first",
    };
  },
  methods: {
    // 标签页
    handleClick(tab, event) {
      console.log(tab, event);
    },
  },
};
</script>
<style scoped>
.box {
  background-color: #fff;
}
.wrap {
  width: 1196px;
  margin: 0 auto;
}
::v-deep .el-tabs__nav-wrap::after {
  background: none;
}
::v-deep .el-tabs__item {
  font-size: 15px;
  padding: 0 150px;
  margin-top: 10px;
}
::v-deep .el-tab-pane > ul {
  display: flex;
  flex-wrap: wrap;
}
::v-deep .el-tab-pane > ul > li {
  font-size: 14px;
  line-height: 35px;
  padding: 0 30px 5px 0;
  cursor: pointer;
  color: #8d92a1;
}
::v-deep .el-tab-pane > ul > li:hover {
  color: rgb(83, 202, 195);
}
</style>