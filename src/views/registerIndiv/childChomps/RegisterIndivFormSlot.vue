<template>
  <!-- 这是用户基本信息的模板-->
  <!-- 标题 -->
  <div class="base-infor">
    <slot name="headH">
      <h1>基本信息</h1>
    </slot>

    <slot name="headP">
      <p>完善基本信息后会有很多对你感兴趣的boss</p>
    </slot>

    <!-- 表单信息录入 ！！！！！！！！！！！！！！！！-->

    <slot name="form">
      <el-form
        :model="formData"
        :rules="rules"
        ref="formData"
        label-width="80px"
        enctype="multipart/form-data"
      >
        <!-- 姓名* -->

        <el-form-item label="姓名" prop="usename">
          <el-input v-model="formData.usename" placeholder="请输入您的姓名" clearable></el-input>
        </el-form-item>

        <!-- 性别*-->

        <el-form-item label="性别" prop="sex">
          <el-radio-group v-model="formData.sex">
            <el-radio-button label="0">男</el-radio-button>
            <el-radio-button label="1">女</el-radio-button>
          </el-radio-group>
        </el-form-item>

        <!-- 求职身份* -->

        <el-form-item label="求职身份" prop="occupation">
          <el-radio-group v-model="formData.occupation">
            <div @click="worker" class="el-radio-button-box">
              <el-radio-button label="职场人">
                职场人
                <span>有正式工作经验</span>
              </el-radio-button>
            </div>
            <div @click="student" class="el-radio-button-box">
              >
              <el-radio-button label="学生">
                学生
                <span>在校/应届/往届</span>
              </el-radio-button>
            </div>
          </el-radio-group>
        </el-form-item>

        <!-- 出生年月* -->

        <el-form-item label="出生日期" prop="birthDate">
          <el-col>
            <el-date-picker
              type="date"
              placeholder="选择出生日期"
              v-model="formData.birthDate"
              style="width: 100%;"
              clearable
              :picker-options="pickerOptions0"
              default-value="2001-06-01"
            ></el-date-picker>
          </el-col>
        </el-form-item>

        <!-- 工作日期* 在选择职场人的时候出现 -->

        <el-form-item label="工作日期" prop="workDate" v-if="isdateWork">
          <el-col>
            <el-date-picker
              type="date"
              placeholder="参加工作时间"
              v-model="formData.workDate"
              style="width: 100%;"
              :picker-options="pickerOptions1"
            ></el-date-picker>
          </el-col>
        </el-form-item>

        <!-- 求职状态 -->
        <!-- 在职人版* -->

        <div @click="workerStatusClick">
          <el-form-item label="求职状态" prop="workerStatus" v-if="isworkerStatus">
            <el-radio-group v-model="formData.workerStatus" class="status-display">
              <el-radio-button label="离职-随时到岗" name="workerStatus">离职-随时到岗</el-radio-button>
              <el-radio-button label="在职-月内到岗" name="workerStatus">在职-月内到岗</el-radio-button>
              <el-radio-button label="在职-考虑机会" name="workerStatus">在职-考虑机会</el-radio-button>
              <el-radio-button label="在职-暂不考虑" name="workerStatus">在职-暂不考虑</el-radio-button>
            </el-radio-group>
          </el-form-item>
        </div>

        <!-- 学生版 -->
        <!-- 求职状态* -->
        <div @click="studentStatusClick">
          <el-form-item
            label="求职状态"
            prop="studentStatus"
            v-if="isstudentStatus"
            @click="studentStatusClick"
          >
            <el-radio-group v-model="formData.studentStatus" class="status-display">
              <el-radio-button label="离校-随时到岗" name="studentStatus">离校-随时到岗</el-radio-button>
              <el-radio-button label="在校-月内到岗" name="studentStatus">在校-月内到岗</el-radio-button>
              <el-radio-button label="在校-考虑机会" name="studentStatus">在校-考虑机会</el-radio-button>
              <el-radio-button label="在校-暂不考虑" name="studentStatus">在校-暂不考虑</el-radio-button>
            </el-radio-group>
          </el-form-item>
        </div>

        <!-- 用户头像* -->

        <el-form-item class="via" prop="file">
          <el-upload
            class="avatar-uploader"
            action
            accept=".jpg, .jpeg, .png"
            :on-success="handleAvatarSuccess"
            :before-upload="beforeAvatarUpload"
            :http-request="submitUpload"
            :show-file-list="false"
          >
            <i class="el-icon-plus avatar-uploader-icon"></i>

            <img v-if="formData.headPh" :src="formData.headPh" class="avatar" />
            <i v-else class="el-icon-plus avatar-uploader-icon">
              头像
              <br />必填
            </i>
          </el-upload>
        </el-form-item>

        <!--下一步按钮 -->

        <el-form-item>
          <el-button type="primary" @click="submitForm('formData')">下一步</el-button>
          <el-button @click="resetForm('formData')">重置</el-button>
        </el-form-item>
      </el-form>
    </slot>
  </div>
</template>

<script>
import { postCode } from "network/registerIndiv";
export default {
  name: "",
  data() {
    return {
      // 出生日期限制
      pickerOptions0: {
        disabledDate(time) {
          let eighteen = 18 * 365 * 24 * 60 * 60 * 1000;
          return time.getTime() > Date.now() - eighteen;
        },
      },
      //工作日期限制
      pickerOptions1: {
        disabledDate(time) {
          return time.getTime() > Date.now();
        },
      },
      // 基本信息表单
      formData: {
        usename: "", //用户姓名
        sex: null, //用户性别 传的是数字 0男 1女
        occupation: "", //求职身份
        birthDate: "", //出生日期
        workerStatus: "", //职场人的求职状态
        workDate: "", //工作日期
        studentStatus: "", //学生的求职状态
        headPh: "", //头像的本地地址
        file: null, //头像的文档流
      },
      // 一些小的性能优化 因为没有写 模板那种 所以需要做判断
      // 求职身份是否勾选职场人
      isworkerStatus: true,
      // 求职身份是否勾线学生
      isstudentStatus: false,
      // 工作日期是否显示
      isdateWork: true,
      // 规则
      rules: {
        usename: [
          { required: true, message: "请输入姓名", trigger: "change" },
          {
            pattern: /^[\u4E00-\u9FA5\uf900-\ufa2d·s]{2,20}$/,
            message: "用户名格式不正确",
            trigger: "blur",
          },
        ],
        sex: [{ required: true, message: "请勾选性别", trigger: "change" }],
        occupation: [
          { required: true, message: "请勾选求职身份", trigger: "change" },
        ],
        birthDate: [
          { required: true, message: "请选择出生日期", trigger: "blur" },
        ],
        workDate: [
          { required: true, message: "请选择工作日期", trigger: "change" },
        ],
        workerStatus: [
          { required: true, message: "请勾选求职状态", trigger: "change" },
        ],
        studentStatus: [
          { required: true, message: "请勾选求职状态", trigger: "change" },
        ],
        //图片的！！！！
        file: [
          {
            type: "object",
            required: true,
            message: "请上传头像",
            trigger: "change",
          },
        ],
      },
    };
  },
  // 创建时
  mounted() {
    console.log(this.$store.state.user.userId);
    //vueX里面保存数据
  },
  methods: {
    //职场人点击
    worker() {
      this.isworkerStatus = true;
      this.isstudentStatus = false;
      this.isdateWork = true;
      this.formData.studentStatus = "";
      this.formData.birthDate = "";
    },
    //学生点击
    student() {
      this.isworkerStatus = false;
      this.isstudentStatus = true;
      this.isdateWork = false;
      this.formData.workerStatus = "";
      this.formData.workDate = "";
      this.formData.birthDate = "";
    },
    //如果跳过身份点击求职状态
    workerStatusClick() {
      this.formData.occupation = "职场人";
    },
    studentStatusClick() {
      this.formData.occupation = "学生";
    },
    //

    //下一步按钮
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          // axios请求
          //将 出生日期转变为时间戳
          let birthDate = new Date(
            this.formData.birthDate
          ).toLocaleDateString();
          let workDate = new Date(this.formData.workDate).toLocaleDateString();
          console.log(birthDate);
          let formData = new FormData();
          formData.append("username", this.formData.usename);
          formData.append("sex", parseInt(this.formData.sex));
          formData.append("occupation", this.formData.occupation);
          formData.append("workerStatus", this.formData.workerStatus);
          formData.append("birthDate", birthDate);
          formData.append("workDate", workDate);
          formData.append("studentStatus", this.formData.studentStatus);
          formData.append("headPh", this.formData.file.raw);
          formData.append("id", this.$store.state.user.userId);
          postCode(formData).then((result) => {
            console.log(result);
          });
          // 提示
          this.$message({
            message: "实习经历填写，如果是骚年的话可以选择跳过哦！",
            type: "success",
            duration: 1500,
          });
          // 保存一些数据进本地缓存
          this.$store.state.identify = this.formData.occupation;
          //路由
          this.$router.push("/registerIndivExInCom");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    //重置按钮
    resetForm(formName) {
      this.$confirm("<strong>您确定要重置所有信息吗？</strong>", "提醒", {
        dangerouslyUseHTMLString: true,
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        center: true,
      }).then(() => {
        this.formData.headPh = "";
        this.$refs[formName].resetFields();
      });
    },
    // 提交头像
    handleAvatarSuccess(res, file) {
      console.log(file);
      this.formData.file = file;
      this.formData.headPh = URL.createObjectURL(file.raw);
      console.log(this.formData.headPh);
    },
    async submitUpload(content) {
      // try {
      //   // const logoForm = new FormData();
      //   // logoForm.append("media", content.file);
      //   // const res = await uploadMedia(logoForm);
      //   // 把接口返回的对象形式的数据转换成element ui的对象格式
      //   // this.fileList = elementFilelist(this.fileList, res);
      //   // 这里的url是自己获取后台地址拼接起来的图片地址
      //   // this.imageUrl = this.fileList[0].url;
      //   // this.form.diseaseImage = this.form.diseaseImage || {};
      //   // this.form.diseaseImage.id = res.id;
      //   // this.delIconShow = true;
      // } catch (e) {
      //   this.$message.warning("报错了");
      // }
    },
    // 提交之前的判断 图片类型 大小
    beforeAvatarUpload(file) {
      console.log(1);
      const isJPG = file.type === "image/jpeg";
      const isLt2M = file.size / 1024 / 1024 < 2;
      if (!isJPG) {
        this.$message.error("上传头像图片只能是 JPG 格式!");
      }
      if (!isLt2M) {
        this.$message.error("上传头像图片大小不能超过 2MB!");
      }
      return isJPG && isLt2M;
    },
  },
};
</script>
<style scoped>
/* 信息录入 */
.base-infor {
  height: 700px;
  background-color: #fff;
  border-radius: 10px;
  position: relative;
  padding-left: 60px;
  padding-top: 40px;
}
h1 {
  font-weight: normal;
  margin: 0 0 10px 0;
}
.base-infor > p {
  color: #999;
  margin-bottom: 30px;
}
/* 输入框 */
.el-form-item {
  width: 600px;
}
.el-input {
  border-radius: 4px;
  font-size: 16px;
  position: relative;
}
::v-deep .el-input__inner {
  padding-left: 15px;
}

::v-deep .el-form-item__label {
  text-align: left;
}
::v-deep .el-icon-date:before {
  position: absolute;
  left: 470px;
}
/* 单选框的一些css  乱的一批 */
/* 单独为了写click事件加了一层 */
.el-radio-button-box {
  width: 50%;
  flex-grow: 1;
  margin-right: 10px;
  border-radius: 5px;
}

.el-radio-button-box > .el-radio-button {
  width: 100%;
}
.el-radio-button-box:nth-child(2) {
  margin-right: 0;
}
.el-radio-button {
  flex-grow: 1;
  width: 50%;
  margin-right: 10px;
  border-radius: 5px;
}
.el-radio-button:nth-child(2n) {
  margin-right: 0;
}
::v-deep .el-radio-button__inner {
  width: 100%;
  background: none;
  border: 1px solid #dcdfe6 !important;
  border-radius: 0 !important;
  font-size: 16px;
}

::v-deep .el-radio-button__inner:hover {
  color: #606266;
}
.el-radio-group {
  display: flex;
  justify-content: space-between;
}
::v-deep .el-radio-button__orig-radio:checked + .el-radio-button__inner {
  color: #606266;
  background-color: rgba(93, 213, 200, 0.3);
  box-shadow: none;
}
.el-radio-group > .el-radio-button {
  flex-grow: 1;
  width: 50%;
  border-radius: 0;
}
.el-radio-group > .el-button:focus {
  color: #606266;
  background-color: rgba(93, 213, 200, 0.2) !important;
}
.el-radio-group > .el-button:hover {
  border: 1px solid #dcdfe6;
  color: #606266;
  background: none;
}

.el-radio-button__inner > span {
  color: rgba(0, 0, 0, 0.3);
  font-size: 14px;
}
.status-display {
  flex-wrap: wrap;
}
.status-display > .el-radio-button {
  flex-grow: 1;
  width: 49%;
  margin-bottom: 20px;
}
/* 头像 */
.via {
  width: 200px;
  position: absolute;
  top: 100px;
  right: 100px;
  text-align: center;
}
/* 头像错误信息位置 */
.via ::v-deep .el-form-item__error {
  position: relative;
  top: -140px !important;
}

::v-deep .el-upload {
  border-radius: 100%;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  border: 1px dashed rgb(83, 202, 195);
  height: 100px;
  width: 100px;
}

.avatar-uploader-icon {
  font-size: 16px;
  color: #8c939d;
  height: 100px;
  width: 100px;
  top: 0;
  left: 0;
  margin-top: 20px;
  position: absolute;
  line-height: 30px;
}
.avatar {
  width: 100px;
  height: 100px;
  object-fit: cover;
  display: block;
}
.el-icon-plus:before {
  content: "";
}
::v-deep .el-form-item__error {
  top: -20px;
}
</style>
