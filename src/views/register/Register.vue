<template>
  <div>
    <register-job
      v-if="this.$store.state.isPwdorMessage"
      @getCode="getCode"
      @getRegisterPhone="getRegisterPhone"
    ></register-job>
    <register-join v-else @getCode="getCode" @getRegisterPhone="getRegisterPhone"></register-join>
  </div>
</template>
<script>
import RegisterJob from "./childChomps/RegisterJob";
import RegisterJoin from "./childChomps/RegisterJoin";

import { getRegisterPhone, getCode } from "network/register";
export default {
  data() {
    return {};
  },
  mounted() {
    window.addEventListener("unload", this.saveState);
  },
  methods: {
    //用户名密码注册
    // getLoginPwd(val) {
    // getLoginPwd().then((result) => {
    //   let code = null;
    //   if (code === 200) {
    //     this.phone=val.telNumber
    //   }
    // });
    // },
    //获取验证码
    getCode(val) {
      getCode(val).then((result) => {
        console.log(result);
        if (result.data.message === false) {
          this.$message({
            message: "用户已存在",
            type: "false",
            duration: 1500,
          });
          setTimeout(() => {
            this.$router.push("/login");
          }, 1500);
        }
      });
    },
    //手机号验证码注册
    getRegisterPhone(val) {
      getRegisterPhone(val.telNumber, val.message).then((result) => {
        if (result.data.code === 200) {
          this.$store.state.user.userId = result.data.data;
          this.$router.push("/RegisterIndiv");
        }
      });
    },
    saveState() {
      sessionStorage.setItem("state", JSON.stringify(this.$store.state));
    },
  },
  components: {
    RegisterJob,
    RegisterJoin,
  },
};
</script>
<style scoped>
</style>