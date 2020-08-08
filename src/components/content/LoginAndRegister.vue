<template>
  <div class="login">
    <div class="login-item">
      <div class="login-item-left">
        <slot name="login-item-left"></slot>
      </div>
      <slot name="right">
        <div class="login-item-right">
          <slot name="login-code"></slot>
          <slot name="login-right-top"></slot>
          <slot name="item-classity"></slot>
          <slot name="middle"></slot>
          <slot name="login-right-bottom"></slot>
        </div>
      </slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "LoginAndRegister",
  data() {
    return {};
  },
  methods: {},
  components: {},
};
</script>

<style scoped>
.login {
  width: 100%;
  height: 100vh;
  min-height: 863px;
  background: #5dd5c8 url(~assets/img/Login/newbg.png) center bottom no-repeat
    no-repeat;

  display: flex;
  justify-content: center;
  align-items: center;
}
.login-item {
  width: 740px;
  height: 514px;
  background: #fff;
  border-radius: 10px;

  display: flex;
}
/* 左边 */
.login-item-left {
  width: 240px;
  height: 100%;
  color: #8d92a1;
  background-color: #f8fcff;
  border-radius: 10px 0 0 10px;

  box-sizing: border-box;
  padding: 88px 0 0 40px;
}
/* 左上 */
.login-left-top > p {
  margin-right: 22px;
  color: #00c2b3;
}
/* 左边图标 */
.icon {
  width: 25px;
  height: 42px;
  background: url(~assets/img/Login/sign-slide.png) no-repeat;
  background-size: 100% auto;
  background-position: 0 10px;
}
.icon-two {
  background-position: 0 -45px;
}
.icon-three {
  background-position: 0 -99px;
}
/* 左中 */
.login-left-middle {
  margin-top: 50px;
  align-items: center;
}
.login-left-middle > p {
  margin-right: 30px;
}
.login-left-middle h3 {
  font-size: 16px;
}
.login-fontSize {
  font-size: 14px;
  color: #00c2b3;
}
.login-fontSize-one {
  font-size: 13px;
  color: #b0b4c1;
}
/* 右边 */
.login-item-right {
  width: 324px;
  position: relative;
  margin: 0 auto;
  padding-top: 68px;
}
/* 右 二维码 */
.login-code {
  position: absolute;
  width: 150px;
  right: -70px;
  top: 15px;
  font-size: 13px;
  justify-content: space-between;
  align-items: center;
}
.login-code-text {
  position: relative;
  width: 117px;
  height: 30px;
  line-height: 30px;
  text-align: center;
  background: #5dd5c8;
  color: #fff;
  box-shadow: 0 1px 7px 0 rgba(93, 213, 200, 0.2);
}
/* 三角形 */
.login-code-text::after {
  position: absolute;
  top: 8px;
  right: -9px;
  content: "";
  width: 0;
  height: 0;
  border-left: 10px solid #5dd5c8;
  border-top: 7px solid transparent;
  border-bottom: 7px solid transparent;
}
.login-tab-switch {
  width: 20px;
  height: 20px;
  background-image: url(~assets/img/Login/icons.png);
  background-position: 0 -608px;
}
.login-tab-switch:hover {
  background-position: 0 -651px;
}
/* 微信图标 */
.login-link-wechat {
  width: 30px;
  height: 20px;
  background: url(~assets/img/Login/weixin.png) no-repeat 0 -38px/20px auto;
  /* background-position: 0 0; */
  color: #9fa3b0;
}
.weixin-text {
  color: #9fa3b0;
}
.weixin-text:hover {
  color: #18c3b1;
}
/* 插槽login-right-top */
.login-right-top {
  display: flex;
  justify-content: space-between;
  margin-bottom: 40px;
}
.login-right-top > span {
  display: inline-block;
  width: 152px;
  height: 42px;
  line-height: 42px;
  border: 1px solid rgba(227, 231, 237, 1);
  font-size: 14px;
  text-align: center;
}
.login-right-top:hover span {
  border-color: #53cac3;
  color: #53cac3;
}
.login-right-top .spanactive {
  border-color: #53cac3;
  color: #53cac3;
}
.login-right-bottom {
  font-size: 14px;
  justify-content: space-between;
}
</style>
