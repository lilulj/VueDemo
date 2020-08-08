<template>
  <div>
    <!-- 期望职位表单 -->
    <div class="flex hopeBox" v-show="!isShow">
      <div class="content">
        <span class="el-icon-suitcase-1 icon"></span>
        <span>后端开发{{}}</span>
        <el-divider direction="vertical" class="division"></el-divider>
        <span class="el-icon-coin icon"></span>
        <span>6-8K{{}}</span>
        <el-divider direction="vertical" class="division"></el-divider>
        <span class="el-icon-data-line icon"></span>
        <span>不限{{}}</span>
        <el-divider direction="vertical" class="division"></el-divider>
        <span class="el-icon-location-outline icon"></span>
        <span>成都{{}}</span>
      </div>
      <a href="javascript:;" class="edit flex" @click="isShow=true">
        <div class="el-icon-edit-outline"></div>
        <div>编辑</div>
      </a>
    </div>
    <!-- 编辑盒子 -->
    <div class="editBox" v-show="!isShow">
      <h3>编辑期望职位</h3>
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm">
        <!-- 第一列 -->
        <el-row>
          <el-col :span="12" class="padding"></el-col>
          <el-col :span="12" class="padding"></el-col>
        </el-row>
        <!-- 第二列 -->
        <!-- 第三列 -->
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      isShow: false, //切换
      ruleForm: {},
      rules: {},
    };
  },
};
</script>
<style scoped>
.flex {
  display: flex;
}
.hopeBox {
  justify-content: space-between;
  padding: 8px 0 8px 15px;
  word-break: break-all;
}
.content {
  flex: 1;
  margin-right: 25px;
  font-size: 14px;
  white-space: pre-wrap;
  overflow: hidden;
  word-break: break-all;
}
.hopeBox:hover {
  background-color: #f2f5f9;
  cursor: pointer;
  transition: all 0.15s linear;
}
.edit {
  align-self: start;
  font-size: 14px;
  color: #00c2b3;
  align-items: center;
  padding: 0 5px;
}
.el-icon-edit-outline {
  margin-right: 5px;
}
a:hover {
  opacity: 0.5;
}
a:focus {
  outline: none;
}
.icon {
  color: #9fa3b0;
  margin-right: 5px;
}
.division {
  margin: 0 26px;
}
h3 {
  font-weight: normal;
  color: #24272e;
  font-size: 16px;
  font-weight: 500;
  margin: 0 0 16px 30px;
}
.editBox {
  padding: 20px 30px;
  margin: 0 -30px;
  background-color: #f8f9fb;
}
.padding {
  padding: 30px;
}
</style>