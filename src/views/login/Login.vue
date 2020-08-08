<template>
  <div>
    <login-pwd v-if="this.$store.state.isPwdorMessage" @getLoginPwd="getLoginPwd(arguments)"></login-pwd>
    <login-message v-else @getCode="getCode" @getLoginPhone="getLoginPhone(arguments)"></login-message>
  </div>
</template>
<script>
import LoginPwd from "./childChomps/LoginPwd";
import LoginMessage from "./childChomps/LoginMessage";

import { getCode, getLoginPwd, getLoginPhone } from "network/login";
export default {
  data() {
    return {
      phone: null,
    };
  },
  methods: {
    //用户名密码登录
    getLoginPwd(val) {
      // getLoginPwd().then((result) => {
      //   let code = null;
      //   if (code === 200) {
      //     this.phone=val.telNumber
      //   }
      // });
      console.log(val.telNumber, val.password);
      getLoginPwd(val.telNumber, val.password).then((result) => {
        console.log(result);
      });
    },
    //获取验证码
    getCode(val) {
      getCode(val).then((result) => {
        if (result.data.message === false) {
          this.$message({
            message: "用户不存在",
            type: "false",
            duration: 1500,
          });
        }else{
          console.log(result);
        }
      });
    },
    //手机号验证码登录
    getLoginPhone(val) {
      if (val[1]) {
        getLoginPhone(val[0].telNumber, val[0].message).then((result) => {
          if (result.data.code === 200) {
            this.$store.state.user.userId = result.data.data;
            this.$router.push("/index");
          }
        });
      } else {
      }
    },
  },
  components: {
    LoginPwd,
    LoginMessage,
  },
};
</script>
<style scoped>
</style>