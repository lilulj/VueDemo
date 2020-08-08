<template>
  <!-- 期望职位表单 -->
  <RegisterIndivModule>
    <!-- 头部插槽 来自RegisterTopSlot -->

    <div slot="change"></div>

    <!-- 表单插槽 来自RegisterFormSlot -->

    <div slot="headH">
      <h1>期望职位</h1>
    </div>

    <div slot="headP">
      <p class="headp">你符合很多个Boss的要求,现在提出您的要求</p>
    </div>

    <!-- 表单插槽 -->

    <div slot="form">
      <!-- 学历信息表单 -->

      <el-form :model="hopePostForm" :rules="rules" ref="hopePostForm" label-width="80px">
        <!-- 期望职位 -->

        <el-form-item label="期望职位" prop="desiredPost">
          <el-input v-model="hopePostForm.desiredPost" clearable placeholder="请输入您的期望职位"></el-input>
        </el-form-item>

        <!-- 期望地点 -->

        <el-form-item label="期望地点" prop="desiredPlace">
          <el-cascader
            v-model="hopePostForm.desiredPlace"
            :options="placeOptions"
            clearable
            placeholder="选择期望地点"
            :props="props"
            filterable
          >
            <template slot-scope="{ node, data }">
              <span>{{ data.cityName}}</span>
              <span v-if="!node.isLeaf"></span>
            </template>
          </el-cascader>
        </el-form-item>

        <!-- 个人优势 -->

        <el-form-item label="个人优势" prop="personalAdva">
          <el-input
            type="textarea"
            v-model="hopePostForm.personalAdva"
            placeholder="请输入内容"
            maxlength="300"
            show-word-limit
            clearable
            :autosize="{ minRows: 6, maxRows: 8}"
          ></el-input>
        </el-form-item>

        <!-- 按钮 -->

        <el-form-item class="button-box">
          <el-button type="primary" @click="submitForm('hopePostForm')">完成</el-button>
          <el-button @click="backStep">上一步</el-button>
          <el-button @click="resetForm('hopePostForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </RegisterIndivModule>
</template>

<script>
import RegisterIndivModule from "components/content/RegisterIndivModule";
import { postCodeHope, getPlace } from "network/registerIndiv";

export default {
  name: "",
  data() {
    return {
      // 期望地区
      placeOptions: null,
      // 期望工作的表单
      hopePostForm: {
        desiredPost: "", // 期望职位
        desiredPlace: [], // 期望地区
        personalAdva: "", // 个人优势
      },
      // 配置的一些参数
      props: {
        label: "cityName",
        value: "cityName",
        expandTrigger: "hover",
      },
      // 判断规则
      rules: {
        desiredPost: [
          { required: true, message: "请输入期望职位", trigger: "change" },
        ],
        desiredPlace: [
          {
            type: "array",
            required: true,
            message: "请勾选期望的地点",
            trigger: "change",
          },
        ],
        personalAdva: [
          { required: true, message: "请填写个人优势", trigger: "change" },
        ],
      },
    };
  },
  // 创建时
  mounted() {
    this.position();
  },
  components: {
    RegisterIndivModule,
  },
  methods: {
    //获取地区数据
    position() {
      getPlace().then((result) => {
        //  for (const item in result.data.data.subCity) {
        //     this.placeOptions.value=item.cityName;
        //  }
        console.log(result);
        this.placeOptions = result.data.data.children;
      });
    },
    // 提交按钮
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          // axios请求

          let formData = new FormData();
          formData.append("desiredPost", this.hopePostForm.desiredPost);
          // formData.append("desiredPlace", this.hopePostForm.desiredPlace);
          // formData.append("personalAdva", this.hopePostForm.personalAdva);
          postCodeHope(formData).then((result) => {
            console.log(result);
          });

          //提示
          this.$notify({
            title: "成功",
            message: "终于注册好了，Boss大人都等不急要见你了！",
            type: "success",
            duration: 1500,
          });
          //路由跳转
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    // 重置
    resetForm(formName) {
      if (confirm("您确定要重置所有信息吗？")) {
        this.$refs[formName].resetFields();
      }
    },
    // 上一步
    backStep() {
      this.$router.push("/registerIndivEdInSch");
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