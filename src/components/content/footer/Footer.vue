<template>
  <div class="footer">
    <div class="footer-top displayflex inner">
      <div>
        <h4>企业服务</h4>
        <div>
          <p class="spanhover">职位搜索</p>
          <p class="spanhover">新闻资讯</p>
          <p class="spanhover">BOSS直聘APP</p>
        </div>
      </div>
      <div>
        <h4>使用与帮助</h4>
        <div>
          <p class="spanhover">用户协议与隐私政策</p>
          <p class="spanhover">防骗指南</p>
          <p class="spanhover">职位发布规则</p>
          <p class="spanhover">使用帮助</p>
        </div>
      </div>
      <div>
        <h4>联系BOSS直聘</h4>
        <div>
          <p>北京华品博睿网络技术有限公司</p>
          <p>公司地址 北京市朝阳区太阳宫中路8号冠捷大厦302</p>
          <p>联系电话 010-84150623</p>
          <p>违法和不良信息举报邮箱jubao@kanzhun.com</p>
        </div>
      </div>
      <div class="footer-top-right">
        <h2>领航</h2>
        <p>企业服务热线和举报投诉 400 065 5799</p>
        <p>工作日 8:00 - 22:00</p>
        <p>休息日 9:30 - 18:30</p>
        <p class="footer-icon">
          <span class="icon-weibo icon-common cursorpointer"></span>
          <span class="icon-weixin icon-common cursorpointer"></span>
          <span class="icon-app icon-common cursorpointer"></span>
        </p>
      </div>
    </div>
    <div class="copyright inner">
      <p>
        <span>Copyright © 2020 领航</span>
        <span>京ICP备14013441号-5</span>
        <span>京ICP证150923号</span>
        <span>京网文[2020]0399-066 号</span>
        <span class="spanactive spanhover">电子营业执照</span>
        <span class="spanactive spanhover">京公网安备11010502032801</span>
        <br />
        <span class="spanactive spanhover">首都网警</span>
        <span class="spanactive spanhover">人力资源服务许可证</span>
        <span class="spanactive spanhover">网上有害信息举报专区</span>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {};
  },
  components: {},
};
</script>

<style scoped>
.footer {
  background: #fff;
  padding: 20px 0 10px;
  color: #8d92a1;
  border-top: solid 1px #f6f6f8;
}
.footer-top{
  position: relative;
}
.footer-top > div {
  width: 192px;
}
.footer-top h4 {
  height: 30px;
  line-height: 30px;
  font-size: 14px;
  margin-bottom: 10px;
  color: #414a60;
  font-weight: normal;
}
.footer-top p {
  font-size: 12px;
  color: #8d92a1;
  height: 24px;
  line-height: 24px;
  white-space: nowrap;
}
.copyright {
  color: #eeeff3;
  font-size: 12px;
  margin-top: 20px;
  /* max-width: 900px; */
}
.copyright span {
  color: #8d92a1;
  display: inline-block;
  margin-right: 15px;
}
.copyright .spanactive {
  color: #414a60;
}
.spanhover:hover {
  color: #00d7c6;
  cursor: pointer;
}
.footer-top .footer-top-right{
  position: absolute;
  text-align: right;
  right: 0;
  width: 232px;
}
.footer-top-right h2{
  margin: 6px 0 7px 0;
}
.footer-top-right p{
  font-size: 13px;
  width: 232px;
}
.footer-icon{
  margin-top: 20px;
}
.icon-app,
.icon-weixin,
.icon-weibo {
  width: 42px;
  height: 42px;
  line-height: 42px;
  border: 1px #eaebee solid;
  border-radius: 100%;
  margin-left: 23px;
  vertical-align: top;
}
.icon-weibo {
  background-position: 10px -190px;
}
.icon-weixin {
  background-position: 10px -254px;
 
}
.icon-app {
  background-position: 6px -313px;
}
</style>
