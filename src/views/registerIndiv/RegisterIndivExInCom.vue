<template>
  <!-- 在公司的实习经历表单 -->
  <RegisterIndivModule>
    <!-- 头部插槽 来自RegisterTopSlot -->

    <div slot="change"></div>

    <!-- 表单插槽 来自RegisterFormSlot -->

    <div slot="headH">
      <h1>您最近的一份实习经历</h1>
    </div>

    <div slot="headP">
      <p class="headp">填写实习经历,我们会找到适合您的boss</p>
    </div>

    <div slot="form">
      <!-- 实习经历表单 -->

      <el-form :model="exForm" :rules="rules" ref="exForm">
        <!-- 实习公司* -->

        <el-form-item label="公司名称" prop="practiceCompany">
          <el-input v-model="exForm.practiceCompany"></el-input>
        </el-form-item>

        <!-- 实习职位* -->

        <el-form-item label="所任职位" prop="practicePost">
          <el-cascader
            v-model="exForm.practicePost"
            :options="options"
            clearable
            placeholder="选择职位类型"
            filterable
            :props="{ expandTrigger: 'hover' }"
          >
            <template slot-scope="{ node, data }">
              <span>{{ data.label }}</span>
              <span v-if="!node.isLeaf"></span>
            </template>
          </el-cascader>
        </el-form-item>

        <!-- 在职时间* -->

        <el-form-item label="在职时间" prop="onJobTime">
          <el-date-picker
            v-model="exForm.onJobTime"
            type="daterange"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
            :default-time="['00:00:00', '23:59:59']"
          ></el-date-picker>
        </el-form-item>
        <div class="heightbox" v-show="exForm.practicePost.length == 0"></div>

        <!-- 所需技能* -->

        <el-form-item label="所需技能" prop="haveSkill" v-show="exForm.practicePost.length != 0">
          <el-select
            v-model="exForm.haveSkill"
            multiple
            placeholder="请选择（可以自己创建）"
            clearable
            filterable
            allow-create
          >
            <el-option
              v-for="item in skilloptions"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </el-form-item>

        <!-- 工作内容* -->

        <el-form-item label="工作内容" prop="practiceContent" v-show="exForm.practicePost.length != 0">
          <el-input
            type="textarea"
            v-model="exForm.practiceContent"
            placeholder="请输入内容"
            maxlength="300"
            show-word-limit
            clearable
            :autosize="{ minRows: 6, maxRows: 8}"
          ></el-input>
        </el-form-item>

        <!-- 按钮 -->

        <el-form-item class="button-box">
          <el-button type="primary" @click="submitForm('exForm')">下一步</el-button>
          <el-button @click="backStep">上一步</el-button>
          <el-button @click="resetForm('exForm')">重置</el-button>

          <!-- 跳过按钮 -->

          <el-button
            type="primary"
            class="skip"
            @click="skip"
            v-show="$store.state.identify =='学生'"
          >跳过</el-button>
        </el-form-item>
      </el-form>
    </div>
  </RegisterIndivModule>
</template>

<script>
import RegisterIndivModule from "components/content/RegisterIndivModule";
import { postCodeCom } from "network/registerIndiv";

//3级职位
const options = [
  {
    value: "前端",
    label: "前端",
    children: [
      {
        value: "设计原则",
        label: "设计原则",
        children: [
          {
            value: "一致",
            label: "一致",
          },
          {
            value: "反馈",
            label: "反馈",
          },
          {
            value: "效率",
            label: "效率",
          },
          {
            value: "可控",
            label: "可控",
          },
        ],
      },
      {
        value: "导航",
        label: "导航",
        children: [
          {
            value: "cexiangdaohang",
            label: "侧向导航",
          },
          {
            value: "dingbudaohang",
            label: "顶部导航",
          },
        ],
      },
    ],
  },
];
//技能 选项
const skilloptions = [
  {
    value: "选项1",
    label: "黄金糕",
  },
  {
    value: "选项2",
    label: "双皮奶",
  },
  {
    value: "选项3",
    label: "蚵仔煎",
  },
  {
    value: "选项4",
    label: "龙须面",
  },
  {
    value: "选项5",
    label: "北京烤鸭",
  },
];
export default {
  name: "",
  data() {
    return {
      // 职位的选项
      options,
      // 所学技能的选项
      skilloptions,
      // 实习经历表单
      exForm: {
        practiceCompany: "", //实习公司名称
        practicePost: [], //实习职位
        onJobTime: "", //实习时间
        haveSkill: [], //所需技能
        practiceContent: "", //实习内容
      },
      rules: {
        practiceCompany: [
          { required: true, message: "请输入公司名称", trigger: "change" },
        ],
        practicePost: [
          {
            type: "array",
            required: true,
            message: "请勾选以前的职业",
            trigger: "change",
          },
        ],
        onJobTime: [
          {
            required: true,
            message: "请选择求职时间",
            trigger: "change",
          },
        ],
        haveSkill: [
          {
            type: "array",
            required: true,
            message: "请选择所需技能",
            trigger: "change",
          },
        ],
        practiceContent: [
          { required: true, message: "请填写工作内容", trigger: "change" },
        ],
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
          let startJob = new Date(
            this.exForm.onJobTime[0]
          ).toLocaleDateString();
          let endJob = new Date(this.exForm.onJobTime[1]).toLocaleDateString();
          let formData = new FormData();
          formData.append("practiceCompany", this.exForm.practiceCompany);
          // formData.append("practicePost", this.exForm.practicePost);
          formData.append("practiceStartTime", startJob);
          formData.append("pacticeEndTime", endJob);
          // formData.append("skills", this.exForm.haveSkill);
          formData.append("practiceContent", this.exForm.practiceContent);
          postCodeCom(formData).then((result) => {
            console.log(result);
          });

          this.$message({
            message: "是的，这是学历填写哦！",
            type: "success",
            duration: 1500,
          });
          // this.$router.push("/registerIndivEdInSch");
          console.log(this.exForm);
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    // 重置
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
      this.$router.push("/registerIndiv");
    },
    // 如果是学生身份进来的可以跳过  实习经历表单
    skip() {
      this.$router.push("/registerIndivEdInSch");
    },
  },
};
</script>
<style scoped>
.heightbox {
  width: 100%;
  height: 238px;
}
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
::v-deep .el-form-item__content {
  flex-grow: 1;
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
.skip {
  position: absolute;
  bottom: 500px;
  right: -200px;
}
::v-deep .el-form-item__error {
  top: -20px;
}
</style>