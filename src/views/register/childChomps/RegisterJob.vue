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
      <span class="cursorpointer" @click="pwdClick" :class="pwdClassClick">我要找工作</span>
      <span class="cursorpointer" @click="messageClick" :class="messageClassClick">我要招聘</span>
    </div>
    <div slot="login-code" class="login-code displayflex">
      <div class="login-tab-switch cursorpointer"></div>
      <div class="login-code-text">微信极速注册</div>
    </div>
    <el-form :model="formData" :rules="rules" ref="formData" slot="middle">
      <el-form-item prop="telNumber" class="telNumber">
        <p class="icon-sign-phone"></p>
        <el-input v-model="formData.telNumber" :disabled="false" placeholder="手机号"></el-input>
      </el-form-item>
      <el-form-item>
        <!-- <div class="square">
          <span>请按住滑块，拖动到最右边</span>
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
      <el-form-item prop="message" class="message">
        <p class="icon-sign-phone icon-sign-message"></p>
        <el-input v-model="formData.message" :disabled="false" placeholder="短信验证码"></el-input>
        <span class="i-border"></span>
        <el-button class="entermessage" @click="getCode">发送验证码</el-button>
      </el-form-item>
      <el-form-item>
        <el-button class="btnlogin" type="primary" @click="submitForm('formData')">注册</el-button>
      </el-form-item>
      <el-form-item class="login-fast" prop="type">
        <el-checkbox-group v-model="formData.type">
          <el-checkbox label="我已同意用户协议及隐私政策" name="resource"></el-checkbox>
        </el-checkbox-group>
        <span class="greencolor cursorpointer login-fast-one" @click="loginClick">直接登录</span>
      </el-form-item>
    </el-form>
  </login-and-register>
</template>

<script>
import LoginAndRegister from "components/content/LoginAndRegister";
// 基本滑块验证组件
import dragVerify from "@/components/common/dragVerify";
export default {
  name: "LoginMessage",
  data() {
    return {
      classMessageAndPwd: "",
      isPassing: false,
      formData: {
        telNumber: null,
        message: null,
        type: [],
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
        message: [
          { required: true, message: "请输入验证码", trigger: "change" },
          {
            pattern: /^\d{6}$/,
            message: "6位数字",
            trigger: "blur",
          },
        ],
        type: [
          {
            type: "array",
            required: true,
            message: "请阅读用户协议及隐私政策",
            trigger: "change",
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
    //获取验证码
    getCode() {
      if (this.formData.telNumber == null) return false;
      this.$emit("getCode", this.formData.telNumber);
    },
    //登录跳转
    loginClick() {
      this.$router.push("/login");
    },
    //本页面找工作和招聘跳转
    pwdClick() {
      this.$store.state.isPwdorMessage = true;
    },
    //本页面找工作和招聘跳转
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
        if (valid) {
          if (this.isPassing) {
            this.$emit("getRegisterPhone", this.formData);
          } else {
            this.$message({
              message: "请验证滑块解锁",
              type: "false",
              duration: 1500,
            });
          }
        } else {
          return false;
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
.message {
  position: relative;
}
.entermessage {
  position: absolute;
  border: none;
  color: #5dd5c8;
  right: 0;
  background: none;
  padding-top: 14px;
}
.i-border {
  position: absolute;
  width: 1px;
  height: 16px;
  background: #dcdfe6;
  right: 100px;
  top: 13px;
}
.el-form-item {
  margin-bottom: 30px;
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
/* 短信图标 */
.message {
  position: relative;
}
.icon-sign-message {
  background-position: 2px -141px;
}
.login-fast {
  position: relative;
}
.login-fast-one {
  position: absolute;
  right: 0;
  top: 0;
}
/* 注册页面 极速注册 */
.login-tab-switch {
  width: 42px;
  height: 42px;
  background-image: url(~assets/img/Login/btn-ewm.png);
  background-size: 42px 84px;
  background-position: 0 0;
}
.login-tab-switch:hover {
  background-position: 0 -42px;
}
.login-code {
  left: -80px;
  top: 10px;
}
.login-code-text {
  background: #fff;
  color: #9fa3af;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.2);
}
.login-code-text::after {
  top: 8px;
  left: -18px;
  border-right: 10px solid #f0f0f9;
  border-top: 7px solid transparent;
  border-bottom: 7px solid transparent;
  border-left: 7px solid transparent;
}
</style>
