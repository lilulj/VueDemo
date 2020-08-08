<template>
  <div>
    <nav-bar>
      <div slot="navbar-search" class="navbar-search">
        <input type="text" name id class="input-search" placeholder="搜索职位、公司" />
        <button class="btn-search icon-common"></button>
      </div>
    </nav-bar>
    <div class="job-banner" ref="positionFixedTop" :class="isShowFiexdTop?'job-banner-fixed':''">
      <div class="inner job-primary">
        <div class="info-primary">
          <div class="name">
            <div class="img"></div>
            <div class="info">
              <h1>去哪儿</h1>
              <p>
                <span>不需要融资</span>
                <em class="dolt"></em>
                <span>1000-9999人</span>
                <em class="dolt"></em>
                <span>互联网</span>
              </p>
            </div>
          </div>
        </div>
        <div class="job-op">
          <div class="stat">
            <span v-show="!isShowFiexdTop">
              <b>153</b>
              在招职位
            </span>
            <em class="vline"></em>
            <span v-show="!isShowFiexdTop">
              <b>50</b>
              位BOSS
            </span>
          </div>
          <div class="op-container">
            <!-- 在线简历 -->
            <span>填写在线简历</span>
            <span>上传附件简历</span>
          </div>
        </div>
      </div>
    </div>
    <div :class="isShowFiexdTop?'banner-fixed':''"></div>
    <div class="companyinfo">
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="公司简介" name="first">
          <div class="company-hotjob inner" ref="positionFixedHeight">
            <div class="hotjob">
              <h3>热招职位</h3>
              <p>查看全部156个职位 ></p>
            </div>
            <ul>
              <li>
                <div>
                  <p>高级Java开发工程师</p>
                  <p class="salary">20-35K·16薪</p>
                </div>
                <p class="gray">3-5年·本科·北京</p>
              </li>
              <li>
                <div>
                  <p>高级Java开发工程师</p>
                  <p class="salary">20-35K·16薪</p>
                </div>
                <p class="gray">3-5年·本科·北京</p>
              </li>
              <li>
                <div>
                  <p>高级Java开发工程师</p>
                  <p class="salary">20-35K·16薪</p>
                </div>
                <p class="gray">3-5年·本科·北京</p>
              </li>
            </ul>
          </div>
          <div class="company-box">
            <div class="inner job-box">
              <div class="job-detail">
                <div class="job-sec">
                  <h3>去哪儿简介</h3>
                  <div class="text" :class="isShowMore?'hide-text':''">
                    去哪儿网（Qunar.com）是中国领先的无线和在线旅游平台，其网站上线于2005年5月，公司总部位于北京。去哪儿网致力于建立一个为整个旅游业价值链服务的生态系统，并通过科技来改变人们的旅行方式。去哪儿网通过其自有技术平台有效匹配旅游业的供需，满足旅游服务供应商和中国旅行者的需求。对旅游服务供应商而言，去哪儿网通过移动客户端及在线平台为其提供技术基础设施；对旅行者而言，去哪儿网通过网站及移动客户端的全平台覆盖，随时随地为其提供国内外机票、酒店、度假、旅游团购、及旅行信息的深度搜索，帮助旅行者找到性价比较高的产品、较优质的信息和便捷的预订方式，聪明地安排旅行。
                    <br />根据2014年9月艾瑞监测数据，在旅行类网站月度独立访问量统计中，去哪儿网以4474万人名列前茅。截至2015年3月31日，去哪儿网可实时搜索约9，000家旅游代理商网站，搜索范围覆盖全球范围内超过28万条国内及国际航线、约103万家酒店、85万余条度假线路、近万个旅游景点，并且每日提供超过20万种旅游团购产品。去哪儿网移动客户端“去哪儿旅行”是中国旅行类较受欢迎的移动应用，截至第一季度末拥有超过8亿的激活下载量。根据中国互联网络信息中心（CNNIC）发布的《2012年中国网民在线旅行预订行为调查报告》，去哪儿旅行是手机旅行信息查询用户安装和使用较多的移动客户端。
                    <span
                      class="more"
                      @click="moreClick"
                    >{{isShowMore?'...收起':'...展开'}}</span>
                  </div>
                </div>
                <div class="job-sec">
                  <h3>产品介绍</h3>
                  <div class="name">
                    <div class="img"></div>
                    <div>
                      <div class="text-">
                        <span>去哪儿旅行</span>
                        <em class="vline"></em>
                        <span>聪明你的旅行</span>
                      </div>
                      <p>http://www.qunar.com</p>
                    </div>
                  </div>
                </div>
                <div class="job-sec">
                  <h3>工商信息</h3>
                  <div class="hfour">
                    <p>北京趣拿软件科技有限公司</p>
                    <p class="gray">来源：企查查</p>
                  </div>
                  <div class="business-detail">
                    <p>
                      <span>法人代表:陈刚</span>
                      <span>注册资本：60000万美元</span>
                      <span>成立时间：2006-10-10</span>
                      <span class="business-more">展开</span>
                    </p>
                  </div>
                </div>
                <div class="job-sec">
                  <h3>公司地址</h3>
                  <div class="company-addr"></div>
                </div>
                <div class="job-sec">
                  <h3>在招职位</h3>
                  <ul>
                    <li>
                      <div>
                        <span class="title">资深运维工程师—机票目的地事业群</span>
                        <span class="job-area">[北京]</span>
                        <p>
                          <span class="red">25-40K·16薪</span>
                          经验不限
                          <em class="vline"></em>
                          本科
                        </p>
                      </div>
                      <div class="info-publis">
                        <span class="img"></span>
                        <span>孙女士</span>
                        <em class="vline"></em>
                        <span>hrbp</span>
                      </div>
                    </li>
                    <li>
                      <div>
                        <span class="title">资深运维工程师—机票目的地事业群</span>
                        <span class="job-area">[北京]</span>
                        <p>
                          <span class="red">25-40K·16薪</span>
                          经验不限
                          <em class="vline"></em>
                          本科
                        </p>
                      </div>
                      <div class="info-publis">
                        <span class="img"></span>
                        <span>孙女士</span>
                        <em class="vline"></em>
                        <span>hrbp</span>
                      </div>
                    </li>
                    <li>
                      <div>
                        <span class="title">资深运维工程师—机票目的地事业群</span>
                        <span class="job-area">[北京]</span>
                        <p>
                          <span class="red">25-40K·16薪</span>
                          经验不限
                          <em class="vline"></em>
                          本科
                        </p>
                      </div>
                      <div class="info-publis">
                        <span class="img"></span>
                        <span>孙女士</span>
                        <em class="vline"></em>
                        <span>hrbp</span>
                      </div>
                    </li>
                    <li>
                      <div>
                        <span class="title">资深运维工程师—机票目的地事业群</span>
                        <span class="job-area">[北京]</span>
                        <p>
                          <span class="red">25-40K·16薪</span>
                          经验不限
                          <em class="vline"></em>
                          本科
                        </p>
                      </div>
                      <div class="info-publis">
                        <span class="img"></span>
                        <span>孙女士</span>
                        <em class="vline"></em>
                        <span>hrbp</span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane label="职位招聘(156)" name="second">
          <div class="company-box1 inner">
            <div class="job-category">
              <p class="job-category-label">职位类型:</p>
              <p class="job-category-items">
                <span>全部 (156)</span>
                <span>技术 (67)</span>
                <span>产品 (38)</span>
                <span>运营 (15)</span>
                <span>销售 (12)</span>
                <span>人事/财务/行政 (9)</span>
                <span>设计 (7)</span>
                <span>市场 (3)</span>
                <span>旅游 (3)</span>
                <span>传媒 (1)</span>
                <span>金融 (1)</span>
              </p>
            </div>
            <div class="job-list">
              <ul class="list">
                <li>
                  <div>
                    <span class="title">资深运维工程师—机票目的地事业群</span>
                    <span class="job-area">[北京]</span>
                    <p>
                      <span class="red">25-40K·16薪</span>
                      经验不限
                      <em class="vline"></em>
                      本科
                    </p>
                  </div>
                  <div class="info-publis">
                    <span class="img"></span>
                    <span>孙女士</span>
                    <em class="vline"></em>
                    <span>hrbp</span>
                  </div>
                </li>
                <li>
                  <div>
                    <span class="title">资深运维工程师—机票目的地事业群</span>
                    <span class="job-area">[北京]</span>
                    <p>
                      <span class="red">25-40K·16薪</span>
                      经验不限
                      <em class="vline"></em>
                      本科
                    </p>
                  </div>
                  <div class="info-publis">
                    <span class="img"></span>
                    <span>孙女士</span>
                    <em class="vline"></em>
                    <span>hrbp</span>
                  </div>
                </li>
                <li>
                  <div>
                    <span class="title">资深运维工程师—机票目的地事业群</span>
                    <span class="job-area">[北京]</span>
                    <p>
                      <span class="red">25-40K·16薪</span>
                      经验不限
                      <em class="vline"></em>
                      本科
                    </p>
                  </div>
                  <div class="info-publis">
                    <span class="img"></span>
                    <span>孙女士</span>
                    <em class="vline"></em>
                    <span>hrbp</span>
                  </div>
                </li>
                <li>
                  <div>
                    <span class="title">资深运维工程师—机票目的地事业群</span>
                    <span class="job-area">[北京]</span>
                    <p>
                      <span class="red">25-40K·16薪</span>
                      经验不限
                      <em class="vline"></em>
                      本科
                    </p>
                  </div>
                  <div class="info-publis">
                    <span class="img"></span>
                    <span>孙女士</span>
                    <em class="vline"></em>
                    <span>hrbp</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </el-tab-pane>
      </el-tabs>
    </div>
    <footer-company></footer-company>
  </div>
</template>

<script>
import NavBar from "components/content/navbar/NavBar";
import FooterCompany from "components/content/footer/Footer";
export default {
  name: "DetailHotCompany",
  data() {
    return {
      activeName: "first",
      isShowMore: false,
      isShowFiexdTop: false,
    };
  },
  mounted() {
    window.addEventListener("scroll", this.positionFixedTop); // 监听（绑定）滚轮滚动事件
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.positionFixedTop); //  离开页面清除（移除）滚轮滚动事件
  },
  methods: {
    handleClick(tab, event) {
      //   console.log(tab, event);
    },
    //展开
    moreClick() {
      this.isShowMore = !this.isShowMore;
    },
    //滚轮滑动到一定距离出现固顶
    positionFixedTop() {
      let scrollObj = this.$refs["positionFixedTop"];
      let scrollObjHeight = this.$refs["positionFixedHeight"].scrollHeight;
      let scrollNumber =
        document.documentElement.scrollTop || document.body.scrollTop;
      let scrollTop =
        scrollObj.offsetTop + scrollObj.scrollHeight + scrollObjHeight; //自身底部到页面顶部的距离 + 热招职位的高度
      if (scrollNumber > scrollTop) {
        this.isShowFiexdTop = true;
      } else {
        this.isShowFiexdTop = false;
      }
    },
  },
  components: {
    NavBar,
    FooterCompany,
  },
};
</script>

<style scoped lang='less'>
body {
  overflow-y: hidden;
}
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
//单行省略
@single: {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
};
/* 工作导航 */
.job-banner {
  height: 190px;
  padding: 24px 0;
  background: #444c60 url(~assets/img/detail-bg.jpg) center center no-repeat;
  color: #fff;
  .job-primary {
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .name {
      display: flex;
      align-items: center;
      .img {
        width: 103px;
        height: 103px;
        background: #00d7c6;
        border-radius: 13px;
      }
      .info {
        margin-left: 25px;
        h1 {
          font-size: 32px;
          margin: 0;
          line-height: 48px;
          padding: 0 0 3px 0;
          font-weight: normal;
          @single();
        }
        p {
          line-height: 20px;
          padding: 0;
          color: rgba(255, 255, 255, 0.7);
          margin-bottom: 13px;
          font-size: 14px;
          @single();
        }
        .dolt {
          display: inline-block;
          vertical-align: middle;
          width: 2px;
          height: 2px;
          margin: 0 7px;
          border-radius: 50%;
          background-color: rgba(255, 255, 255, 0.7);
        }
      }
    }
  }
  .job-op {
    width: 272px;
    .stat {
      text-align: right;
      span {
        display: inline-block;
        vertical-align: middle;
        line-height: 1.3;
        font-size: 14px;
        b {
          line-height: 50px;
          color: #fff;
          padding: 0;
          display: block;
          font-size: 36px;
          font-weight: 400;
          line-height: 36px;
          padding-bottom: 8px;
          text-align: right;
        }
      }
      .vline + span {
        width: 176px;
      }
    }
    .op-container {
      margin-top: 25px;
      font-size: 16px;
      color: #5ed5c8;
      display: flex;
      justify-content: space-between;
    }
  }
}
//固定工作导航
.job-banner-fixed {
  position: fixed;
  right: 0;
  left: 0;
  top: 0;
  z-index: 1010;
}
.banner-fixed {
  height: 190px;
  visibility: hidden;
}
//公司简介
.companyinfo {
  position: relative;
  top: -45px;
  margin-bottom: -45px;
  ::v-deep .el-tabs__header {
    margin: 0;
  }
  ::v-deep .el-tabs__nav-scroll {
    width: 1184px;
    margin: 0 auto;
  }
  ::v-deep .el-tabs__nav-wrap::after {
    display: none;
  }
  ::v-deep .el-tabs__item {
    color: #fff;
    font-size: 16px;
    font-weight: normal;
    height: 45px;
  }
  ::v-deep .el-tabs__item.is-active {
    color: #5dd5c8;
  }
  //热招职位
  .company-hotjob {
    padding: 25px 0 18px 0;
    .hotjob {
      display: flex;
      justify-content: space-between;
      padding-bottom: 20px;
      h3 {
        font-weight: normal;
        font-size: 16px;
      }
      p {
        font-size: 14px;
        color: #9fa3b0;
        font-weight: 400;
        cursor: pointer;
      }
    }
    ul {
      display: flex;
      justify-content: space-between;
      li {
        width: 384px;
        height: 100px;
        box-sizing: border-box;
        padding: 19px 20px 17px;
        background: #fff;
        div {
          display: flex;
          justify-content: space-between;
          padding-bottom: 10px;
          p {
            @single();
          }
          .salary {
            color: #fc703e;
          }
        }
        .gray {
          color: #9fa3af;
          font-size: 14px;
          @single();
        }
      }
    }
  }
  //简介
  .company-box {
    background: #fff;
    .job-box {
      padding-top: 30px;
      display: flex;
      /* 职位详细 */
      .job-detail {
        width: 836px;
        padding-right: 25px;
        border-right: 1px #f5f7f9 solid;
        padding-bottom: 45px;
        min-height: 813px;
        /* 职位描述 */
        .job-sec {
          .text {
            color: #61687c;
            line-height: 36px;
            font-size: 14px;
            position: relative;
            max-height: 180px;
            overflow: hidden;
            .more {
              position: absolute;
              bottom: 0;
              right: 15px;
              color: #9fa3b0;
              cursor: pointer;
            }
          }
          .hide-text {
            max-height: none;
          }
          .img {
            width: 60px;
            height: 60px;
            border-radius: 12px;
            background-color: #f7f7f7;
            margin-right: 25px;
          }
          .name {
            display: flex;
            .vline {
              display: inline-block;
              width: 1px;
              height: 12px;
              vertical-align: middle;
              background: #e0e0e0;
              margin: 0 10px;
            }
            .text- {
              line-height: 24px;
              padding-bottom: 7px;
            }
            p {
              @single();
              font-size: 14px;
              color: #9fa3af;
            }
          }
          .hfour {
            font-size: 16px;
            margin-bottom: 13px;
            display: flex;
            justify-content: space-between;
            .gray {
              font-size: 14px;
              color: #9fa3b0;
            }
          }
          .business-detail {
            border: 1px #d9dadf solid;
            padding: 25px 0 25px 25px;
            position: relative;
            span {
              display: inline-block;
              margin-right: 100px;
              font-size: 14px;
            }
            .business-more {
              position: absolute;
              right: 30px;
              margin-right: 0;
              cursor: pointer;
            }
          }
          .company-addr {
            height: 327px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            margin-top: 20px;
            font-size: 13px;
          }
          ul {
            li {
              border-bottom: 1px solid #f4f4f6;
              padding: 25px 0;
              display: flex;
              justify-content: space-between;
              align-items: center;
              .info-publis {
                .img {
                  width: 20px;
                  height: 20px;
                  border-radius: 40px;
                  vertical-align: middle;
                  display: inline-block;
                  margin: -3px 10px 0 0;
                  background: #00d7c6;
                }
              }
              .vline {
                display: inline-block;
                width: 1px;
                height: 12px;
                vertical-align: middle;
                background: #e0e0e0;
                margin: 0 10px;
              }
              .title {
                display: inline-block;
                max-width: 192px;
                color: #00c2b3;
                vertical-align: middle;
                @single();
              }
              .job-area {
                display: inline-block;
                vertical-align: middle;
                color: #00c2b3;
              }
              p {
                font-size: 14px;
                margin-top: 5px;
                .red {
                  font-size: 16px;
                  color: #fc703e;
                  margin-right: 16px;
                }
              }
            }
          }
        }
        .job-sec h3 {
          font-weight: 700;
          font-size: 15px;
          color: #424a5e;
        }
        .job-sec h3 {
          color: #424a5e;
          line-height: 50px;
          padding: 0 0 10px 0;
          margin-bottom: 0;
          position: relative;
        }
        .job-sec h3::after {
          position: absolute;
          content: "";
          display: block;
          width: 19px;
          height: 2px;
          background: #72e7c6;
          bottom: 12px;
        }
      }
    }
  }
  .company-box1 {
    height: 1000px;
    .job-category {
      display: flex;
      font-size: 14px;
      padding: 20px 0 15px 30px;
      background: #fff;
      margin-top: 1px;
      margin-bottom: 18px;
      .job-category-label {
        width: 90px;
        flex-shrink: 1;
        line-height: 40px;
      }
      .job-category-items {
        span {
          display: inline-block;
          line-height: 40px;
          margin: 0 50px 5px 0;
        }
      }
    }
    .job-list {
      .list {
        width: 884px;
        li {
          border-bottom: 1px solid #f4f4f6;
          background: #fff;
          padding: 25px 30px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 10px;
          .info-publis {
            .img {
              width: 20px;
              height: 20px;
              border-radius: 40px;
              vertical-align: middle;
              display: inline-block;
              margin: -3px 10px 0 0;
              background: #00d7c6;
            }
          }
          .vline {
            display: inline-block;
            width: 1px;
            height: 12px;
            vertical-align: middle;
            background: #e0e0e0;
            margin: 0 10px;
          }
          .title {
            display: inline-block;
            max-width: 192px;
            color: #00c2b3;
            vertical-align: middle;
            @single();
          }
          .job-area {
            display: inline-block;
            vertical-align: middle;
            color: #00c2b3;
          }
          p {
            font-size: 14px;
            margin-top: 5px;
            .red {
              font-size: 16px;
              color: #fc703e;
              margin-right: 16px;
            }
          }
        }
      }
    }
  }
}
</style>
