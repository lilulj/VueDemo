<template>
  <div>
    <!-- 期望职位表单 -->
    <div class="flex hopeBox" v-show="!isShow" @click="isShow=true">
      <div class="content">
        <span class="el-icon-suitcase-1 icon"></span>
        <span>后端开发{{ruleForm.hopePost}}</span>
        <el-divider direction="vertical" class="division"></el-divider>
        <span class="el-icon-coin icon"></span>
        <span>6{{ruleForm.minSalary}}-8K{{ruleForm.maxSalary}}</span>
        <el-divider direction="vertical" class="division"></el-divider>
        <span class="el-icon-data-line icon"></span>
        <span>不限{{ruleForm.trade}}</span>
        <el-divider direction="vertical" class="division"></el-divider>
        <span class="el-icon-location-outline icon"></span>
        <span>成都{{ruleForm.city}}</span>
      </div>
      <a href="javascript:;" class="edit flex" @click.stop="isShow=true">
        <div class="el-icon-edit-outline"></div>
        <div>编辑</div>
      </a>
    </div>
    <!-- 编辑盒子 -->
    <div class="editBox" v-show="isShow">
      <h3>编辑期望职位</h3>
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm">
        <!-- 第一列 -->
        <el-row>
          <!-- 求职类型 -->
          <el-col :span="12" class="padding">
            <el-form-item label="求职类型" prop="jobType">
              <el-select v-model="ruleForm.jobType" placeholder="求职类型">
                <el-option label="全职" value="全职"></el-option>
              </el-select>
            </el-form-item>
          </el-col>

          <!-- 期望职位 -->
          <el-col :span="12" class="padding">
            <el-form-item label="期望职位" prop="hopePost">
              <el-input v-model="ruleForm.hopePost"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <!-- 第二列 -->
        <el-row>
          <el-col :span="12" class="padding">
            <!-- 薪资范围 -->
            <el-form-item label="薪资要求" class="sd">
              <!-- 至少 -->
              <el-select v-model="ruleForm.minSalary" placeholder="请选择">
                <el-option
                  v-for="item in salaryOptions"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                >
                  <span style="float: left">{{ item.label }}</span>
                </el-option>
              </el-select>
              <span class="mid">至</span>
              <el-select v-model="ruleForm.maxSalary" placeholder="请选择">
                <el-option
                  v-for="item in salaryOptions"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                >
                  <span style="float: left">{{ item.label }}</span>
                </el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="12" class="padding">
            <el-form-item label="行业">
              <el-input v-model="ruleForm.trade"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <!-- 第三列 -->
        <el-row>
          <!-- 城市 -->
          <el-col :span="12" class="padding">
            <el-form-item label="城市" prop="city">
              <el-cascader :options="cityOptions" v-model="ruleForm.city">
                <template slot-scope="{ data }">
                  <span>{{ data.label }}</span>
                </template>
              </el-cascader>
            </el-form-item>
          </el-col>
          <el-col :span="12" class="padding"></el-col>
        </el-row>
        <!-- 最后一列 -->
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
// 薪资范围
const salaryOptions = [];
// 城市范围
const cityOptions = [];
export default {
  name: "",
  data() {
    return {
      isShow: false, //切换
      isLoading: false, //加载
      salaryOptions, //薪资范围
      cityOptions, //城市选择
      ruleForm: {
        jobType: "", //工作类型
        hopePost: "", //期望职位
        minSalary: "", //最少薪资
        maxSalary: "", //最多薪资
        trade: "", //行业
        city: "", //城市
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
  padding: 0 30px;
}
.el-select {
  width: 100%;
}
.sd {
  display: flex;
  flex-direction: column;
}

::v-deep .el-form-item__label {
  text-align: left;
}
.sd > ::v-deep .el-form-item__content {
  display: flex;
}
.el-cascader {
  width: 100%;
}
.mid {
  margin: 0 20px;
}
.textRight {
  text-align: right;
}
</style>