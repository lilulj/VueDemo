<template>
  <div>
    <nav-bar>
      <div slot="navbar-search" class="navbar-search">
        <input type="text" name id class="input-search" placeholder="搜索职位、公司" />
        <button class="btn-search icon-common"></button>
      </div>
    </nav-bar>
    <company-filter
      :companyData="companyData"
      :companyDataIndex="companyDataIndex"
      @companyClick="companyClick"
      @jobplaceClick="jobplaceClick"
      @financingClick="financingClick"
      @scaleClick="scaleClick"
    ></company-filter>
    <company-item
      :companyData="companyData"
      :companyDataForm="companyDataForm"
      :companyDataIndex="companyDataIndex"
      @companyClick="companyClick"
      @jobplaceClick="jobplaceClick"
      @financingClick="financingClick"
      @scaleClick="scaleClick"
    ></company-item>
    <footer-company></footer-company>
  </div>
</template>

<script>
import NavBar from "components/content/navbar/NavBar";
import CompanyFilter from "./childChomps/CompanyFilter";
import CompanyItem from "./childChomps/CompanyItem";

import FooterCompany from "components/content/footer/Footer";

import { getfindRecByFunnel } from "network/company";
export default {
  name: "Company",
  data() {
    return {
      companyData: {
        cityName: [
          "全国",
          "成都",
          "北京",
          "上海",
          "广州",
          "深圳",
          "杭州",
          "天津",
          "西安",
          "厦门",
          "长沙",
          "武汉",
          "郑州",
          "重庆",
          "全部城市",
        ],
        companyitem: [
          "不限",
          "电子商务",
          "游戏",
          "媒体",
          "广告营销",
          " 数据服务",
          "医疗健康",
          "生活服务",
          "O2O",
          "旅游",
          "分类信息",
          "音乐/视频/阅读",
          "在线教育",
          "社交网络",
          "人力资源服务",
          "企业服务",
          "信息安全",
          "智能硬件",
          "移动互联网",
          "互联网",
          "计算机软件",
          " 通信/网络设备",
          "广告/公关/会展",
          "互联网金融",
          "物流/仓储",
          "贸易/进出口",
          "咨询",
          "工程施工",
          "汽车生产",
          "其他行业",
        ],
        financing: [
          "不限",
          "未融资",
          "天使轮",
          "A轮",
          "B轮",
          "C轮",
          "D轮及以上",
          "已上市",
          "不需要融资",
        ],
        scale: [
          "不限",
          "0-20人",
          "20-99人",
          "100-499人",
          "500-999人",
          "1000-9999人",
          "10000人以上",
        ],
        companyitemlist: [],
      },
      companyDataForm: {
        entAddr: null,
        entJobName: null,
        entStageScale: null,
        entStageFinace: null,
        jobName: null,
        workCity: null,
        page: 1,
        pageSize: 28,
      },
      companyDataIndex: {
        companyIndex: 0,
        jobplaceIndex: 0,
        financingIndex: 0,
        scaleIndex: 0,
      },
    };
  },
  components: {
    NavBar,
    CompanyFilter,
    CompanyItem,
    FooterCompany,
  },
  mounted() {
    this.getfindRecByFunnel();
  },
  methods: {
    //默认获取求职期望的里面数据的查询
    getfindRecByFunnel() {
      getfindRecByFunnel(this.companyDataForm).then((result) => {
        if (result.data.code === 200) {
          this.companyData.companyitemlist = result.data.data.list;
        }
      });
    },
    //搜索查询
    //公司地点
    companyClick(val) {
      this.companyDataForm.entAddr = val;
      getfindRecByFunnel(this.companyDataForm).then((result) => {
        if (result.data.code === 200) {
          this.companyData.companyitemlist = result.data.data.list;
        }
      });
    },
    //搜索查询
    //行业类型
    jobplaceClick(val) {
      this.companyDataForm.entJobName = val;
      getfindRecByFunnel(this.companyDataForm).then((result) => {
        if (result.data.code === 200) {
          this.companyData.companyitemlist = result.data.data.list;
        }
      });
    },
    //搜索查询
    //融资阶段
    financingClick(val) {
      this.companyDataForm.entStageFinace = val;
      getfindRecByFunnel(this.companyDataForm).then((result) => {
        if (result.data.code === 200) {
          this.companyData.companyitemlist = result.data.data.list;
        }
      });
    },
    //搜索查询
    //公司规模
    scaleClick(val) {
      this.companyDataForm.entStageScale = val;
      getfindRecByFunnel(this.companyDataForm).then((result) => {
        if (result.data.code === 200) {
          this.companyData.companyitemlist = result.data.data.list;
        }
      });
    },
  },
};
</script>

<style scoped lang="less">
/* 头部导航 插槽 */
.navbar-search {
  position: relative;
}
/* 输入框 */
.input-search {
  border: 1px #5dd5c8 solid;
  width: 173px;
  height: 28px;
  padding: 3px 12px;
  line-height: 28px;
  border-radius: 20px;
  font-size: 12px;
  background: 0 0;
  color: #9fa3b0;
  outline: none;
}
/* 搜索按钮 */
.btn-search {
  width: 28px;
  height: 26px;
  background-position: 10px -1719px;
  background-color: transparent;
  background-repeat: no-repeat;
  border: 0;
  cursor: pointer;
  position: absolute;
  top: 11px;
  right: 10px;
  outline: none;
}
</style>
