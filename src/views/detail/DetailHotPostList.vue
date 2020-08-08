<template>
  <div class="DetailHotPostList">
    <nav-bar>
      <div slot="navbar-search" class="navbar-search">
        <input type="text" name id class="input-search" placeholder="搜索职位、公司" />
        <button class="btn-search icon-common"></button>
      </div>
    </nav-bar>
    <!-- 工作经验 -->
    <div class="job-banner">
      <div class="inner job-primary">
        <div class="info-primary">
          <div class="job-status">
            <span>招聘中</span>
          </div>
          <div class="name">
            <h1 class="singleomit">高级前端开发</h1>
            <span class="salary">20-40K</span>
          </div>
          <p>
            成都
            <em class="dolt"></em>
            5-10年
            <em class="dolt"></em>
            本科
          </p>
          <div class="job-tags">
            <span>五险一金</span>
            <span>补充医疗保险</span>
            <span>定期体检</span>
            <span>年终奖</span>
            <span>带薪年假</span>
            <span>员工旅游</span>
            <span>通讯补贴</span>
            <span>节日福利</span>
          </div>
        </div>
        <div class="job-op">
          <div class="btn-container">立即沟通</div>
          <div class="op-container displayflex">
            <!-- 在线简历 -->
            <span>填写在线简历</span>
            <span>上传附件简历</span>
          </div>
        </div>
      </div>
    </div>
    <!-- 公司招聘职位描述 -->
    <div class="inner job-box">
      <div class="job-detail">
        <div class="job-detail-title">
          <div class="jobdispaly">
            <div class="detail-figure"></div>
            <div class="detail-op">
              <h2 class="name">吴女士</h2>
              <p>
                招聘主管
                <em class="vdot">·</em>刚刚在线
              </p>
            </div>
          </div>
          <div class="op-link">
            <span>微信扫码分享</span>
            <span>感兴趣</span>
            <span>举报</span>
          </div>
        </div>
        <div class="job-sec">
          <h3>职位描述</h3>
          <div class="text">
            主要职责：
            <br />1、负责日常电商店铺视觉管理，规范并不断完善工作流程及规章制度；
            <br />2、负责各电商平台店铺的视觉、文案策划工作，包括拍摄风格、拍摄效果的设计，呈现效果设计、活动主题、文案策划、拍摄过程、筹备等工作；
            <br />3、负责协助部门月度任务的达成，制定科室工作计划；
            <br />4、电商平台品牌视觉标准的维护，分平台视觉定位；
            <br />5、负责页面营销效果监控与提升；
            <br />6、视觉培训专项会议及学习计划，视觉趋势把控；
            <br />7、视觉科员工的工作绩效考评、奖惩及相关业务的指导和培训。
            <br />任职要求：
            <br />1、5年以上电商领域工作经验，本科以上学历，美术类、营销类相关专业；
            <br />2、熟悉各平台操作、精通PS、Dreamweaver、代码编辑、数据工具等；
            <br />3、具备分析判断能力，针对店铺规划、产品结构、流量结构、推广等数据进行有效分析；
            <br />4、具备良好组织协调及沟通能力，能够协调各部门完成活动页面沟通、活动上线；
            <br />5、办事沉稳、细致，思维活跃，有创新精神；
            <br />6、具备良好的线上平台营销策划能力，业务推进能力，有较高的热情；
            <br />7、优秀的品行和职业素质，强烈的敬业精神与责任感。
          </div>
        </div>
        <div class="job-sec company-info">
          <h3>公司介绍</h3>
          <div class="text">
            全友家私有限公司创建于1986年，经过三十余载的励精图治，已发展成为集研、产、销一体的大型现代化家居企业。
            <br />公司主要生产板式套房家具、实木家具、床垫、沙发、软床和定制家具、工程家具等系列产品，产品畅销全国，并远销欧美、东南亚多个国家和地区。
            <br />公司投巨资兴建的全友家具国际工业港，由
            <span class="look-all">查看全部</span>
          </div>
        </div>
        <div class="job-sec prop-item">
          <h3>竞争力分析</h3>
          <div>
            <div class="title">综合竞争力评估</div>
            <div class="prop-container">
              <p class="text-position">你在？位置</p>
              <span class="level-1"></span>
              <span class="level-2">
                <em>一般</em>
              </span>
              <span class="level-3">
                <em>良好</em>
              </span>
              <span class="level-4">
                <em>优秀</em>
              </span>
              <span class="level-5">
                <em>极好</em>
              </span>
            </div>
            <div class="prop-detail">
              <div class="pull-left">个人综合排名：在 人中排名第</div>
              <div class="pull-rught">查看完整个人竞争力</div>
            </div>
          </div>
        </div>
        <div class="job-sec">
          <h3>工商信息</h3>
          <div class="name">北京字节跳动网络技术有限公司</div>
          <div class="level-list">
            <p>
              <span>法人代表：</span>
              <b>张一鸣</b>
              <span>注册资金：</span>
              <b>30000万美元</b>
              <span>成立时间：</span>
              <b>2012-07-25</b>
            </p>
            <p>
              <span>企业类型：</span>
              <b>有限责任公司（台港澳法人独资）</b>
              <span>经营状态：</span>
              <b>开业</b>
              <span>查看全部</span>
            </p>
          </div>
        </div>
        <div class="job-sec">
          <h3>工作地址</h3>
        </div>
      </div>
      <div class="job-sider">
        <div class="sider-company">
          <p class="title">公司基本信息</p>
          <div class="company-info">
            <span></span>
            今日头条
          </div>
          <p>D轮及以上</p>
          <p>10000人以上</p>
          <p>移动互联网</p>
          <p>https://www.bytedance.com</p>
          <p class="gray">更新于：2020-06-28</p>
        </div>
        <div class="promotion-job">
          <div class="similarityjob">
            <h3>相似职位</h3>
            <span>更多相似职位 ></span>
          </div>
          
        </div>
      </div>
    </div>

    <footer-detail></footer-detail>
  </div>
</template>

<script>
import NavBar from "components/content/navbar/NavBar";
import FooterDetail from "components/content/footer/Footer";
export default {
  name: "DetailHotPostList",
  data() {
    return {
      hotPostId: null,
    };
  },
  created() {
    //1.保存传入的id
    this.hotPostId = this.$route.params.id;
    // console.log(this.hotPostId);
  },
  components: {
    NavBar,
    FooterDetail,
  },
};
</script>

<style scoped>
/* 主结构 */
.DetailHotPostList {
  background: #fff;
  font-size: 14px;
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
/* 工作导航 */
.job-banner {
  height: auto;
  padding: 24px 0;
  background: #444c60 url(~assets/img/detail-bg.jpg) center center no-repeat;
  color: #fff;
}
.job-status {
  color: rgba(255, 255, 255, 0.7);
  line-height: 20px;
}
.job-primary {
  position: relative;
}
.job-banner .name {
  padding: 12px 0 8px;
  color: #fff;
}
.name h1 {
  vertical-align: middle;
  font-size: 32px;
  max-width: 380px;
  display: inline-block;
  font-weight: 400;
  margin: 0;
  margin-right: 20px;
  line-height: 35px;
}
.job-banner .salary {
  display: inline-block;
  vertical-align: middle;
  color: #fa6a43;
  height: 42px;
  font-size: 30px;
  line-height: 42px;
  font-weight: 600;
}
.job-banner .info-primary p {
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 10px;
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
.job-tags {
  padding-top: 8px;
  height: 27px;
  display: inline-block;
}
.job-tags span {
  display: inline-block;
  font-size: 12px;
  padding: 0 15px;
  margin-right: 10px;
  margin-bottom: 10px;
  border: 1px solid #5ed5c8;
  color: #5ed5c8;
  height: 23px;
  line-height: 23px;
  border-radius: 13px;
  margin-top: 0;
  vertical-align: top;
}
.job-op {
  width: 298px;
  position: absolute;
  right: 0;
  top: 50%;
  bottom: 0;
  margin-top: -47px;
}
.btn-container {
  border: 1px #5dd5c8 solid;
  font-size: 16px;
  color: #fff;
  letter-spacing: 1px;
  background: #5dd5c8;
  text-align: center;
  cursor: pointer;
  height: 45px;
  line-height: 45px;
}
.op-container {
  overflow: hidden;
  position: absolute;
  bottom: 5px;
  width: 100%;
  justify-content: space-between;
}
.op-container span {
  height: 22px;
  line-height: 22px;
  font-size: 16px;
  color: #fa6a43;
  cursor: pointer;
}
.job-box {
  margin-top: 30px;
  display: flex;
}
.jobdispaly {
  display: flex;
  align-items: center;
}
/* 职位详细 */
.job-detail {
  padding-right: 25px;
  border-right: 1px #f5f7f9 solid;
  padding-bottom: 45px;
  min-height: 813px;
}
/* 公司基本信息 */
.job-sider {
  width: 284px;
  margin-left: 40px;
}
.sider-company p {
  line-height: 20px;
  margin-bottom: 26px;
}
.sider-company .title {
  line-height: 25px;
  margin-bottom: 25px;
  font-size: 15px;
  font-weight: 500;
  color: #414a60;
}
.sider-company .company-info {
  overflow: hidden;
  line-height: 60px;
  margin-bottom: 27px;
}
.company-info span {
  display: inline-block;
  vertical-align: bottom;
  width: 60px;
  height: 60px;
  background: olivedrab;
}
.sider-company p.gray {
  color: #d0d4da;
}
.similarityjob{
  display: flex;
  justify-content: space-between;
}
/* 标题 */
.job-detail-title {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
}
.op-link {
  padding-top: 20px;
  color: #9fa3b0;
}
.op-link span {
  display: inline-block;
  margin-left: 20px;
}
.detail-op .name {
  font-size: 20px;
  color: #424a5e;
  font-weight: 400;
}
.detail-op p {
  color: #9fa3af;
}
.detail-figure {
  width: 60px;
  height: 60px;
  border-radius: 100%;
  background: #5dd5c8;
  margin-right: 20px;
}
.vdot {
  display: inline-block;
  padding: 0 10px 0 7px;
}
/* 职位描述 */
.job-sec h3 {
  font-weight: 700;
  font-size: 15px;
  color: #424a5e;
}
.chat-sider h3,
.job-sec h3,
.secretary-sec h3 {
  font-weight: 400;
  color: #424a5e;
  line-height: 50px;
  padding: 0 0 10px 0;
  margin-bottom: 0;
  position: relative;
}
.chat-sider h3::after,
.job-sec h3::after,
.secretary-sec h3::after {
  position: absolute;
  content: "";
  display: block;
  width: 19px;
  height: 2px;
  background: #72e7c6;
  bottom: 12px;
}
.job-detail .text {
  word-break: break-all;
}
.job-sec .text,
.secretary-sec .text {
  color: #61687c;
  line-height: 36px;
}
.company-info {
  position: relative;
}
.look-all {
  color: #5dd5c8;
  position: absolute;
  right: 0;
  bottom: 0;
  cursor: pointer;
}
/* 竞争力分析 */
.prop-item .title {
  font-size: 14px;
  color: #51586d;
  line-height: 20px;
}
.prop-item .prop-container {
  position: relative;
  margin-top: 20px;
  height: 8px;
  font-size: 0;
  white-space: nowrap;
}
.prop-item .prop-container .text-position {
  position: absolute;
  top: -28px;
  left: 50%;
  margin-left: -35px;
  font-size: 14px;
  color: #51586d;
}
.prop-item .prop-container span {
  position: relative;
  display: inline-block;
  vertical-align: top;
  height: 100%;
}
.level-1 {
  width: 13%;
  background: #5dd5c8;
  border-radius: 4px;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}
.level-2 {
  width: 24%;
  background: #62e1d3;
}
.level-3 {
  width: 24%;
  background: #72e7c6;
}
.level-4 {
  width: 24%;
  background: #85e3f4;
}
.level-5 {
  width: 13%;
  background: #3dccfc;
  border-radius: 4px;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}
.prop-item .prop-container span + span {
  margin-left: 1px;
}
.prop-item .prop-container em {
  position: relative;
  top: 12px;
  left: -14px;
  font-size: 14px;
  color: #8e93a2;
  line-height: 20px;
  font-style: normal;
}
.prop-detail {
  margin-top: 52px;
  margin-bottom: 15px;
  color: #8e93a2;
  display: flex;
  justify-content: space-between;
}
.pull-rught {
  cursor: pointer;
  color: #5dd5c8;
}
.level-list {
  margin-top: 5px;
  height: 66px;
}
.level-list p {
  margin-top: 10px;
}
.level-list p b {
  margin-right: 200px;
}
.level-list p b:last-child {
  margin-right: 0;
}
</style>
