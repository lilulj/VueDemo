<template>
  <div>
    <!-- 个人优势盒子 -->
    <div class="flex advaBox" v-show="!isShow">
      <div class="content">
        <p>个人优势{{}}</p>
      </div>
      <a href="javascript:;" class="edit flex" @click="isShow = true">
        <div class="el-icon-edit-outline"></div>
        <div>编辑</div>
      </a>
    </div>
    <!-- 编辑盒子 -->
    <div class="editBox" v-show="isShow">
      <h3>编辑个人优势</h3>
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm">
        <!-- 个人优势盒子 -->
        <el-form-item label prop="personalAdva">
          <el-col :span="24" class="padding">
            <el-input
              type="textarea"
              v-model="ruleForm.personalAdva"
              maxlength="140"
              :autosize="{ minRows: 6, maxRows: 8}"
              show-word-limit
            ></el-input>
          </el-col>
        </el-form-item>
        <!-- 按钮 -->
        <el-row>
          <el-col :span="24" class="padding textRight">
            <!-- 完成、取消按钮 -->
            <el-form-item>
              <el-button @click="isShow=false">取消</el-button>
              <el-button type="primary" @click="submitForm('ruleForm')" :loading="isLoading">完成</el-button>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      isShow: false,
      ruleForm: {
        personalAdva: "", //个人优势
      },
      rules: {},
    };
  },
  methods: {
    // 提交按钮
    submitForm(formName) {
      this.isLoading = true;
      this.$refs[formName].validate((valid) => {
        if (valid) {
          //异步请求
          this.isLoading = false;
          // this.isShow=false
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
  },
};
</script>
<style scoped>
.flex {
  display: flex;
}
.content {
  flex: 1;
  margin-right: 25px;
  font-size: 14px;
  color: #61687c;
  white-space: pre-wrap;
  overflow: hidden;
  word-break: break-all;
}
.advaBox {
  justify-content: space-between;
  padding: 8px 0 8px 15px;
  word-break: break-all;
}
.advaBox:hover {
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
.editBox {
  padding: 20px 30px;
  margin: 0 -30px;
  background-color: #f8f9fb;
}
h3 {
  font-weight: normal;
  color: #24272e;
  font-size: 16px;
  font-weight: 500;
  margin: 0 0 16px 30px;
}
.padding {
  padding: 0 30px;
}
.textRight {
  text-align: right;
}
</style>