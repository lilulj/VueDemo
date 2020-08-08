<template>
  <div class="wrap flex">
    <div class="resumeBox">
      <!-- 表头 更新时间 预览简历 -->
      <div class="tableHead">
        <slot name="tableHead"></slot>
      </div>
      <!-- 基本信息 -->
      <div class="basicInfo item">
        <slot name="basicInfo"></slot>
      </div>

      <!-- 个人优势 -->
      <div class="item">
        <h3 class="title">个人优势</h3>
        <slot name="personalAdva"></slot>
      </div>
      <!-- 期望职位 -->
      <div class="item">
        <h3 class="title">期望职位</h3>
        <slot name="hopePost"></slot>
      </div>
      <!-- 实习经历 -->
      <div class="item">
        <div class="flex position">
          <h3 class="title">实习经历</h3>
        </div>
        <slot name="internshipEx"></slot>
      </div>
      <!-- 项目经历 -->
      <div class="item">
        <h3 class="title">项目经历</h3>
        <slot name="projectEx"></slot>
      </div>
      <!-- 教育经历 -->
      <div class="item">
        <h3 class="title">教育经历</h3>
        <slot name="educationEx"></slot>
      </div>
      <!-- 资格证书 -->
      <div class="item">
        <h3 class="title">资格证书</h3>
        <slot name="credentials"></slot>
      </div>
      <!-- 社交主页 -->
      <div class="item">
        <h3 class="title">社交主页</h3>
        <slot name="socialHomePage"></slot>
      </div>
      <!-- 志愿服务经历 -->
      <div class="item">
        <h3 class="title">志愿服务经历</h3>
        <slot name="volunteerEx"></slot>
      </div>
    </div>
    <div class="sundryBox">
      <!-- 附件管理 -->
      <div class="item_sd item">
        <slot name="accessory"></slot>
      </div>
      <!-- 广告图片 -->
      <div class="item_sd">
        <slot name="adImages"></slot>
      </div>
      <!-- 个人设置 -->
      <div class="item_sd item">
        <slot name="indivSet"></slot>
      </div>
      <!-- 简历活跃度 -->
      <div class="item_sd item">
        <slot name="vitality"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
};
</script>
<style scoped>
.flex {
  display: flex;
}
.wrap {
  padding-top: 20px;
  width: 1184px;
  margin: 0 auto;
}
.resumeBox {
  flex: 1;
  background-color: #fff;
  margin-right: 20px;
  padding: 30px;
}
.sundryBox {
  width: 284px;
}
.tableHead {
  padding-bottom: 10px;
}
.item {
  padding: 20px 0 30px;
  border-bottom: 1px solid #f2f3f3;
}
.basicInfo {
  padding-top: 0;
}
.title {
  position: relative;
  padding-left: 12px;
  font-weight: normal;
  font-size: 18px;
  padding-bottom: 8px;
}
.title::before {
  content: "";
  position: absolute;
  width: 3px;
  height: 14px;
  border-radius: 10px;
  background-color: #53cac3;
  left: 0;
  top: 5px;
}
.item_sd {
  margin-bottom: 16px;
}
</style>