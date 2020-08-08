<template>
  <div class="companyitem">
    <div class="expact" :class="expactFixed" ref="expact">
      <div class="inner expact-i">
        <div class v-if="isShowCheckBox">
          <el-checkbox v-model="checked" @change="checkClick">根据求职期望</el-checkbox>
          <span class="dropdown-select">
            <span>成都</span>
            <em class="v-line"></em>
            <span>web前端</span>
            <em class="v-line"></em>
            <span>7-12k</span>
          </span>
        </div>
        <el-checkbox v-else v-model="checked" @change="checkClick">根据简历精准匹配</el-checkbox>
        <div class="company-count" v-show="isShowCount">
          共
          <span>28+</span>公司
        </div>
        <div v-show="!isShowCount" class="expact-item">
          <div>
            <span>
              公司地点
              <i class="arrow"></i>
            </span>
            <div class="expactFixed-company">
              <span
                v-for="(item,index) in companyData.cityName"
                :key="item.name"
                @click="companyClick(item,index)"
              >{{item}}</span>
            </div>
          </div>
          <div>
            <span>
              行业类型
              <i class="arrow"></i>
            </span>
            <div class="expactFixed-company expactFixed-companyitem">
              <span
                v-for="(item,index) in companyData.companyitem"
                :key="item.name"
                @click="jobplaceClick(item,index)"
              >{{item}}</span>
            </div>
          </div>
          <div>
            <span>
              融资阶段
              <i class="arrow"></i>
            </span>
            <div class="expactFixed-company expactFixed-financing">
              <span
                v-for="(item,index) in companyData.financing"
                :key="item.name"
                @click="financingClick(item,index)"
              >{{item}}</span>
            </div>
          </div>
          <div>
            <span>
              公司规模
              <i class="arrow"></i>
            </span>
            <div class="expactFixed-company expactFixed-scale">
              <span
                v-for="(item,index) in companyData.scale"
                :key="item.name"
                @click="scaleClick(item,index)"
              >{{item}}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="companyitem-list inner">
      <div
        class="companyitem-list-item"
        v-for="item in companyData.companyitemlist"
        :key="item.name"
      >
        <div class="list-item-top">
          <div class="listimg"></div>
          <div class="listext">
            <h4>{{item.entName}}</h4>
            <p>
              {{item.entStageMarket}}
              <span class="vline"></span>
              {{item.entJobName}}
            </p>
          </div>
        </div>
        <p class="hot">
          热招
          <span class="greencolor">{{item.recTitle}}</span>
          {{item.workSalary}}
        </p>
      </div>
    </div>
    <div class="block inner">
      <el-pagination
        @current-change="handleCurrentChange"
        :current-page.sync="currentPage"
        background
        :pager-count="5"
        :page-size="28"
        layout="prev, pager, next"
        :total="300"
      ></el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  name: "CompanyItem",
  props: {
    companyData: {
      type: Object,
      default() {
        return {};
      },
    },
    companyDataForm: {
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
    return {
      isShowCheckBox: true,
      checked: false,
      expactFixed: "",
      isShowCount: true,
      currentPage: 1,
    };
  },
  mounted() {
    if (this.$store.state.user.userId == null) {
      this.isShowCheckBox = false;
    } else {
      this.isShowCheckBox = true;
    }
    window.addEventListener("scroll", this.positionFixedTop); // 监听（绑定）滚轮滚动事件
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.positionFixedTop); //  离开页面清除（移除）滚轮滚动事件
  },
  methods: {
    checkClick() {
      this.isShowCheckBox = !this.isShowCheckBox;
    },
    //滚轮滑动到一定距离出现固顶
    positionFixedTop() {
      let scrollObj = this.$refs["expact"];
      let scrollNumber = document.documentElement.scrollTop;
      let scrollObjTop = scrollObj.offsetTop; //自身顶部到页面顶部的距离
      if (scrollNumber >= scrollObjTop) {
        this.expactFixed = "expactFixed";
        this.isShowCount = false;
      } else {
        this.expactFixed = "";
        this.isShowCount = true;
      }
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },
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

<style scoped lang="less">
.expact {
  margin: 27px auto;
  padding: 0;
  font-size: 14px;
  line-height: 26px;
  .expact-i {
    display: flex;
    justify-content: space-between;
  }
  ::v-deep .el-checkbox__label {
    font-size: 16px;
  }
  .dropdown-select {
    color: #00c2b3;
    background: 0 0;
    margin-left: 15px;
  }
  .v-line {
    display: inline-block;
    width: 1px;
    height: 12px;
    vertical-align: middle;
    background: #00c2b3;
    margin: 0 10px;
  }
  .company-count span {
    padding: 0 4px;
    color: #00c2b3;
  }
}
//公司职位固定隐藏导航栏
.expactFixed {
  height: 44px;
  line-height: 44px;
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  background: #ffffff;
  transition: all linear 0.2s;
  font-size: 12px;
  .expact-item {
    position: relative;
    display: flex;
    justify-content: space-evenly;
    div {
      cursor: pointer;
    }
    div:hover .expactFixed-company {
      display: block;
    }
    div:hover .arrow {
      animation: arrowT 0.3s forwards;
      @keyframes arrowT {
        100% {
          // transform: translate(180deg);
          transform: rotate(180deg);
        }
      }
    }
  }
  .expact-item span {
    padding: 0 16px;
  }
  .expactFixed-company {
    position: absolute;
    left: -42px;
    top: 44px;
    background: #ffffff;
    height: 90px;
    width: 480px;
    padding: 10px 18px;
    line-height: 34px;
    border: 1px #e3e7ed solid;
    box-shadow: 0 3px 6px rgba(6, 0, 1, 0.05);
    display: none;
    span {
      display: inline-block;
      text-align: center;
      padding: 0 14px;
      cursor: pointer;
    }
    span:hover {
      background-color: #f2f5f9;
    }
  }
  .expactFixed-companyitem {
    height: 230px;
    max-height: 208px;
    overflow: auto;
    span {
      display: inline-block;
      text-align: left;
      width: 108px;
      height: 28px;
      line-height: 28px;
      overflow: hidden;
      white-space: nowrap;
    }
  }
  .expactFixed-financing {
    width: 110px;
    left: 220px;
    height: 176px;
    overflow: auto;
    padding: 0 8px;
  }
  .expactFixed-scale {
    width: 124px;
    left: 314px;
    height: 176px;
    overflow: auto;
    padding: 0 8px;
  }
  //滚动条样式
  ::-webkit-scrollbar {
    width: 4px;
  }
  ::-webkit-scrollbar-track {
    border-radius: 10px;
    background-color: rgba(0, 0, 0, 0.1);
  }
  ::-webkit-scrollbar-thumb {
    border-radius: 10px;
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    background-color: rgba(0, 0, 0, 0.1);
  }
  .arrow {
    display: inline-block;
    margin: 2px 10px;
    border-top: 3px solid #636767;
    border-left: 3px solid transparent;
    border-right: 3px solid transparent;
  }
}
.companyitem-list {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  font-size: 12px;
  .companyitem-list-item:hover {
    box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.05);
    .listext {
      h4 {
        color: #00c2b3;
      }
    }
  }
  .companyitem-list-item {
    height: 140px;
    width: 284px;
    background: #fff;
    padding: 20px 20px 0 20px;
    margin-bottom: 16px;
    cursor: pointer;
    .list-item-top {
      display: flex;
      justify-content: space-between;
      height: 77px;
      .listimg {
        width: 57px;
        height: 57px;
        background: goldenrod;
      }
      .listext {
        text-align: right;
        h4 {
          height: 25px;
          line-height: 25px;
          font-size: 16px;
          font-weight: 400;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        p {
          height: 40px;
          line-height: 41px;
          color: #898e9d;
          font-size: 12px;
          display: inline-block;
          white-space: nowrap;
        }
        .vline {
          display: inline-block;
          width: 1px;
          height: 12px;
          vertical-align: middle;
          background: #e0e0e0;
          margin: 0 10px;
        }
      }
    }
    .hot {
      border-top: 1px dashed #ededed;
      width: 100%;
      color: #8d92a1;
      height: 42px;
      line-height: 42px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }
}
.block {
  text-align: center;
  background: #fff;
  padding: 12px 0;
  margin-bottom: 30px;
}
</style>
