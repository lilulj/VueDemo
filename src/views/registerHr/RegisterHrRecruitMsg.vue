<template>
  <RegisterHrModule>
    <!-- 头部的一个插槽 -->

    <div slot="one">✔</div>

    <!-- 用户电话 用户头像 -->

    <div class="userBox" slot="head_right">
      <div class="user">{{$store.state.userName}}</div>
      <div class="userImg">
        <img :src="$store.state.headPUrl" alt />
      </div>
    </div>

    <!-- 表单左插槽 -->

    <div slot="form_left">
      <el-form :model="recruitPostForm" :rules="rules" ref="recruitPostForm">
        <!-- 第一步 -->
        <!-- 小标题 -->
        <div class="form_title_box">
          <p class="form_title">职位基本信息</p>
          <p class="form_suggest">
            加
            <span class="red">*</span> 的内容，在确认发布以后，将无法修改
          </p>
          <p class="form_step">1</p>
        </div>

        <!-- 公司名称* -->

        <div class="flex comName_box">
          <div class="flex comName_title">
            <span>*</span>
            <p>公司：</p>
          </div>
          <div class="comName_content">{{$store.state.companyName}}</div>
        </div>

        <!-- 招聘类型* -->

        <el-form-item label="招聘类型：" prop="recruitType">
          <el-select v-model="recruitPostForm.recruitType" placeholder="请选择招聘类型">
            <el-option
              v-for="item in $store.state.recruitTypeOptions"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </el-form-item>

        <!-- 职位名称* -->

        <el-form-item label="职位名称：" prop="recruiterPostName">
          <el-input v-model="recruitPostForm.recruiterPostName" placeholder="请输入您的职位名称" clearable></el-input>
        </el-form-item>

        <!-- 工作城市* -->

        <el-form-item label="工作城市：" prop="recruiterWorkCity">
          <el-cascader
            @change="after"
            v-model="recruitPostForm.recruiterWorkCity"
            :options="recruiterWorkPlaceOptions"
            clearable
            placeholder="请勾选工作城市"
            :props="props"
            filterable
          >
            <template slot-scope="{ node, data }">
              <span>{{ data.label}}</span>
              <span v-if="!node.isLeaf"></span>
            </template>
          </el-cascader>
        </el-form-item>

        <!-- 工作地点 -->

        <el-form-item label="* 工作地点：">
          <div @click="inputPlace">
            <el-input v-model="recruitPostForm.recruiterWorkPlace" placeholder="具体的工作地点"></el-input>
          </div>
        </el-form-item>

        <!-- 第二步 -->
        <!-- 小标题 -->

        <div class="form_title_box">
          <p class="form_title">职位要求</p>
          <p class="form_suggest">我们将通过以下条件，为您精确推荐合适的牛人，请尽量详细填写</p>
          <p class="form_step">2</p>
        </div>

        <!-- 工作经验 -->

        <el-form-item label="工作经验：" prop="recruitJobEx">
          <el-select v-model="recruitPostForm.recruitJobEx" placeholder="请选择招聘类型">
            <el-option
              v-for="item in $store.state.recruitJobExOptions"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </el-form-item>

        <!-- 学历 -->

        <el-form-item label="学历：" prop="education">
          <el-select v-model="recruitPostForm.education" placeholder="请选择学历">
            <el-option
              v-for="item in $store.state.educationOptions"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </el-form-item>

        <!-- 薪资范围 -->

        <el-form-item label="薪资范围：" prop="salaryRange">
          <el-select v-model="recruitPostForm.salaryRange" placeholder="最低">
            <el-option
              v-for="item in $store.state.salaryRangeOptions"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </el-form-item>

        <!-- 职位具体描述 -->

        <el-form-item label="职位描述：" prop="jobDescription">
          <el-input
            type="textarea"
            v-model="recruitPostForm.jobDescription"
            placeholder="1.工作内容 
2.任职要求  
3.特别说明"
            maxlength="5000"
            show-word-limit
            clearable
            :autosize="{ minRows: 6, maxRows: 8}"
          ></el-input>
        </el-form-item>

        <!-- 发布按钮+阅读条例
        -->
        <el-checkbox v-model="readChecked" :disabled="btnIsdisabled" class="read-item">
          <a href="javascript:;" @click="open" class="test_downline">已阅读并遵守《万息招聘手册》</a>
        </el-checkbox>
        <br />
        <div class="btn_box">
          <el-button type="primary" @click="submitForm('recruitPostForm')">发布</el-button>
          <el-button @click="backStep">上一步</el-button>
          <el-button @click="resetForm('recruitPostForm')">重置</el-button>
        </div>
      </el-form>
    </div>

    <!-- 表单右插槽 -->
    <div class="formRight" slot="form_right">
      <img src alt />
      <p>
        我们会根据您发布的职位
        <br />为您精确推荐牛人
      </p>
    </div>
  </RegisterHrModule>
</template>

<script>
import RegisterHrModule from "components/content/RegisterHrModule";
import { getPlace } from "network/registerIndiv";
import { registerPost } from "network/registerHr";
const recruiterWorkPlaceOptions = [
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
export default {
  name: "",
  data() {
    return {
      recruiterWorkPlaceOptions, //城市
      readChecked: false, //我已阅读啥的
      btnIsdisabled: true, //没有阅读之前不能点
      recruitPostForm: {
        recruitType: "", //招聘的类型
        recruiterPostName: "", //招聘的职位名称
        recruiterWorkCity: null, //招聘的工作城市
        recruiterWorkPlace: "", //招聘的工作具体位置 可以不填
        recruitJobEx: "", //工作经验要求
        education: "", //学历要求
        salaryRange: "", //薪资范围
        jobDescription: "", //职位描述
        hrId: this.$store.state.hrId,
      },
      rules: {
        //招聘的类型
        recruitType: [
          {
            required: true,
            message: "请勾选您准备招聘的类型",
            trigger: "change",
          },
        ],
        //招聘的职位名称
        recruiterPostName: [
          {
            required: true,
            message: "请填写您准备招聘的工作职位",
            trigger: "change",
          },
        ],
        //招聘的工作城市
        recruiterWorkCity: [
          {
            type: "array",
            required: true,
            message: "请勾选您招聘的工作城市",
            trigger: "change",
          },
        ],
        //工作经验要求
        recruitJobEx: [
          {
            required: true,
            message: "请填写您准备招聘的工作职位",
            trigger: "change",
          },
        ],
        //学历要求
        education: [
          {
            required: true,
            message: "请填写您准备招聘的工作职位",
            trigger: "change",
          },
        ],
        //薪资范围
        salaryRange: [
          {
            required: true,
            message: "请填写您准备招聘的工作职位",
            trigger: "change",
          },
        ],
        //职位描述
        jobDescription: [
          {
            required: true,
            message: "请填写您准备招聘的工作职位",
            trigger: "change",
          },
        ],
      },
      // 配置的一些参数  城市选择的一些参数
      props: {
        label: "label",
        value: "value",
        expandTrigger: "hover",
      },
    };
  },
  // 创建时
  mounted() {
    this.position();
    this.log();
  },
  components: {
    RegisterHrModule,
  },
  methods: {
    //工作城市和工作的具体地点的联动
    after() {
      console.log(1);
      console.log(this.recruitPostForm.recruiterWorkCity);
      this.recruitPostForm.recruiterWorkPlace = this.recruitPostForm.recruiterWorkCity[2];
      console.log(this.recruitPostForm.recruiterWorkPlace);
    },
    //输入具体的地址
    inputPlace() {
      if (this.recruitPostForm.recruiterWorkCity) {
        this.$prompt("请输入具体的地址", "提示", {
          confirmButtonText: "保存地址",
          cancelButtonText: "取消",
        })
          .then(({ value }) => {
            let a = value;
            this.recruitPostForm.recruiterWorkPlace =
              this.recruitPostForm.recruiterWorkCity[2] + "/" + a;
            this.$message({
              message: "录入成功",
              type: "success",
            });
          })
          .catch(() => {
            this.$message({
              type: "info",
              message: "取消输入",
            });
          });
      } else {
        this.$message.error("请先选择城市！");
      }
    },
    //测试用的
    log() {},
    //获取地区数据
    position() {
      //   getPlace().then((result) => {
      //     this.recruiterWorkPlaceOptions = result.data.data.children;
      //     console.log(this.recruiterWorkPlaceOptions);
      //   });
    },
    //阅读条例
    open() {
      this.$confirm(
        "<strong><p>1.万息招聘守册万息招聘守册万息招聘守册万息招聘守册</p> <p>2.万息招聘守册万息招聘守册万息招聘守册万息招聘守册</p></strong>",
        "万息招聘守册",
        {
          dangerouslyUseHTMLString: true,
          confirmButtonText: "我已阅读",
          cancelButtonText: "取消",
          center: true,
        }
      ).then(() => {
        this.btnIsdisabled = false;
        this.readChecked = true;
      });
    },
    // 提交表单
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          // axios请求
          registerPost(this.recruitPostForm).then((result) => {
            console.log(result);
          });

          if (this.readChecked == false) {
            this.$message.error("请阅读手册");
          } else {
            // axios请求
            // postCode(this.formData).then((result) => {});
            this.$notify({
              title: "成功",
              message: "发布成功，Boss大人，希望您能找到满意的职员！",
              type: "success",
              duration: 1500,
            });
          }
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
      this.$router.push("/registerHr");
    },
  },
};
</script>
<style scoped>
::v-deep .ctrl_sd {
  background-color: rgb(83, 202, 195);
}
::v-deep .second {
  background-color: rgb(83, 202, 195);
}
::v-deep .text_right {
  color: rgb(83, 202, 195);
}

/* 用户头像 */
.userBox {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}
.userImg {
  width: 50px;
  height: 50px;
  border-radius: 100%;
  box-sizing: border-box;
  border: 1px dashed #fff;
  margin-left: 20px;
}
.userImg > img {
  margin: -1px 0 0 -1px;
  width: 50px;
  height: 50px;
  border-radius: 100%;
  object-fit: cover;
}
/* 先写的表单右边的样式 */
.formRight {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.formRight > img {
  width: 200px;
  height: 200px;
  background-color: skyblue;
  margin-bottom: 20px;
}
.formRight > p {
  font-size: 14px;
  color: #999;
  text-align: center;
}
.form_title_box {
  position: relative;
  margin-bottom: 20px;
}
.form_title {
  font-size: 20px;
  margin-bottom: 10px;
}
.form_suggest {
  font-size: 14px;
}
::v-deep .form_left {
  padding-left: 100px;
}
.form_step {
  font-family: "微软雅黑";
  position: absolute;
  top: -10px;
  left: -45px;
  font-size: 50px;
  color: rgb(83, 202, 195);
}
.test_downline {
  text-decoration: underline;
}
.flex {
  display: flex;
}
/* 公司名称盒子 */
.comName_box {
  align-items: center;
  margin-bottom: 20px;
}
.comName_title {
  width: 120px;
  font-size: 14px;
  line-height: 40px;
}
.comName_title > p {
  letter-spacing: 2px;
}
.comName_title > span {
  color: #f56c6c;
  margin-right: 6px;
}
.red {
  font-size: 20px;
  color: #f56c6c;
}
.el-form-item >>> .el-form-item__error {
  top: -20px;
}

::v-deep .el-form-item__label {
  letter-spacing: 2px;
  text-align: left;
  width: 120px;
}
::v-deep .el-form-item__content {
  margin-right: 80px;
  flex: 1;
}
.el-form-item {
  display: flex;
  margin: 0 0 30px 0;
}
.read-item {
  margin-bottom: 20px;
}
.btn_box {
  text-align: center;
}
</style>