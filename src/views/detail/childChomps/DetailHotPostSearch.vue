<template>
  <div class="searchBox">
    <!-- 遮罩层 -->
    <div class="popLayBg" v-show="cityList"></div>

    <!-- 城市选择弹框 -->
    <div class="popBox" v-show="cityList">
      <div class="flex choiceBox">
        <p class="choice">请选择城市</p>
        <p @click="cityList=false" class="x">×</p>
      </div>
      <el-tabs v-model="cityName" @tab-click="cityClick">
        <el-tab-pane label="热门城市" name="热门城市">
          <ul class="hotCity">
            <li>
              <a href="javascript:;">全国</a>
            </li>
            <li>
              <a href="javascript:;">上海</a>
            </li>
            <li>
              <a href="javascript:;">北京</a>
            </li>
          </ul>
        </el-tab-pane>
        <el-tab-pane label="ABCDEF" name="ABCDEF">ABCDEF</el-tab-pane>
        <el-tab-pane label="FGHJ" name="FGHJ">FGHJ</el-tab-pane>
        <el-tab-pane label="KLMN" name="KLMN">KLMN</el-tab-pane>
        <el-tab-pane label="PQRST" name="PQRST">PQRST</el-tab-pane>
        <el-tab-pane label="WXYZ" name="WXYZ">WXYZ</el-tab-pane>
      </el-tabs>
    </div>
    <div class="wrap">
      <!-- 搜索框 -->
      <div class="searchItem">
        <el-select
          v-model="searchPost"
          filterable
          remote
          reserve-keyword
          placeholder="搜索职位、公司"
          :remote-method="remoteMethod"
          :loading="loading"
        >
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
        <el-button type="primary" class="el-icon-search"></el-button>

        <!-- 地点 -->

        <div class="absolute place" @click="cityList = true,isIndustry=false,isPostList=false">
          <span>成都</span>
          <span class="el-icon-caret-bottom"></span>
          <el-divider direction="vertical" class="margin_ft"></el-divider>
        </div>

        <!-- 职位类型 -->
        <div class="relative">
          <div class="absolute postType" @click.stop="isPostList = !isPostList,isIndustry=false">
            <el-divider direction="vertical" class="margin"></el-divider>
            <span>{{postType[postType.length - 1]}}</span>
            <span class="el-icon-caret-bottom"></span>
          </div>
          <!-- 级联职位类型 -->
          <el-cascader
            ref="cascader"
            :options="postOptions"
            class="postSelect"
            v-model="postType"
            v-show="isPostList"
            :props="{ expandTrigger: 'hover',
             value:'id',
             label: 'jobName',
             }"
          >
            <template slot-scope="{ data }">
              <span>{{ data.jobName }}</span>
            </template>
          </el-cascader>
        </div>

        <!-- 公司行业 -->

        <div class="relative" @click.stop="isIndustry=!isIndustry,isPostList=false">
          <div class="absolute company">
            <el-divider direction="vertical" class="margin"></el-divider>
            <span>{{industry}}</span>
            <span class="el-icon-caret-bottom"></span>
          </div>
          <!--  公司行业列表 -->
          <div class="industryList" v-show="isIndustry">
            <ul>
              <li v-for="item in industryOptions" :key="item" @click="industryClick(item)">{{item}}</li>
            </ul>
          </div>
        </div>
      </div>

      <!-- 城市的列表 -->

      <div class="cityList">
        <!-- 第一列城市导航 -->
        <div class="ftLine flex">
          <div class="cityNavBox flex">
            <!-- 3级导航展示 -->
            <div>
              <span class="cityName">成都</span>
            </div>
            <div>
              <span class="arr">></span>
              <span>不限</span>
              <span class="arr">></span>
            </div>
            <div>
              <span>不限</span>
              <span class="arr">></span>
            </div>
            <!-- 热门城市 -->
            <div class="flex">
              <p class="title">热门城市:</p>
              <ul class="flex hotCityList">
                <li>
                  <a href="javascript:;">全国</a>
                </li>
                <li>
                  <a href="javascript:;">成都</a>
                </li>
                <li>
                  <a href="javascript:;">上海</a>
                </li>
                <li>
                  <a href="javascript:;">北京</a>
                </li>
              </ul>
            </div>
          </div>
          <!-- 全部城市按钮 -->
          <div @click="cityList = true">
            <a href="javascript:;">全部城市</a>
          </div>
        </div>
        <!-- 第二列 二级三级城市展示盒子 -->
        <div class="contentBox">
          <ul class="flex">
            <li>
              <a href>绵竹</a>
            </li>
            <li>
              <a href>绵竹</a>
            </li>
            <li>
              <a href>绵竹</a>
            </li>
            <li>
              <a href>绵竹</a>
            </li>
            <li>
              <a href>绵竹</a>
            </li>
            <li>
              <a href>绵竹</a>
            </li>
            <li>
              <a href>绵竹</a>
            </li>
            <li>
              <a href>绵竹</a>
            </li>
            <li>
              <a href>绵竹</a>
            </li>
            <li>
              <a href>绵竹</a>
            </li>
            <li>
              <a href>绵竹</a>
            </li>
            <li>
              <a href>绵竹</a>
            </li>
            <li>
              <a href>绵竹</a>
            </li>
            <li>
              <a href>绵竹</a>
            </li>
            <li>
              <a href>绵竹</a>
            </li>
            <li>
              <a href>绵竹</a>
            </li>
            <li>
              <a href>绵竹</a>
            </li>
            <li>
              <a href>绵竹</a>
            </li>
            <li>
              <a href>绵竹</a>
            </li>
            <li>
              <a href>绵竹</a>
            </li>
            <li>
              <a href>绵竹</a>
            </li>
            <li>
              <a href>绵竹</a>
            </li>
            <li>
              <a href>绵竹</a>
            </li>
          </ul>
        </div>
      </div>
      <!-- 第三列 要求列表 -->
      <!-- 工作经验要求 -->
      <div class="flex request">
        <div class="requestBox flex">
          <el-select v-model="workEx" clearable class="select" placeholder="工作经验">
            <el-option
              v-for="item in $store.state.recruitJobExOptions"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>

          <!-- 学历要求 -->
          <el-select v-model="educationRq" clearable class="select" placeholder="学历要求">
            <el-option
              v-for="item in  $store.state.educationOptions"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>

          <!-- 薪资要求 -->

          <el-select v-model="salaryRq" clearable class="select" placeholder="薪资要求">
            <el-option
              v-for="item in $store.state.salaryRangeOptions"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>

          <!-- 融资阶段 -->

          <el-select v-model="stageRange" clearable class="select" placeholder="融资阶段">
            <el-option
              v-for="item in $store.state.stageRangeOptions"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>

          <!-- 公司规模 -->

          <el-select v-model="companyScale" clearable class="select" placeholder="公司规模">
            <el-option
              v-for="item in $store.state.companyScaleOptions"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </div>
        <div class="clearBtn" @click="clear">
          <a href="javascript:;">清空筛选条件</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// 级联职位选择选项
const postOptions = [
  {
    jobName: "不限",
    id: 1,
  },
];
// 公司行业
const industryOptions = [
  "不限",
  "电子商务",
  "游戏",
  "媒体",
  "广告营销",
  "数据服务",
  "医疗健康",
  "生活服务",
  "o2o",
  "旅游",
  "分类信息",
  "乐视频阅读",
  "在线教育",
  "社交网络",
  "人力资源服务",
  "企业服务",
  "信息安全",
  "智能硬件",
  "移动互联网",
  "互联网",
  "计算机软件",
  "通信网络设备",
  "广告公关 / 会展",
  "互联网金融",
  "物流 / 仓储",
  "贸易 / 进出口",
  "咨询",
  "工程施工",
  "汽车生产",
  "其他行业",
];

import { postCode, getJobOptions } from "network/detailhot";

export default {
  name: "",
  data() {
    return {
      // 滚轮
      scroll: "",
      //搜索框
      searchPost: [],
      options: [],
      list: [],
      loading: false,
      states: [
        "Alabama",
        "Alaska",
        "Arizona",
        "Arkansas",
        "California",
        "Colorado",
        "Connecticut",
        "Delaware",
        "Florida",
        "Georgia",
        "Hawaii",
        "Idaho",
        "Illinois",
        "Indiana",
        "Iowa",
        "Kansas",
        "Kentucky",
        "Louisiana",
        "Maine",
        "Maryland",
        "Massachusetts",
        "Michigan",
        "Minnesota",
        "Mississippi",
        "Missouri",
        "Montana",
        "Nebraska",
        "Nevada",
        "New Hampshire",
        "New Jersey",
        "New Mexico",
        "New York",
        "North Carolina",
        "North Dakota",
        "Ohio",
        "Oklahoma",
        "Oregon",
        "Pennsylvania",
        "Rhode Island",
        "South Carolina",
        "South Dakota",
        "Tennessee",
        "Texas",
        "Utah",
        "Vermont",
        "Virginia",
        "Washington",
        "West Virginia",
        "Wisconsin",
        "Wyoming",
      ],

      //城市选择
      cityList: false, //展示开关
      cityName: "热门城市", //弹窗的默认标签页

      //级联职位选择选项
      postOptions,
      isPostList: false, //展示开关
      postType: ["职位类型"],

      //公司行业选项
      industryOptions,
      isIndustry: false, //展示开关
      industry: "公司行业",

      //筛选条件要求
      workEx: "", //工作经验
      educationRq: "", //学历要求
      salaryRq: "", //薪资要求
      stageRange: "", //融资阶段
      companyScale: "", //公司规模
    };
  },
  mounted() {
    //监听滚轮
    window.addEventListener("scroll", this.menu);
    // 搜索
    this.list = this.states.map((item) => {
      return { value: `value:${item}`, label: `label:${item}` };
    });
    //阻止事件冒泡
    document.querySelector(".postSelect").addEventListener("click", (e) => {
      e.stopPropagation();
    });
    document.querySelector(".industryList").addEventListener("click", (e) => {
      e.stopPropagation();
    });
    //点击其他的地点消失
    document.querySelector(".detailhotpost").addEventListener("click", (e) => {
      this.isPostList = false;
      this.isIndustry = false;
    });
    //获取数据
    this.getData();
    //拿职位三级选项
    this.getPostOptions();
    console.log(this.$refs["cascader"].getCheckedNodes()[0].pathLabels);
  },
  methods: {
    //拿到数据
    getData() {
      postCode().then((result) => {
        console.log(result);
      });
    },
    // 拿到职位选项
    getPostOptions() {
      getJobOptions().then((result) => {
        console.log(result.data.data.children);
        console.log(this.postOptions);
        for (let i = 0; i < result.data.data.children.length; i++) {
          this.postOptions.push(result.data.data.children[i]);
        }

        console.log(this.postOptions);
      });
    },
    //监听滚轮滑动
    menu() {
      this.scroll =
        document.documentElement.scrollTop || document.body.scrollTop;
      console.log(this.scroll);
      console.log(document.querySelector(".postShow").offsetTop);
      if (this.scroll >= document.querySelector(".postShow").offsetTop) {
        document.querySelector(".searchBox").style.position = "sticky";
        document.querySelector(".cityList").style.display = "none";
      } else {
        document.querySelector(".searchBox").style.position = "relative";
        document.querySelector(".cityList").style.display = "block";
      }
    },
    // 默认自动搜索
    remoteMethod(query) {
      if (query !== "") {
        this.loading = true;
        setTimeout(() => {
          this.loading = false;
          this.options = this.list.filter((item) => {
            return item.label.toLowerCase().indexOf(query.toLowerCase()) > -1;
          });
        }, 200);
      } else {
        this.options = [];
      }
    },
    // 行业点击
    industryClick(item) {
      console.log(item);
      this.isPostList = false;
      if (item != "不限") {
        this.industry = item;
      }
    },
    // 要求条件清空
    clear() {
      this.workEx = "";
      this.educationRq = "";
      this.salaryRq = "";
      this.stageRange = "";
      this.companyScale = "";
    },
    //城市弹出框列表
    cityClick(tab, event) {
      console.log(tab, event);
    },
  },
};
</script>
<style scoped>
.flex {
  display: flex;
}
a:hover {
  color: #fc6c38;
}

.searchBox {
  position: relative;
  top: 0;
  z-index: 1000;
  background-color: #fff;
  box-shadow: 0px 1px 5px -1px #b3b3b3;
  margin-bottom: 40px;
}
.popLayBg {
  position: fixed;
  z-index: 1001;
  top: 0;
  right: 0;
  width: 100vw;
  height: 100vh;
  opacity: 0.5;
  background: rgb(0, 0, 0);
}
.popBox {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  z-index: 1002;
  width: 50vw;
  height: 50vh;
  background-color: #fff;
}
.choiceBox {
  padding: 5px 10px 0 20px;

  justify-content: space-between;
}
.choice {
  font-size: 20px;
  line-height: 60px;
}
.wrap {
  width: 1196px;
  margin: 0 auto;
}
.x {
  display: inline-block;
  font-size: 40px;
  color: rgba(0, 0, 0, 0.2);
  cursor: pointer;
}
.x:hover {
  color: #414a60;
}
.searchItem {
  width: 884px;
  height: 90px;
  display: flex;
  align-items: center;
  position: relative;
}
.el-dropdown-link {
  cursor: pointer;
  color: #409eff;
}
.el-icon-arrow-down {
  font-size: 12px;
}

.el-icon-search {
  position: absolute;
  right: 0;
  width: 90px;
  font-size: 25px;
  padding: 9px 20px;
}
.el-select {
  width: 100%;
}
::v-deep .el-input__inner {
  padding: 0 345px 0 100px;
  height: 45px;
  cursor: text;
}
::v-deep .el-input__inner:focus {
  box-shadow: 0px 0px 5px 1px rgba(83, 202, 195, 0.5);
}
::v-deep .el-input__inner,
.el-button {
  border-radius: 0;
}
.relative {
  position: relative;
}
.absolute {
  position: absolute;
  color: #61687c;
  font-size: 14px;
  cursor: pointer;
  display: flex;
  align-items: center;
}
.absolute > span:first-of-type {
  display: inline-block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 56px;
}
::v-deep .el-divider--vertical {
  height: 25px;
}
.place {
  width: 90px;
  padding-left: 20px;
  height: 45px;
  line-height: 45px;
}
.margin_ft {
  margin: 0 0 0 8px;
}
.postType {
  top: -22px;
  right: 200px;
  height: 45px;
  line-height: 45px;
  width: 109px;
}

.company {
  right: 90px;
  top: -22px;
  height: 45px;
  line-height: 45px;
  width: 109px;
}

.el-icon-caret-bottom {
  font-size: 12px;
  color: #61687c;
  padding: 0 10px;
}
.margin {
  margin: 0 20px 0 0;
}

.postSelect {
  position: absolute;
  z-index: 1001;
  background-color: #fff;
  top: 22px;
  left: -310px;
  border-radius: 0;
}
.industryList {
  position: absolute;
  right: 0;
  top: 30px;
  z-index: 1000;
}
.industryList > ul {
  width: 884px;
  box-sizing: border-box;
  height: 270px;
  background-color: #ffffff;
  padding: 25px 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  box-shadow: 0px 1px 6px 0px #b3b3b3;
}
.industryList > ul > li {
  width: 19.5%;
  height: 20px;
  line-height: 20px;
  color: #8d92a1;
  font-size: 14px;
  text-align: center;
}
.industryList > ul > li:hover {
  background-color: rgba(83, 202, 195, 0.5);
}

.ftLine {
  font-size: 12px;
  padding-bottom: 5px;
  justify-content: space-between;
  border-bottom: 1px #eef0f5 solid;
}
.arr {
  padding: 0 18px;
}
.cityName {
  color: #414a60;
  opacity: 0.5;
}
.title {
  margin-right: 30px;
}
.hotCityList > li {
  width: 60px;
}
.contentBox {
  color: #414a60;
  font-size: 12px;
  border-bottom: 1px #eef0f5 solid;
  padding: 10px 0;
}
.contentBox > ul {
  flex-wrap: wrap;
}
.contentBox > ul > li {
  width: 5%;
}
.request {
  justify-content: space-between;
  align-items: center;
}
.requestBox > .el-select {
  width: 10%;
  font-size: 12px;
  margin-right: 40px;
}
.select > ::v-deep .el-input > .el-input__inner {
  border: none;
  padding: 0;
  font-size: 12px;
  color: #fc6c38;
}
.select > ::v-deep .el-input > .el-input__inner:focus {
  box-shadow: none;
}
.clearBtn {
  font-size: 12px;
}
::v-deep .el-tabs__nav-wrap::after {
  background: none;
}
::v-deep .el-tabs__nav {
  width: 100%;
  display: flex;
}
::v-deep .el-dialog__body {
  padding-left: 0;
  padding-right: 0;
}
::v-deep .el-tabs__header {
  background-color: #f9fafb;
}
::v-deep .el-tabs__nav-scroll {
  padding: 0 30px 0 20px;
}
::v-deep .el-tabs__content {
  padding: 0 30px 0 20px;
}
::v-deep .el-tabs__item {
  text-align: center;
  width: 20%;
  font-size: 18px;
}
.hotCity {
  display: flex;
  flex-wrap: wrap;
}
.hotCity > li {
  font-size: 16px;
  width: 10%;
}
</style>