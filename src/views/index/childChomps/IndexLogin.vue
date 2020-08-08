<template>
  <div class="indexlogin">
    <div class="displayflex inner indexlogin-inner">
      <div class="indexlogin-left"></div>
      <el-form :model="formData" :rules="rules" ref="formData" class="indexlogin-form displayflex">
        <el-form-item prop="telNumber" class="telNumber">
          <el-input
            v-model="formData.telNumber"
            auto-complete="off"
            :disabled="false"
            placeholder="手机号"
          ></el-input>
        </el-form-item>
        <el-form-item prop="message" class="message">
          <el-input v-model="formData.message" :disabled="false" placeholder="验证码"></el-input>
          <el-button class="entermessage" @click="getCode">获取</el-button>
        </el-form-item>
        <el-form-item>
          <el-button class="btnlogin" type="primary" @click="submitForm('formData')">登录/注册</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  name: "IndexLogin",
  data() {
    return {
      formData: {
        telNumber: null,
        message: null,
      }, //elementUi的规则
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
      },
    };
  },
  methods: {
    //通过手机号获取验证码
    getCode(){
      this.$emit("getCode", this.formData.telNumber);
    },
    //提交按钮
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          //提交手机号和验证码
          this.$emit("getLoginPhone", this.formData);
        } else {
          return false;
        }
      });
    },
  },
  components: {},
};
</script>

<style scoped>
/* 导航下的登录注册 */
.indexlogin {
  height: 120px;
  background: #5dd5c8;
  position: relative;
  z-index: 1004;
  padding-top: 0;
}
.indexlogin-inner {
  height: 100%;
}
.indexlogin-left {
  width: 61%;
}
.indexlogin-form {
  width: 39%;
  justify-content: space-between;
  font-size: 13px;
  margin-top: 60px;
}
.entermessage {
  position: absolute;
  border: none;
  color: #5dd5c8;
  right: 0;
  background: none;
  padding-top: 14px;
  font-size: 12px;
}
.btnlogin {
  font-size: 12px;
  border: 1px solid #fff;
  background: #5dd5c8;
}
</style>
