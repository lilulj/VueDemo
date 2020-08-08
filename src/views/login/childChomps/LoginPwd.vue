<template>
  <login-and-register>
    <div slot="login-item-left">
      <div class="login-left-top displayflex">
        <p>领航</p>
        <div class="cursorpointer">
          <p class="login-fontSize">找工作</p>
          <p class="login-fontSize">我要跟老板谈谈</p>
        </div>
      </div>
      <div class="login-left-middle displayflex">
        <p class="icon"></p>
        <div>
          <h3>沟通</h3>
          <p class="login-fontSize-one">在线职位及时沟通</p>
        </div>
      </div>
      <div class="login-left-middle displayflex">
        <p class="icon icon-two"></p>
        <div>
          <h3>任性选</h3>
          <p class="login-fontSize-one">各大行业职位任你选</p>
        </div>
      </div>
    </div>
    <div slot="login-right-top" class="login-right-top">
      <span class="cursorpointer" @click="pwdClick" :class="pwdClassClick">密码登录</span>
      <span class="cursorpointer" @click="messageClick" :class="messageClassClick">短信登录</span>
    </div>
    <div slot="item-classity" class="item-classity">
      <el-link
        target="_blank"
        :underline="false"
        v-if="isShowLoginOrCompany"
        @click="isShowLoginOrCompany=false"
      >用户登录</el-link>
      <el-link target="_blank" :underline="false" v-else @click="isShowLoginOrCompany=true">企业登录</el-link>
    </div>
    <div slot="login-code" class="login-code displayflex">
      <div class="login-code-text">扫码登录在这里</div>
      <div class="login-tab-switch cursorpointer"></div>
    </div>
    <el-form :model="formData" :rules="rules" ref="formData" slot="middle">
      <el-form-item prop="telNumber" class="telNumber">
        <p class="icon-sign-phone"></p>
        <el-input
          v-model="formData.telNumber"
          auto-complete="off"
          :disabled="false"
          placeholder="手机号"
        ></el-input>
      </el-form-item>
      <el-form-item prop="password" class="password">
        <p class="icon-sign-phone icon-sign-pwd"></p>
        <el-input v-model="formData.password" :disabled="false" show-password placeholder="密码"></el-input>
      </el-form-item>
      <el-form-item>
        <!-- <div class="square">
          <span ref="squaretext">请按住滑块，拖动到最右边</span>
        </div>-->
        <drag-verify
          :width="325"
          handlerBg="#00d7c6"
          completedBg="#00d7c6"
          progressBarBg="#00d7c6"
          ref="dragVerify"
          :isPassing.sync="isPassing"
          text="请按住滑块拖动"
          successText="验证通过"
          handlerIcon="el-icon-d-arrow-right"
          successIcon="el-icon-circle-check"
          @passcallback="passcallback"
        ></drag-verify>
      </el-form-item>
      <el-form-item>
        <el-button class="btnlogin" type="primary" @click="submitForm('formData')">登录</el-button>
      </el-form-item>
    </el-form>
    <div class="login-right-bottom displayflex" slot="login-right-bottom">
      <span class="cursorpointer displayflex">
        <div class="login-link-wechat"></div>
        <div class="weixin-text">微信登录</div>
      </span>
      <span class="greencolor cursorpointer">扫码登录</span>
      <span class="greencolor cursorpointer" @click="registerClick">免费注册</span>
    </div>
  </login-and-register>
</template>

<script>
import LoginAndRegister from "components/content/LoginAndRegister";
// 基本滑块验证组件
import dragVerify from "@/components/common/dragVerify";
export default {
  name: "LoginPwd",
  data() {
    return {
      classMessageAndPwd: "",
      isShowLoginOrCompany: true,
      isPassing: null,
      formData: {
        telNumber: null,
        password: null,
      },
      //elementUi的规则
      rules: {
        telNumber: [
          { required: true, message: "请输入手机号", trigger: "change" },
          {
            pattern: /^1[34578]\d{9}$/,
            message: "目前只支持中国大陆的手机号码",
            trigger: "blur",
          },
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "change" },
          {
            pattern: /^.*(?=.{8,})(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*?._+-~`()=]).*$/,
            message: "至少8位且包含大小写，数字，特殊字符",
            trigger: "blur",
          },
        ],
      },
    };
  },
  computed: {
    pwdClassClick() {
      return this.$store.state.isPwdorMessage
        ? (this.classMessageAndPwd = "spanactive")
        : (this.classMessageAndPwd = "");
    },
    messageClassClick() {
      return this.$store.state.isPwdorMessage
        ? (this.classMessageAndPwd = "")
        : (this.classMessageAndPwd = "spanactive");
    },
  },
  methods: {
    //注册跳转
    registerClick() {
      this.$router.push("/register");
    },
    //本页面密码和短信登录跳转
    pwdClick() {
      this.$store.state.isPwdorMessage = true;
    },
    //本页面密码和短信登录跳转
    messageClick() {
      this.$store.state.isPwdorMessage = false;
    },
    passcallback() {
      this.$message({
        message: "验证通过",
        type: "success",
        duration: 1500,
      });
    },
    //提交按钮
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (this.isPassing) {
          // 用户登录名，密码登录
          this.$emit("getLoginPwd", this.formData, this.isShowLoginOrCompany);
        } else {
          this.$message({
            message: "请验证滑块解锁",
            type: "false",
            duration: 1500,
          });
        }
      });
    },
  },
  components: {
    LoginAndRegister,
    dragVerify,
  },
};
</script>

<style scoped>
.btnlogin {
  width: 100%;
  font-size: 16px;
  cursor: pointer;
  background: #5dd5c8;
  color: #fff;
  letter-spacing: 1px;
}
.square {
  height: 40px;
  background-color: #e8e8e8;
  text-align: center;
  font-size: 12px;
}
.el-form-item {
  margin-bottom: 30px;
}
.item-classity {
  position: absolute;
  left: -60px;
  top: 15px;
  font-size: 16px;
}
/* 手机图标 */
.telNumber {
  position: relative;
}
.icon-sign-phone {
  width: 20px;
  height: 20px;
  position: absolute;
  background: url(~assets/img/Login/icons-sign.png) no-repeat;
  background-position: 2px 1px;
  left: 9px;
  top: 11px;
  z-index: 9;
}
.el-input >>> .el-input__inner {
  padding-left: 40px;
}
/* 密码图标 */
.password {
  position: relative;
}
.icon-sign-pwd {
  position: absolute;
  background-position: 2px -91px;
}
</style>
