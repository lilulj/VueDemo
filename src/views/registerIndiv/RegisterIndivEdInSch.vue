<template>
  <!-- 实习经历表 -->
  <RegisterIndivModule>
    <!-- 头部插槽 来自RegisterTopSlot -->

    <div slot="change"></div>

    <!-- 表单插槽 来自RegisterFormSlot -->

    <div slot="headH">
      <h1>学历信息</h1>
    </div>

    <div slot="headP">
      <p class="headp">完善学历信息您将被送到更多Boss面前</p>
    </div>

    <!-- 表单插槽 -->

    <div slot="form">
      <!-- 学历信息表单 -->

      <el-form :model="educationForm" :rules="rules" ref="educationForm" label-width="80px">
        <!-- 学校名称* -->

        <el-form-item label="学校名称" prop="graduationSch">
          <el-input v-model="educationForm.graduationSch" clearable placeholder="请输入您的学校名称"></el-input>
        </el-form-item>

        <!-- 学历* -->

        <el-form-item label="学历" prop="education">
          <el-select v-model="educationForm.education" placeholder="请选择学历">
            <el-option
              v-for="item in $store.state.educationOptions"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </el-form-item>

        <!-- 所学专业* -->

        <el-form-item label="所学专业" prop="graduationMajor">
          <el-input v-model="educationForm.graduationMajor" placeholder="例如：电子科学与技术" clearable></el-input>
        </el-form-item>

        <!-- 学习时间* -->

        <el-form-item label="学习时间" prop="onSchTime">
          <el-date-picker
            v-model="educationForm.onSchTime"
            type="daterange"
            start-placeholder="入学年月"
            end-placeholder="毕业年月"
            :default-time="['00:00:00', '23:59:59']"
          ></el-date-picker>
        </el-form-item>

        <!-- 在校内容 -->

        <el-form-item label="在校经历" prop="exInSch">
          <el-input
            type="textarea"
            v-model="educationForm.exInSch"
            placeholder="请输入内容"
            maxlength="300"
            show-word-limit
            clearable
            :autosize="{ minRows: 6, maxRows: 8}"
          ></el-input>
        </el-form-item>

        <!-- 按钮 -->

        <el-form-item class="button-box">
          <el-button type="primary" @click="submitForm('educationForm')">下一步</el-button>
          <el-button @click="backStep">上一步</el-button>
          <el-button @click="resetForm('educationForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </RegisterIndivModule>
</template>

<script>
import RegisterIndivModule from "components/content/RegisterIndivModule";
import { postCodeL } from "network/registerIndiv";

export default {
  name: "",
  data() {
    return {
      // 毕业实习表单
      educationForm: {
        graduationSch: "", //毕业学校
        education: "", //学历
        onSchTime: "", //上学时间 一段字符串
        graduationMajor: "", //所学专业
        exInSch: "", //在学校的经历 不是必须的
      },
      rules: {
        graduationSch: [
          { required: true, message: "请输入学校名称", trigger: "change" },
        ],
        education: [
          {
            required: true,
            message: "请勾选学历",
            trigger: "change",
          },
        ],
        onSchTime: [
          { required: true, message: "请勾选在校时间", trigger: "change" },
        ],
        graduationMajor: [
          { required: true, message: "请填写所学专业", trigger: "change" },
        ],
        // exInSch: [
        //   { required: true, message: "请填写在校经历", trigger: "blur" },
        // ],
      },
    };
  },
  components: {
    RegisterIndivModule,
  },
  methods: {
    // 提交表单
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          // axios请求
          let startSch = new Date(this.educationForm.onSchTime[0]).getTime();
          let endSch = new Date(this.educationForm.onSchTime[1]).getTime();
          let formData = new FormData();
          formData.append("graduationSch", this.educationForm.graduationSch);
          formData.append("education", this.educationForm.education);
          formData.append("graduationDate", startSch);
          formData.append("startSchDate", endSch);
          formData.append(
            "graduationMajor",
            this.educationForm.graduationMajor
          );
          formData.append("exInSch", this.educationForm.exInSch);
          postCodeL(formData).then((result) => {
            console.log(result);
          });
          // 提示
          this.$message({
            message: "快填写您的期望职位吧，很多Boss在等着你哦！",
            type: "success",
            duration: 1500,
          });
          // 路由
          this.$router.push("/registerIndivHopePost");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    // 重置表单
    resetForm(formName) {
      this.$confirm("<strong>您确定要重置所有信息吗？</strong>", "提醒", {
        dangerouslyUseHTMLString: true,
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        center: true,
      }).then(() => {
        this.$refs[formName].resetFields();
      });
    },
    // 上一步
    backStep() {
      this.$router.push("/registerIndivExInCom");
    },
  },
};
</script>
<style scoped>
h1 {
  font-weight: normal;
  margin-bottom: 10px;
}
.headp {
  color: #999;
  margin-bottom: 30px;
  letter-spacing: 2px;
}
.el-form-item {
  width: 600px;
  display: flex;
}
::v-deep .el-form-item__label {
  text-align: left;
}
::v-deep .el-form-item__content {
  flex-grow: 1;
  margin-left: 0 !important;
}
::v-deep .el-cascader {
  width: 100%;
}
::v-deep .el-date-editor--daterange.el-input__inner {
  width: 100%;
}
::v-deep .el-select {
  width: 100%;
}

.el-form-item {
  margin-bottom: 30px;
}
.button-box {
  margin-left: 78px;
}
.el-button {
  margin-right: 30px;
  margin-top: 30px;
}
::v-deep .el-form-item__error {
  top: -20px;
}
</style>