<template>
  <!-- 修改头部的东西直接在这里修改 -->
  <!-- 头部logo -->
  <div class="header">
    <div class="logo-box">
      <!-- logo图片 -->
      <div class="logo"></div>
      <!-- 文字介绍 -->
      <p class="logo-text">找工作要跟万息谈</p>
    </div>

    <!-- 上传简历类型的按钮 -->
    <div>
      <el-button type="primary">上传简历</el-button>
      <!-- 切换成招聘者按钮   可以不要所以做成插槽 -->
      <slot name="change">
        <div class="recruit" @click="recruiter">切换为招聘者 ></div>
      </slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {};
  },
  methods: {
    // 切换为招聘者
    recruiter() {
      this.$notify({
        title: "成功",
        message: "您已经跳转到应聘者信息注册页面",
        type: "success",
        duration: 1000,
      });
      this.$router.push("/registerHr");
    },
  },
};
</script>
<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  height: 100px;
}
/* logo */
.logo-box {
  cursor: pointer;
}
.logo {
  width: 60px;
  height: 60px;
  background-color: #fff;
  border-radius: 10px;
}
.logo-text {
  margin-left: 10px;
  font-size: 16px;
  width: 110px;
  letter-spacing: 5px;
}

.header > div {
  display: flex;
  align-items: center;
  color: #fff;
  font-family: "微软雅黑";
}
.el-button--primary {
  border-color: white;
}
/* 提交按钮 */
.submit {
  border: 1px solid #fff;
  margin-right: 30px;
}
/* 重置按钮 */
.recruit {
  margin-left: 30px;
  cursor: pointer;
}
</style>
