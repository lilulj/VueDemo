<template>
  <LoginAndRegister>
    <div slot="login-item-left">
      <div class="login-left-top displayflex">
        <p>领航</p>
        <div class="cursorpointer">
          <p class="login-fontSize">找工作</p>
          <p class="login-fontSize">我要跟老板谈谈</p>
        </div>
      </div>
      <div class="login-left-middle displayflex">
        <p class="icon"></p>
        <div>
          <h3>沟通</h3>
          <p class="login-fontSize-one">在线职位及时沟通</p>
        </div>
      </div>
      <div class="login-left-middle displayflex">
        <p class="icon icon-two"></p>
        <div>
          <h3>任性选</h3>
          <p class="login-fontSize-one">各大行业职位任你选</p>
        </div>
      </div>
    </div>
    <div slot="right" class="login-item-right">
      <h2>请上传您的简历</h2>
      <p>支持DOC、DOCX、PDF格式简历文件</p>
      <p class="orange">文件大小不超过8M</p>

      <el-upload
        class="upload-demo"
        ref="upload"
        action="http://192.168.0.131:10086/file/uploadFile"
        :on-remove="onremove"
        :auto-upload="false"
        :on-change="handle"
        :limit="1"
        :before-remove="beforeRemove"
      >
        <div class="btn">
          <el-button slot="trigger" type="primary">上传简历</el-button>
          <el-button
            style="margin-left: 10px;"
            type="success"
            @click="submitUpload"
            icon="el-icon-upload2"
            v-show="resume"
          >导入</el-button>
        </div>
      </el-upload>

      <el-button class="write">
        <span class="p_ft">没有附件简历</span>
        <span class="p_sd">在线填写</span>
      </el-button>
    </div>
  </LoginAndRegister>
</template>

<script>
import LoginAndRegister from "components/content/LoginAndRegister";
export default {
  name: "",
  data() {
    return {
      resume: null,
    };
  },
  components: {
    LoginAndRegister,
  },
  methods: {
    // 提交
    submitUpload() {
      this.$refs.upload.submit();
    },

    // //  钩子 在移除之前 ok
    beforeRemove(file, fileList) {
      console.log(file, fileList);
      return this.$confirm(`确定移除 ${file.name}？`);
    },
    // 钩子 确定移除 ok
    onremove() {
      this.resume = null;
    },
    // 钩子 提交 ok
    handle(file) {
      console.log(file);
      this.resume = file;
      let isDOC = file.name.includes(".doc") || file.name.includes(".docx");
      let isPDF = file.raw.type === "application/pdf";
      const isLt8M = file.size / 1024 / 1024 < 8;
      if (!isDOC && !isPDF) {
        this.$message.error("上传头像图片只能是 DOC/DOCX/PDF 格式!");
      } else {
        if (!isLt8M) {
          this.$message.error("上传头像图片大小不能超过 8MB!");
        } else if (file.status == "success") {
          this.$message.success("上传成功！");
          //路由跳转
        }
      }
    },
  },
};
</script>
<style scoped>
.login-item-right {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 68px;
}
h2 {
  font-weight: normal;
  margin-bottom: 30px;
}
p {
  font-size: 14px;
}
.orange {
  color: #fc703e;
  margin-bottom: 45px;
}

::v-deep .el-button + .el-button {
  margin-left: 0;
}
.p_ft {
  color: #8d92a1;
  margin-right: 5px;
}
.p_sd {
  color: rgb(83, 202, 195);
}
.write {
  width: 100%;
  margin-top: 20px;
}
::v-deep .el-upload {
  width: 100%;
}
.btn {
  display: flex;
  justify-content: center;
}
</style>