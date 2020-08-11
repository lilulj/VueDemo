<template>
  <div class="relative">
    <!-- 添加 按钮 绝对定位 -->
    <div class="addBtn" v-show="!isEdit">
      <a href="javascript:;" class="edit flex">
        <div class="el-icon-circle-plus-outline"></div>
        <div>添加</div>
      </a>
    </div>
    <!-- 内容区 -->
    <div class="exBox" v-show="!isEdit" @click="isEdit=true">
      <div class="flex first">
        <!-- 网址 -->
        <div class="flex web">
          <span class="el-icon-position"></span>
          <p>www.baidu.com</p>
        </div>
        <div class="flex">
          <!-- 删除 -->
          <a href="javascript:;" class="edit flex" @click.stop>
            <div class="el-icon-delete"></div>
            <div>删除</div>
          </a>
          <!-- 编辑 -->
          <a href="javascript:;" class="edit flex" @click.stop="isEdit=true">
            <div class="el-icon-edit-outline"></div>
            <div>编辑</div>
          </a>
        </div>
      </div>
    </div>
    <!-- 编辑盒子 -->
    <div class="editBox" v-show="isEdit">
      <h3>编辑社交主页</h3>
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm">
        <!-- 社交主页 -->
        <el-row>
          <el-col :span="24" class="padding">
            <el-form-item label prop="homePage">
              <el-input v-model="ruleForm.homePage" placeholder="例如：www.baidu.com"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <!-- 按钮 -->
        <el-row>
          <el-col :span="24" class="padding textRight">
            <!-- 完成、取消按钮 -->
            <el-form-item>
              <el-button @click="isEdit=false">取消</el-button>
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
      isEdit: false, //切换
      isLoading: false, //加载
      ruleForm: {
        homePage: "", //社交主页
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
          // this.isEdit=false
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
.relative {
  position: relative;
}
.flex {
  display: flex;
}
.edit {
  font-size: 14px;
  color: #00c2b3;
  align-items: center;
  padding: 0 5px;
}
.addBtn {
  top: -36px;
  right: 0;
  position: absolute;
}
a:hover {
  opacity: 0.5;
}
a:focus {
  outline: none;
}
.el-icon-circle-plus-outline,
.el-icon-delete,
.el-icon-edit-outline {
  margin-right: 5px;
}
.exBox {
  padding: 8px 0 8px 15px;
}
.exBox:hover {
  background-color: #f2f5f9;
  cursor: pointer;
  transition: all 0.15s linear;
}
.first {
  justify-content: space-between;
  padding: 7px 0;
}
.web {
  align-items: center;
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
.editBox {
  padding: 20px 30px;
  margin: 0 -30px;
  background-color: #f8f9fb;
}
.textRight {
  text-align: right;
}
</style>