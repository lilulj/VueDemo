<template>
  <div class="doc">
    <!-- 头部导航 -->
    <div class="head_nav">
      <div class="wrap">
        <div class="left">
          <!-- 头部左插槽 -->
          <slot name="head_left"></slot>
        </div>
        <div class="right">
          <!-- 头部右插槽 -->
          <slot name="head_right"></slot>
        </div>
      </div>
    </div>
    <!-- 表单内容填写区 -->
    <div class="content_box">
      <div class="content_wrap">
        <div class="title_box">
          <div class="title_left">
            <h2>
              开启高效的招聘方式，你只需要
              <div class="two">2</div>步：
            </h2>
            <div class="title_left_inner">
              <div class="el-icon-s-custom"></div>
              <div @click="jobSeek" class="seeker">切换成求职者</div>
            </div>
          </div>
          <div class="title_right">
            <!-- 右边 -->
            <div class="flex">
              <div class="flex col">
                <div class="flex center">
                  <div class="first">
                    <!-- 文本插槽 -->
                    <slot name="one">1</slot>
                  </div>
                  <div class="ctrl"></div>
                </div>
                <div class="text_left">创建Boss名片</div>
              </div>
              <div class="flex col">
                <div class="flex center">
                  <div class="ctrl ctrl_sd"></div>
                  <div class="first second">2</div>
                </div>
                <div class="text_right">发布一个职位</div>
              </div>
            </div>
          </div>
        </div>
        <div class="form_box">
          <div class="form_left">
            <!-- 表单左插槽 -->
            <slot name="form_left"></slot>
          </div>
          <div class="form_right">
            <!-- 表单右插槽 -->
            <slot name="form_right"></slot>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  methods: {
    jobSeek() {
      this.$notify({
        title: "成功",
        message: "您已经跳转到求职者信息注册页面",
        type: "success",
        duration: 1000,
      });
      this.$router.push("/registerIndiv");
    },
  },
};
</script>
<style scoped>
.doc {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
.head_nav {
  position: relative;
  height: 65px;
  background-color: rgb(83, 202, 195);
  -moz-box-shadow: 0px 2px 6px 1px #c9c9c9;
  -webkit-box-shadow: 0px 2px 6px 1px #c9c9c9;
  box-shadow: 0px 2px 6px 1px #c9c9c9;
}
.wrap {
  width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
}
.left {
  height: 65px;
  width: 300px;
  text-align: center;
}
.right {
  height: 65px;
  width: 300px;
  text-align: center;
}
.content_wrap {
  width: 1000px;
  margin: 0 auto;
}
.title_box {
  width: 100%;
  height: 150px;
  display: flex;
}
.title_left {
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.title_left > h2 {
  color: rgba(0, 0, 0, 0.8);
  font-weight: normal;
  margin-bottom: 15px;
}
.title_left > h2 > .two {
  display: inline-block;
  margin-left: -5px;
  font-size: 28px;
}
.title_left_inner {
  display: flex;
  align-items: center;
  color: rgb(159, 163, 176);
  cursor: pointer;
  margin-left: 20px;
}
.seeker {
  margin-left: 5px;
}
.title_right {
  width: 50%;
  height: 100%;
  display: flex;
}
.form_box {
  width: 100%;
  display: flex;
  border-radius: 10px;
  -moz-box-shadow: 0px 0px 7px 4px #cfcfcf;
  -webkit-box-shadow: 0px 0px 7px 4px #cfcfcf;
  box-shadow: 0px 0px 5px 2px #cfcfcf;
}
.form_left {
  width: 70%;
  padding: 60px 0 0 60px;
  background-color: #fff;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  padding-bottom: 30px;
}
.form_right {
  width: 30%;
  background-color: #fbfbfd;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
}
.content_box {
  background-color: #eef0f5;
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}
.flex {
  display: flex;
  justify-content: center;
}
.col {
  flex-direction: column;
}
.center {
  align-items: center;
}
.ctrl {
  width: 190px;
  height: 3px;
  border-radius: 10px;
  margin: 0 5px;
  background-color: rgb(83, 202, 195);
}
.ctrl_sd {
  background-color: rgb(159, 163, 176);
}
.first {
  width: 25px;
  height: 25px;
  line-height: 25px;
  text-align: center;
  background-color: rgb(83, 202, 195);
  color: #fff;
  border-radius: 100%;
}
.second {
  background-color: rgb(159, 163, 176);
}
.text_left {
  color: rgb(83, 202, 195);
  margin-left: -30px;
  font-size: 14px;
}
.text_right {
  align-self: flex-end;
  font-size: 14px;
  margin-right: -31px;
}
</style>