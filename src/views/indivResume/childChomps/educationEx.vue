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
      <!-- 公司名称+工作时间+编辑+删除按钮 -->
      <div class="flex first">
        <div class="flex">
          <h4>学校{{}}</h4>
          <p class="date">学习时间{{}}</p>
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
      <!-- 专业 +学历 -->
      <div class="second flex">
        <div class="hfour">专业{{}}</div>
        <el-divider direction="vertical" class="division"></el-divider>
        <div class="hfour">学历{{}}</div>
      </div>
      <!-- 在校经历 -->
      <div class="third flex">
        <div>在校经历：</div>
        <p>在校经历{{}}</p>
      </div>
    </div>
    <!-- 编辑盒子 -->
    <div class="editBox" v-show="isEdit">
      <h3>编辑教育经历</h3>
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm">
        <!-- 第一列 -->
        <el-row>
          <!-- 学校名称 -->
          <el-col :span="12" class="padding">
            <el-form-item label="公司名称" prop="schoolName">
              <el-input v-model="ruleForm.schoolName" placeholder="例如：四川大学"></el-input>
            </el-form-item>
          </el-col>
          <!-- 日制 -->
          <el-col :span="12" class="padding">
            <el-form-item label="日制" prop="study">
              <el-radio-group v-model="ruleForm.study">
                <el-row :gutter="20">
                  <el-col :span="12">
                    <el-radio-button label="全日制"></el-radio-button>
                  </el-col>
                  <el-col :span="12">
                    <el-radio-button label="非全日制"></el-radio-button>
                  </el-col>
                </el-row>
              </el-radio-group>
            </el-form-item>
          </el-col>
        </el-row>
        <!-- 第二列 -->
        <el-row>
          <!-- 学历 -->
          <el-col :span="12" class="padding">
            <el-form-item label="学历" prop="education">
              <el-select v-model="ruleForm.education" placeholder="请选择您的学历">
                <el-option
                  v-for="item in educationOptions"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                >
                  <span style="float: left">{{ item.label }}</span>
                </el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <!-- 专业 -->
          <el-col :span="12" class="padding">
            <el-form-item label="专业" prop="major">
              <el-input v-model="ruleForm.major" placeholder="例如：金融"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <!-- 第三列 -->
        <el-row>
          <!-- 在校时间段 -->
          <el-col :span="24" class="padding">
            <el-form-item label="在职时间" prop="schoolTime">
              <el-date-picker
                v-model="ruleForm.schoolTime"
                type="monthrange"
                range-separator="至"
                start-placeholder="开始月份"
                end-placeholder="结束月份"
                value-format="yyyy-MM-dd"
              ></el-date-picker>
            </el-form-item>
          </el-col>
        </el-row>
        <!-- 第四列 -->
        <el-row>
          <!-- 在校经历 -->
          <el-col :span="24" class="padding">
            <el-form-item label="在校经历(选填)" prop="schoolEx">
              <el-input
                type="textarea"
                v-model="ruleForm.schoolEx"
                maxlength="300"
                :autosize="{ minRows: 6, maxRows: 8}"
                show-word-limit
                placeholder="请输入工作内容"
              ></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <!-- 第五列 -->
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
      educationOptions: [], //学历选项
      ruleForm: {
        schoolName: "", //学校名称
        study: "", //日制
        margin: "", //专业
        schoolTime: "", //在校时间
        schoolEx: "", //在校经历
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
.addBtn {
  top: -36px;
  right: 0;
  position: absolute;
}
.edit {
  font-size: 14px;
  color: #00c2b3;
  align-items: center;
  padding: 0 5px;
}
a:hover {
  opacity: 0.5;
}
a:focus {
  outline: none;
}
.first {
  justify-content: space-between;
  margin-bottom: 20px;
  padding: 7px 0;
}
.el-icon-circle-plus-outline,
.el-icon-delete,
.el-icon-edit-outline {
  margin-right: 5px;
}
h4 {
  max-width: 420px;
  word-break: break-all;
  color: #414a60;
  font-size: 15px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-weight: 700;
}
.hfour {
  max-width: 250px;
  color: #414a60;
  font-size: 15px;
  font-weight: 700;
}
.date {
  color: #9fa3b0;
  font-size: 12px;
  padding-left: 30px;
}
.exBox {
  padding: 8px 0 8px 15px;
}
.exBox:hover {
  background-color: #f2f5f9;
  cursor: pointer;
  transition: all 0.15s linear;
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
.padding {
  padding: 0 30px;
}
.el-select {
  width: 100%;
}
.textRight {
  text-align: right;
}
.fourth {
  font-size: 14px;
  padding: 7px 0;
  color: #61687c;
  white-space: pre-wrap;
  overflow: hidden;
  word-break: break-all;
}
.third {
  font-size: 14px;
  padding: 7px 0;
  color: #61687c;
  white-space: pre-wrap;
  overflow: hidden;
  word-break: break-all;
}
.third > div:first-child {
  font-weight: 700;
}
.el-radio-group {
  width: 100%;
}
.el-radio-button {
  width: 100%;
}
::v-deep .el-radio-button__inner {
  width: 100%;
}
.el-date-editor {
  width: 100%;
}
.el-date-editor ::v-deep .el-range-separator {
  padding: 0;
}
.editBox {
  padding: 20px 30px;
  margin: 0 -30px;
  background-color: #f8f9fb;
}
</style>