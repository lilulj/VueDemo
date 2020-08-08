<template>
  <div class="relative">
    <!-- 个人信息 -->
    <div class="flex basic_innerbox" v-show="!isShow">
      <!-- 左边 -->
      <div>
        <div class="flex nameBox">
          <!-- 姓名 -->
          <h2>姓名{{ruleForm.name}}</h2>
          <!-- 性别 -->
          <span class="male el-icon-male" v-show="ruleForm.sex=='男'"></span>
          <span class="female el-icon-female" v-show="ruleForm.sex !='男'"></span>
        </div>
        <div class="flex basicBox">
          <!-- 基本信息 -->
          <div>
            <span class="el-icon-suitcase icon"></span>
            <span>20年应届生{{ruleForm.identity}}</span>
            <el-divider direction="vertical" class="division"></el-divider>
            <span class="el-icon-tickets icon"></span>
            <span>学历{{ruleForm.education}}</span>
            <el-divider direction="vertical" class="division"></el-divider>
            <span class="el-icon-user icon"></span>
            <span>求职状态{{ruleForm.jobStatus}}</span>
          </div>
          <!-- 手机 -->
          <div class="phoneBox">
            <span class="el-icon-mobile-phone icon"></span>
            <span>手机号{{ruleForm.phoneNum}}</span>
            <el-divider direction="vertical" class="division" v-if="ruleForm.weChatId!=''"></el-divider>
            <span class="el-icon-chat-dot-round icon" v-show="ruleForm.weChatId!=''"></span>
            <span v-show="ruleForm.weChatId!=''">微信号{{ruleForm.weChatId}}</span>
            <el-divider direction="vertical" class="division" v-if="ruleForm.eMaile!=''"></el-divider>
            <span class="el-icon-message icon" v-show="ruleForm.eMaile!=''"></span>
            <span v-show="ruleForm.eMaile!=''">邮箱号{{ruleForm.eMaile}}</span>
          </div>
        </div>
      </div>
      <!-- 右边 -->
      <div class="flex headBox">
        <!-- 头像 -->
        <div class="headP">
          <img src alt />
        </div>
        <!-- 编辑按钮 -->
        <a href="javascript:;" class="edit flex" @click="isShow=true">
          <div class="el-icon-edit-outline"></div>
          <div>编辑</div>
        </a>
      </div>
    </div>
    <!-- 编辑个人信息 -->
    <div class="editBox" v-show="isShow">
      <h3>编辑个人信息</h3>
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm">
        <!-- 第一列 -->
        <el-row>
          <el-col :span="12" class="padding">
            <!-- 用户姓名 -->
            <el-form-item label="用户姓名" prop="name">
              <el-input v-model="ruleForm.name"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12" class="padding">
            <!-- 当前求职状态 -->
            <el-form-item label="当前求职状态" prop="jobStatus">
              <el-col :span="24">
                <el-select v-model="ruleForm.jobStatus" placeholder="当前求职状态">
                  <el-option
                    :label="ruleForm.identity =='学生'?'在校-月内到岗':'在职-月内到岗'"
                    :value="ruleForm.identity =='学生'?'在校-月内到岗':'在职-月内到岗'"
                  ></el-option>
                  <el-option
                    :label="ruleForm.identity =='学生'?'离校-随时到岗':'离职-随时到岗'"
                    :value="ruleForm.identity =='学生'?'离校-随时到岗':'离职-随时到岗'"
                  ></el-option>
                  <el-option
                    :label="ruleForm.identity =='学生'?'在校-考虑机会':'在职-考虑机会'"
                    :value="ruleForm.identity =='学生'?'在校-考虑机会':'在职-考虑机会'"
                  ></el-option>
                  <el-option
                    :label="ruleForm.identity =='学生'?'在校-暂不考虑':'在职-暂不考虑'"
                    :value="ruleForm.identity =='学生'?'在校-暂不考虑':'在职-暂不考虑'"
                  ></el-option>
                </el-select>
              </el-col>
            </el-form-item>
          </el-col>
        </el-row>
        <!-- 第二列 -->
        <el-row>
          <el-col :span="12" class="padding">
            <!-- 性别 -->
            <el-form-item label="性别" prop="sex">
              <el-tooltip
                class="item"
                effect="light"
                :visible-arrow="false"
                content="实名认证后性别不可更改"
                placement="bottom"
              >
                <el-radio-group v-model="ruleForm.sex">
                  <el-row :gutter="20">
                    <el-col :span="12">
                      <el-radio-button label="男" :disabled="ruleForm.sex !='男'"></el-radio-button>
                    </el-col>
                    <el-col :span="12">
                      <el-radio-button label="女" :disabled="ruleForm.sex !='女'"></el-radio-button>
                    </el-col>
                  </el-row>
                </el-radio-group>
              </el-tooltip>
            </el-form-item>
          </el-col>
          <el-col :span="12" class="padding">
            <!-- 我的牛人身份 -->
            <el-form-item label="我的牛人身份" prop="identity">
              <el-tooltip
                class="item"
                effect="light"
                content="您的牛人身份需要在APP上修改"
                :visible-arrow="false"
                placement="bottom"
              >
                <el-select v-model="ruleForm.identity" disabled placeholder="请选择您的身份">
                  <el-option label="学生" value="学生"></el-option>
                  <el-option label="职场人" value="职场人"></el-option>
                </el-select>
              </el-tooltip>
            </el-form-item>
          </el-col>
        </el-row>
        <!-- 第三列 -->
        <el-row>
          <el-col :span="12" class="padding">
            <el-tooltip
              class="item"
              effect="light"
              content="实名认证后身份不可更改"
              :visible-arrow="false"
              placement="bottom"
            >
              <!-- 生日 -->
              <el-form-item label="生日" prop="birthDate">
                <el-date-picker
                  v-model="ruleForm.birthDate"
                  type="date"
                  placeholder="选择日期"
                  disabled
                  prefix-icon="null"
                ></el-date-picker>
              </el-form-item>
            </el-tooltip>
          </el-col>
          <el-col :span="12" class="padding">
            <!-- 微信号 -->
            <el-form-item label="微信号(选填)" prop="weChatId">
              <el-input v-model="ruleForm.weChatId"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12" class="padding">
            <!-- 电话号码 -->
            <el-form-item label="电话" prop="phoneNum">
              <el-tooltip
                class="item"
                effect="light"
                content="电话号码为您的登录用户名如果需要修改请在个人设置中修改"
                :visible-arrow="false"
                placement="bottom"
              >
                <el-input v-model="ruleForm.phoneNum" disabled></el-input>
              </el-tooltip>
            </el-form-item>
          </el-col>
          <el-col :span="12" class="padding">
            <!-- 邮箱 -->
            <el-form-item label="邮箱(选填)" prop="eMaile">
              <el-input v-model="ruleForm.eMaile"></el-input>
            </el-form-item>
          </el-col>
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
export default {
  name: "",
  data() {
    return {
      ruleForm: {
        name: "", //姓名
        sex: "男", //性别
        identity: "学生", //身份
        birthDate: "1999-01-01", //生日
        education: "", //学历
        jobStatus: "", //求职状态
        phoneNum: "", //手机
        weChatId: "", //微信
        eMaile: "", //邮箱
      },
      isLoading: false, //加载
      isShow: false, //2个大盒子的切换
      rules: {
        // phoneNum: [
        //   {
        //     pattern: /^1[3456789]\d{9}$/,
        //     message: "电话格式不正确",
        //     trigger: "blur",
        //   },
        // ],
        eMaile: [
          {
            pattern: /^([a-zA-Z\d])(\w|\-)+@[a-zA-Z\d]+\.[a-zA-Z]{2,4}$/,
            message: "邮箱格式不正确",
            trigger: "blur",
          },
        ],
      },
    };
  },
  mounted() {
    // axios请求
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
<style scoped lang="less">
.flex {
  display: flex;
}
.relative {
  position: relative;
}
h2 {
  font-size: 24px;
  font-weight: 400;
}
.nameBox {
  align-items: center;
  margin-bottom: 20px;
}
.male {
  display: inline-block;
  font-size: 16px;
  color: #fff;
  background-color: rgb(75, 161, 241);
  border-radius: 100%;
  width: 22px;
  height: 22px;
  text-align: center;
  line-height: 22px;
  margin-left: 5px;
}
.female {
  display: inline-block;
  font-size: 16px;
  color: #fff;
  background-color: #ffc0cb;
  border-radius: 100%;
  width: 22px;
  height: 22px;
  text-align: center;
  line-height: 22px;
  margin-left: 5px;
}
.division {
  margin: 0 26px;
}
.basicBox {
  font-size: 14px;
  flex-direction: column;
}
.icon {
  color: #9fa3b0;
  margin-right: 5px;
}
.basic_innerbox {
  justify-content: space-between;
  align-items: stretch;
}
.headP > img {
  display: inline-block;
  width: 70px;
  height: 70px;
  object-fit: cover;
  border-radius: 100%;
  background-color: #f00;
}
.phoneBox {
  margin-top: 5px;
}
.headBox {
  flex-direction: column;
  align-items: flex-end;
}
.edit {
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
.pop {
  border-radius: 0;
}
.el-select {
  width: 100%;
}
@padding: 0 30px;
.padding {
  padding: @padding;
}
.el-form-item {
  display: flex;
  flex-direction: column;
}
::v-deep .el-form-item__label {
  text-align: left;
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
::v-deep .el-date-editor {
  width: 100%;
}
.textRight {
  text-align: right;
}
</style>
