
<template>
  <div>
    <!-- 职位内容区 -->
    <div class="wrap">
      <!-- 职位展示 -->
      <div class="postShowBox">
        <!-- 左边的职位展示列表 -->
        <div>
          <!-- 职位列表 -->
          <ul class="postShow">
            <li>
              <div class="top">
                <div class="top_leftBox" @mouseenter="isShow=true" @mouseleave="isShow=false">
                  <div class="post_nameBox">
                    <!-- 公司名称 -->
                    <p class="postName">Java开发</p>
                    <!-- 公司位子 -->
                    <div class="postPalce">
                      <span>[</span>
                      <span>成都</span>
                      <span>·</span>
                      <span>青羊区</span>
                      <span>]</span>
                      <div class="hoverShowBox flex" v-show="isShow">
                        <div class="topBox flex">
                          <div>
                            <div class="post_Name">腾讯云大客户售后高级顾问</div>
                            <div class="grey">
                              <span>腾讯</span>
                              <span>·</span>
                              <span>招聘者</span>
                              <span>·</span>
                              <span>邴先生</span>
                            </div>
                          </div>
                          <div class="intrestBox flex">
                            <div class="intrest">
                              <span class>♡</span>
                              <span>感兴趣</span>
                            </div>
                            <!-- 立即沟通 -->
                            <el-button type="primary" class="immidContact">立即沟通</el-button>
                          </div>
                        </div>
                        <div class="bottomBox">
                          <p>职位描述</p>
                          <p
                            class="describeText"
                          >阿萨德阿萨德阿萨德阿萨德安抚阿萨德阿萨德阿萨德阿萨德阿萨德阿萨德安德阿萨德阿萨德安德阿萨德阿萨德安德阿萨德阿萨德安德阿萨德阿萨德安德阿萨德阿萨德安德阿萨德阿萨德安德安抚阿萨德阿萨德阿萨德阿萨德安抚阿萨德阿萨德阿萨德阿萨德安抚阿萨德阿萨德阿萨德阿萨德安抚阿萨德阿萨德阿萨德阿萨德安抚阿萨德阿萨德阿萨德阿萨德安抚阿萨德阿萨德阿萨德阿萨德安抚阿萨德阿萨德阿萨德阿萨德安抚阿萨德阿萨德阿萨德阿萨德安抚阿萨德阿萨德阿萨德阿萨德安抚阿萨德阿萨德阿萨德阿萨德安抚阿萨德阿萨德阿萨德阿萨德安抚阿萨德阿萨德阿萨德阿萨德安抚阿萨德阿萨德阿萨德阿萨德安抚阿萨德阿萨德阿萨德阿萨德安抚阿萨德阿萨德阿萨德阿萨德安抚阿萨德阿萨德阿萨德阿萨德安抚阿萨德阿萨德阿萨德阿萨德安抚阿萨德阿萨德阿萨德阿萨德安抚</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="post_require">
                    <!-- 公司要求 -->
                    <div class="salary">3-5K</div>
                    <div class="job_xperience">1-3年</div>
                    <div class="line_btw">|</div>
                    <div class="education">大专</div>
                    <div class="hrBox">
                      <!-- 联系人 -->
                      <span class="el-icon-chat-dot-round green"></span>
                      <span class="hr_name">朱女士</span>
                      <span class="line_btw line_margin">|</span>
                      <span class="hr_post">人事经理</span>
                    </div>
                    <div class="contact">
                      <div class="el-icon-chat-dot-round"></div>
                      <div>联系我们</div>
                    </div>
                  </div>
                </div>
                <div class="top_rightBox">
                  <div class="top_right_left">
                    <div class="company_name">蚂蚁金服</div>
                    <div class="self_label">
                      <!-- 公司自身 -->
                      <span>互联网</span>
                      <span>|</span>
                      <span>不需要融资</span>
                      <span>|</span>
                      <span>10000以上</span>
                    </div>
                  </div>
                  <div class="top_right_right">
                    <img src alt />
                  </div>
                </div>
              </div>
              <div class="bottom">
                <div class="bottom_left">
                  <ul>
                    <!-- 职位标签 -->
                    <li>自动化测试</li>
                    <li>自动化测试</li>
                    <li>自动化测试</li>
                    <li>自动化测试</li>
                  </ul>
                </div>
                <!-- 员工福利 -->
                <div class="bottom_right">补充医疗保险，带薪年假，员工旅游阿萨德按时大声道按时阿萨德sad阿萨德</div>
              </div>
            </li>
          </ul>
          <!-- 分页按钮 -->
          <div class="pagingButtonBox">
            <el-pagination
              background
              layout="prev, pager, next,jumper"
              :total="100"
              :pager-count="5"
              :current-page="currentPage"
              @current-change="handleCurrentChange"
              :page-size="10"
            ></el-pagination>
          </div>
          <!-- 首页才有评价组件 -->
          <div class="evaluationBox">
            <DetailHopePostEvaluate />
          </div>
        </div>
        <!-- 右边登录 广告盒子 -->
        <div class="itemRightBox">
          <!-- 组件-右边没有登录的一些模块 登录广告啥的 -->
          <DetailHopePostItemRight />
        </div>
      </div>
    </div>
    <!-- 尾部筛选导航 -->
    <div class>
      <DetailHopePostFootNav />
    </div>
    <!-- 底部公共 -->
    <FooterL />
  </div>
</template>

<script>
import DetailHopePostItemRight from "./DetailHopePostItemRight";
import DetailHopePostEvaluate from "./DetailHopePostEvaluate";
import DetailHopePostFootNav from "./DetailHopePostFootNav";
import FooterL from "components/content/footer/Footer";

export default {
  name: "",
  data() {
    return {
      currentPage: 1, //当前页
      isShow: false, //简单的职位需求展示
    };
  },
  components: {
    DetailHopePostItemRight,
    DetailHopePostEvaluate,
    DetailHopePostFootNav,
    FooterL,
  },
  methods: {
    // 分页
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },
  },
};
</script>
<style scoped>
.wrap {
  width: 1196px;
  margin: 0 auto;
}
.postShowBox {
  display: flex;
}
.postShow {
  width: 884px;
}
.postShow > li {
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 10px;
  cursor: pointer;
}
.postShow > li:hover .hrBox {
  display: none;
}
.postShow > li:hover .contact {
  display: flex;
}
/* 上盒子 */
.top {
  display: flex;
  background-color: #fff;
  padding-top: 20px;
}
.top_rightBox {
  display: flex;
  flex: 1;
  padding-right: 30px;
  justify-content: space-between;
}
.top_leftBox {
  width: 460px;
  display: flex;
  flex-direction: column;

  padding-left: 30px;
}
.post_nameBox {
  display: flex;
  color: rgb(83, 202, 195);
}
.post_nameBox > p:first-child {
  max-width: 180px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-right: 10px;
}
.post_require {
  display: flex;
  font-size: 14px;
}
.post_require > div {
  margin-right: 10px;
}
.salary {
  color: #fc703e;
  font-size: 16px;
}

.line_btw {
  color: #e0e0e0;
}
.hrBox {
  border: 1px solid #eee;
  border-radius: 20px;
  padding: 0 10px;
}
.line_margin {
  margin: 0 10px;
}
.green {
  color: rgb(83, 202, 195);
}
.company_name {
  color: rgb(83, 202, 195);
}
.self_label > span {
  font-size: 14px;
  margin-right: 10px;
}
.top_right_right > img {
  display: inline-block;
  width: 55px;
  height: 55px;
  border-radius: 10px;
  background-color: blue;
}
/* 下盒子 */
.bottom {
  display: flex;
  background: #f8f9fc;
  padding: 15px 0;
}
.bottom_left {
  width: 460px;
  padding-left: 30px;
  flex-shrink: 0;
}
.bottom_right {
  font-size: 14px;
  flex-grow: 1;
  padding-right: 30px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.bottom_left {
  font-size: 14px;
}
.bottom_left > ul {
  display: flex;
}
.bottom_left > ul > li {
  border: 1px solid #eee;
  padding: 0 5px;
  margin-right: 8px;
}
.contact {
  display: flex;
  align-items: center;
  background-color: rgb(83, 202, 195);
  padding: 0 10px;
  border-radius: 20px;
  color: #fff;
  cursor: pointer;
  display: none;
}
.contact > div:first-child {
  margin-right: 10px;
}
.itemRightBox {
  flex-grow: 1;
  margin-left: 20px;
}
::v-deep .el-pagination.is-background .btn-next,
::v-deep .el-pagination.is-background .btn-prev,
::v-deep .el-pagination.is-background .el-pager li {
  background-color: #fff;
}
.pagingButtonBox {
  text-align: center;
}
.postPalce {
  position: relative;
}
.hoverShowBox {
  z-index: 1000;
  top: -20px;
  left: 250px;
  position: absolute;
  width: 530px;
  background-color: #fff;
  box-shadow: 0px 0px 4px 0px #b3b3b3;
  flex-direction: column;
  color: #414a60;
  font-size: 14px;
}
.flex {
  display: flex;
}
.grey {
  font-size: 12px;
  color: #8d92a1;
}
.topBox {
  padding: 20px 30px;
  justify-content: space-between;
  align-items: center;
  background-color: rgba(187, 255, 255, 0.4);
}
.post_Name {
  font-size: 16px;
}
.intrestBox {
  align-items: center;
}
.intrest {
  color: #8d92a1;
  line-height: 40px;
  margin-right: 25px;
}
.intrest:hover {
  color: rgb(83, 202, 195);
}
.intrest > span:last-child {
  display: inline-block;
}
.intrest > span:first-child {
  display: inline-block;
  position: relative;
  top: 2px;
  font-size: 20px;
  margin-right: 5px;
}
.immidContact {
  border-radius: 0;
}
.bottomBox {
  padding: 10px 30px 20px;
}
.describeText {
  color: #8d92a1;
  height: 200px;
  font-size: 12px;
  max-height: 200px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 8;
  -webkit-box-orient: vertical;
}
</style>
