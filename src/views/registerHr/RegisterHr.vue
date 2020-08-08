<template>
  <RegisterHrModule>
    <!-- 头部左边插槽 -->

    <div slot="head_left">
      <div class="title">
        <!-- 标题 -->

        <span class="title_W">万息招聘</span>
        <span class="line">|</span>
        <span class="intro">企业版</span>
      </div>
    </div>

    <!-- 头部右边插槽 -->

    <div slot="head_right">
      <!-- 用户电话 用户头像 -->

      <div class="userBox">
        <div class="user">
          <span>123</span>
          <span>****</span>
          <span>6789</span>
        </div>
        <div class="userImg">
          <img :src="headP" alt />
        </div>
      </div>
    </div>

    <!--表单插槽 -->

    <!-- 表单左插槽 -->

    <div slot="form_left">
      <el-form :model="hrForm" :rules="rules" ref="hrForm" enctype="multipart/form-data">
        <!-- 头像* -->

        <el-form-item label="头像：" prop="file" class="via">
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
            <img v-if="headP" :src="headP" class="avatar" />
            <i v-else class="el-icon-plus avatar-uploader-icon">
              头像
              <br />必填
            </i>
          </el-upload>
        </el-form-item>

        <!-- 姓名* -->

        <el-form-item label="姓名：" prop="recruiterName">
          <el-input v-model="hrForm.recruiterName" placeholder="请输入您的姓名" clearable></el-input>
        </el-form-item>

        <!-- 我的公司* -->

        <el-form-item label="我的公司：" prop="recruiterCompany">
          <el-input v-model="hrForm.recruiterCompany" placeholder="您当前就职的公司" clearable></el-input>
        </el-form-item>

        <!-- 我的职位*-->

        <el-form-item label="我的职位：" prop="recruiterPost">
          <el-input v-model="hrForm.recruiterPost" placeholder="您在公司担任的职位" clearable></el-input>
        </el-form-item>
        <!-- 我的邮箱* -->
        <el-form-item label="我的邮箱：" prop="recruiterEmail">
          <el-input v-model="hrForm.recruiterEmail" placeholder="用于接收牛人简历，建议填写公司邮箱" clearable></el-input>
        </el-form-item>

        <!-- 保存按钮 -->

        <el-form-item class="button">
          <el-button type="primary" @click="submitForm('hrForm')">保存 去发布一个职位</el-button>
          <el-button @click="resetForm('hrForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </div>

    <!-- 表单右插槽 -->

    <div class="formRight" slot="form_right">
      <img src alt />
      <p>完善资料,让更多人牛人知道</p>
    </div>
  </RegisterHrModule>
</template>

<script>
import RegisterHrModule from "components/content/RegisterHrModule";
import { registerRecruiter } from "network/registerHr";

export default {
  name: "RegisterHr",
  data() {
    return {
      headP: null, //头像本地地址
      hrForm: {
        file: null, //头像的文档流
        recruiterName: "", //招聘者名字
        recruiterCompany: "", //招聘者公司
        recruiterPost: "", //招聘者公司职位
        recruiterEmail: "", //招聘者邮箱
        hrId: this.$store.state.hrId, //hr的唯一标识
      },
      // 判断规则
      rules: {
        //上传的文档
        file: [
          {
            type: "object",
            required: true,
            message: "请上传头像",
            trigger: "change",
          },
        ],
        // 招聘者姓名
        recruiterName: [
          {
            pattern: /^[\u4E00-\u9FA5\uf900-\ufa2d·s]{2,20}$/,
            message: "用户名格式不正确",
            trigger: "blur",
          },
          { required: true, message: "请输入您的姓名", trigger: "change" },
        ],
        // 招聘者公司
        recruiterCompany: [
          { required: true, message: "请输入您的公司", trigger: "change" },
        ],
        // 招聘者公司职位
        recruiterPost: [
          {
            required: true,
            message: "请输入您在公司的职位",
            trigger: "change",
          },
        ],
        // 招聘者邮箱
        recruiterEmail: [
          {
            pattern: /^([a-zA-Z\d])(\w|\-)+@[a-zA-Z\d]+\.[a-zA-Z]{2,4}$/,
            message: "邮箱格式不正确",
            trigger: "blur",
          },

          {
            required: true,
            message: "请输入您的或者您公司的邮箱",
            trigger: "change",
          },
        ],
      },
    };
  },
  components: {
    RegisterHrModule,
  },
  mounted() {},
  methods: {
    // 提交头像
    handleAvatarSuccess(res, file) {
      console.log(file);
      this.hrForm.file = file;
      this.headP = URL.createObjectURL(file.raw);
      console.log(this.hrForm.file);
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
    //下一步按钮
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          // axios请求
          let formData = new FormData();
          formData.append("hrName", this.hrForm.recruiterName);
          formData.append("hrPic", this.hrForm.file.raw);
          formData.append("entName", this.hrForm.recruiterCompany);
          formData.append("hrJobName", this.hrForm.recruiterPost);
          formData.append("hrEmail", this.hrForm.recruiterEmail);
          formData.append("hrId", parseInt(this.hrForm.hrId));
          registerRecruiter(formData).then((result) => {
            console.log(result);
          });
          //传本地头像链接和公司名字
          this.$message({
            message: "快快发布您的职位需求吧，很多牛人正等着你呢，Boss大人！",
            type: "success",
            duration: 1500,
          });
          // 保存一些数据进入本地
          this.$store.state.companyName = this.hrForm.recruiterCompany;
          this.$store.state.userName = this.hrForm.recruiterName;
          this.$store.state.headPUrl = this.headP;
          // this.$router.push("/registerHrRecruitMsg");
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
        this.headP = "";
        this.$refs[formName].resetFields();
      });
    },
  },
};
</script>
<style scoped>
/*左边 标题盒子 */
.title {
  display: flex;
  height: 65px;
  justify-content: center;
  align-items: center;
  color: rgb(255, 255, 255);
  cursor: pointer;
}
/*右边 用户盒子 */
.user {
  display: flex;
  height: 65px;
  justify-content: center;
  align-items: center;
  color: rgb(255, 255, 255);
  cursor: pointer;
}
/* 标题项 */
.title_W {
  font-weight: bold;
  font-size: 26px;
  font-family: "微软雅黑";
}
.line {
  font-size: 30px;
  margin: 0 10px;
}
.intro {
  font-size: 18px;
}
/* 用户标签 */
.userBox {
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
}
/* 表单左插槽的样式 */
.el-form-item >>> .el-upload {
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
.el-form-item {
  display: flex;
  align-items: center;
  width: 600px;
  margin-bottom: 40px;
}
.el-form-item >>> .el-form-item__error {
  top: -20px;
}
/* 头像错误信息位置 */
.via >>> .el-form-item__error {
  margin-left: 15px;
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
.button {
  margin-top: 40px;
  text-align: right;
}
</style>