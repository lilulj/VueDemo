<template>
  <div>
    <!-- 导航栏 -->
    <!-- 我的简历展示(组件) -->
    <myResumeModule>
      <!-- 表头插槽 -->
      <div slot="tableHead">
        <formHead />
      </div>
      <!-- 基本信息插槽 -->
      <div slot="basicInfo">
        <basicInfo />
      </div>
      <!-- 个人优势插槽 -->
      <div slot="personalAdva">
        <personalAdva />
      </div>
      <!-- 期望职位插槽 -->
      <div slot="hopePost">
        <hopePost />
      </div>
      <!-- 实习经历插槽 -->
      <div slot="internshipEx">
        <internshipEx />
      </div>
      <!-- 项目经历插槽 -->
      <div slot="projectEx">
        <projectEx />
      </div>
      <!-- 教育经历插槽 -->
      <div slot="educationEx">
        <educationEx />
      </div>
      <!-- 资格证书插槽 -->
      <div slot="credentials">
        <credentials />
      </div>
      <!-- 社交主页插槽 -->
      <div slot="socialHomePage">
        <socialHomePage />
      </div>
      <!-- 志愿服务插槽 -->
      <div slot="volunteerEx">
        <volunteerEx />
      </div>
      <!-- 附件管理插槽 -->
      <div slot="accessory">
        <accessory />
      </div>
      <!-- 广告图片插槽 -->
      <div slot="adImages">
        <adImages />
      </div>
      <!-- 个人设置插槽 -->
      <div slot="indivSet">
        <indivSet />
      </div>
      <!-- 活跃度 -->
      <div slot="vitality">
        <vitality />
      </div>
    </myResumeModule>
  </div>
</template>

<script>
import myResumeModule from "components/content/myResume/myResumeModule";
import formHead from "./childChomps/formHead";
import basicInfo from "./childChomps/basicInfor";
import personalAdva from "./childChomps/personalAdva";
import hopePost from "./childChomps/hopePost";
import internshipEx from "./childChomps/internshipEx";
import projectEx from "./childChomps/projectEx";
import educationEx from "./childChomps/educationEx";
import credentials from "./childChomps/credentials";
import socialHomePage from "./childChomps/socialHomePage";
import volunteerEx from "./childChomps/volunteerEx";
import accessory from "./childChomps/accessory";
import adImages from "./childChomps/adImages";
import indivSet from "./childChomps/indivSet";
import vitality from "./childChomps/vitality";

export default {
  name: "",
  components: {
    myResumeModule, // 模板
    formHead, // 表头
    basicInfo, //基本信息
    personalAdva, //个人优势
    hopePost, //期望职位
    internshipEx, //实习经历
    projectEx, //项目经历
    educationEx, //教育经历
    credentials, //资格证书
    socialHomePage, //社交主页
    volunteerEx, //志愿服务
    // 右边的杂项
    accessory, //附件管理
    adImages, //广告图片
    indivSet, //个人设置
    vitality, //活跃度
  },
};
</script>
<style scoped>
</style>