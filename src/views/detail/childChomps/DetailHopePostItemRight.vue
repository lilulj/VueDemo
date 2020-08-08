<template>
  <div>
    <div class="box">
      <!-- 小登录 -->
      <div class="login_box">
        <h2>各大行业职位任你选择</h2>
        <!-- 表单 -->
        <el-form :model="loginForm" :rules="rules" ref="loginForm">
          <el-form-item label prop="phoneNum">
            <el-input
              prefix-icon="el-icon-mobile-phone"
              placeholder="手机号"
              v-model="loginForm.phoneNum"
              @focus="phoneFocus"
              @blur="phoneBlur"
              ref="refinput"
            ></el-input>
          </el-form-item>
          <!-- 验证 -->
          <drag-verify
            ref="dragVerify"
            :width="220"
            radius="0"
            :isPassing.sync="isPassing2"
            text="请按住滑块拖动"
            successText="验证通过"
            handlerIcon="el-icon-d-arrow-right"
            successIcon="el-icon-circle-check"
            @passcallback="passcallback2"
            class="drag"
          ></drag-verify>
          <!-- 短信验证码 -->
          <div class="messageBox">
            <el-form-item label prop="emailNum">
              <el-input
                prefix-icon="el-icon-message"
                placeholder="短信验证码"
                v-model="loginForm.emailNum"
                @focus="emailFocus"
                @blur="emailBlur"
                ref="refinput2"
              ></el-input>
              <div class="send" @click="sendCode">发送验证码</div>
            </el-form-item>
          </div>

          <!-- 登录注册按钮 -->
          <el-button @click="submitForm('loginForm')">登录/注册</el-button>
          <!-- 协议 -->

          <el-checkbox v-model="checked">我已同意用户协议及隐私政策</el-checkbox>
        </el-form>
      </div>
    </div>
    <!-- 上传简历按钮 -->
    <div class="onResume">
      <el-button type="primary" @click="$router.push('/uploadResum')">上传简历一键注册</el-button>
    </div>
    <!-- 看过的职位 -->
    <div class="agoPostBox">
      <div class="ago_Post_title">看过的职位</div>
      <ul>
        <li>
          <div class="leftBox">
            <p class="postName">高级场景原画设计师</p>
            <p class="comName">祖龙娱乐</p>
          </div>
          <div class="rightBox">
            <p class="salary">15-25K</p>
          </div>
        </li>
        <li>
          <div class="leftBox">
            <p class="postName">高级场景原画设计师</p>
            <p class="comName">祖龙娱乐</p>
          </div>
          <div class="rightBox">
            <p class="salary">15-25K</p>
          </div>
        </li>
        <li>
          <div class="leftBox">
            <p class="postName">高级场景原画设计师</p>
            <p class="comName">祖龙娱乐</p>
          </div>
          <div class="rightBox">
            <p class="salary">15-25K</p>
          </div>
        </li>
        <li>
          <div class="leftBox">
            <p class="postName">高级场景原画设计师</p>
            <p class="comName">祖龙娱乐</p>
          </div>
          <div class="rightBox">
            <p class="salary">15-25K</p>
          </div>
        </li>
        <li>
          <div class="leftBox">
            <p class="postName">高级场景原画设计师</p>
            <p class="comName">祖龙娱乐</p>
          </div>
          <div class="rightBox">
            <p class="salary">15-25K</p>
          </div>
        </li>
      </ul>
    </div>
    <!-- 广告 -->
    <div class="adBox">
      <img src alt />
      <img src alt />
    </div>
  </div>
</template>

<script>
import dragVerify from "@/components/common/dragVerify";
export default {
  name: "",
  data() {
    return {
      // 小登陆表单
      loginForm: {
        phoneNum: "", //电话
        emailNum: "", //验证码
      },
      // 规则
      rules: {
        phoneNum: [
          { required: true, message: "请输入手机号", trigger: "change" },
          {
            pattern: /^1[3456789]\d{9}$/,
            message: "手机格式不正确",
            trigger: "blur",
          },
        ],
        emailNum: [
          { required: true, message: "请输入短信验证码", trigger: "change" },
        ],
      },
      // 滑块验证是否通过
      isPassing2: null,
      // 阅读条例
      checked: false,
    };
  },
  components: {
    dragVerify,
  },
  methods: {
    // 滑块验证
    passcallback2() {
      this.$message({
        message: "验证通过",
        type: "success",
        duration: 1500,
      });
    },
    // 聚焦
    phoneFocus() {
      this.$refs.refinput.$refs.input.nextSibling.children[0].style.color =
        "rgb(83, 202, 195)";
    },
    // 脱焦
    phoneBlur() {
      this.$refs.refinput.$refs.input.nextSibling.children[0].style.color =
        "#C0C4CC";
    },
    // 聚焦
    emailFocus() {
      this.$refs.refinput2.$refs.input.nextSibling.children[0].style.color =
        "rgb(83, 202, 195)";
    },
    // 脱焦
    emailBlur() {
      this.$refs.refinput2.$refs.input.nextSibling.children[0].style.color =
        "#C0C4CC";
    },
    // 提交登录表单
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          if (this.isPassing2 != true) {
            this.$notify({
              message: "请滑动滑块验证",
              type: "warning",
              duration: 1500,
            });
          } else {
            if (this.checked != true) {
              this.$notify({
                message: "请勾选用户协议",
                type: "warning",
                duration: 1500,
              });
            } else {
              // 异步请求
            }
          }
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    //发送验证码
    sendCode() {
      if (this.loginForm.phoneNum) {
        // 异步
      } else {
        this.$notify({
          message: "请先输入电话号码",
          type: "warning",
          duration: 1500,
        });
      }
    },
  },
};
</script>
<style scoped>
.box {
  width: 100%;
  background-color: rgb(83, 202, 195);
}
.login_box {
  width: 220px;
  margin: 0 auto;
  text-align: center;
}
.drag {
  margin: 0 auto 30px;
}
.messageBox {
  position: relative;
}
.send {
  position: absolute;
  top: 0px;
  right: 10px;
  letter-spacing: 2px;
  font-size: 14px;
  color: rgb(83, 202, 195);
  cursor: pointer;
  padding-left: 10px;
  border-left: 1px solid #c0c4cc;
}
h2 {
  font-weight: normal;
  color: #fff;
  font-size: 18px;
  padding: 20px 0 24px;
}
::v-deep .el-input__inner {
  border-radius: 0;
  padding-left: 35px;
}
.messageBox ::v-deep .el-input__inner {
  padding-right: 100px;
}
.el-input {
  margin-bottom: 30px;
}
.el-button {
  width: 100%;
  border-radius: 0;
}
::v-deep .el-checkbox__input.is-checked + .el-checkbox__label {
  color: #606266;
}
.el-checkbox {
  margin-top: 10px;
  margin-bottom: 20px;
}
.onResume {
  margin-top: 20px;
  box-sizing: border-box;
  padding: 20px 30px;
  background-color: #fff;
}
.agoPostBox {
  margin-top: 10px;
}
.ago_Post_title {
  background-color: #fff;
  color: rgb(83, 202, 195);
  line-height: 45px;
  padding-left: 30px;
  margin-bottom: 5px;
}
.agoPostBox > ul {
  padding: 0 30px;
  background-color: #fff;
}
.agoPostBox > ul > li {
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  padding: 10px 0;
  cursor: pointer;
}
.agoPostBox > ul > li:not(:last-child) {
  border-bottom: solid 1px #eef0f5;
}
.agoPostBox > ul > li:hover .postName {
  color: rgb(83, 202, 195);
}
.leftBox {
  width: 150px;
}
.leftBox > p {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 14px;
}
.comName {
  color: #8d92a1;
}
.salary {
  font-size: 14px;
  color: #fc6c38;
}
.adBox > img {
  display: inline-block;
  width: 100%;
  height: 160px;
  background-color: #f00;
}
::v-deep .el-form-item__error {
  top: -20px;
}
::v-deep .el-form-item {
  margin-bottom: 0;
}
</style>
