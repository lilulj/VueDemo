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
          <h4>公司名称{{}}</h4>
          <p class="date">实习工作日期{{}}</p>
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
      <!-- 实习部们 职位类型 -->
      <div class="second flex">
        <div class="hfour">部门(选填){{}}</div>
        <el-divider direction="vertical" class="division"></el-divider>
        <div class="hfour">职位{{}}</div>
        <div class="logo">实习</div>
      </div>
      <!-- 内容 -->
      <div class="third flex">
        <div>内容：</div>
        <p>内容{{}}</p>
      </div>
      <!-- 业绩 -->
      <div class="fourth flex">
        <div>业绩：</div>
        <p>业绩{{}}</p>
      </div>
      <!-- 技能标签 -->
      <div class="fiveth flex">
        <div class="skillIitem">java{{}}</div>
        <div class="skillIitem">java{{}}</div>
      </div>
    </div>
    <!-- 编辑盒子 -->
    <div class="editBox" v-show="isEdit">
      <h3>编辑实习经历</h3>
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm">
        <!-- 第一列 -->
        <el-row>
          <!-- 公司名称 -->
          <el-col :span="12" class="padding">
            <el-form-item label="公司名称" prop="companyName">
              <el-input v-model="ruleForm.companyName" placeholder="例如：成都万息科技"></el-input>
            </el-form-item>
          </el-col>
          <!-- 所属行业 -->
          <el-col :span="12" class="padding">
            <el-form-item label="所属行业" prop="trade">
              <el-input v-model="ruleForm.trade" class="选择所属行业"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <!-- 第二列 -->
        <el-row>
          <!-- 所属部门（选填） -->
          <el-col :span="12" class="padding">
            <el-form-item label="所属部门(选填)" prop="section">
              <el-input v-model="ruleForm.section" placeholder="例如：产品部"></el-input>
            </el-form-item>
          </el-col>
          <!-- 职位名称(选填) -->
          <el-col :span="12" class="padding">
            <el-form-item label="职位名称(选填)" prop="postName">
              <el-input v-model="ruleForm.postName" placeholder="例如：前端设计师"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <!-- 第三列 -->
        <el-row>
          <!-- 职位类型 -->
          <el-col :span="12" class="padding">
            <el-form-item label="职位类型" prop="postType">
              <el-input v-model="ruleForm.postType" placeholder="选择职位类型"></el-input>
            </el-form-item>
          </el-col>
          <!-- 在职时间 -->
          <el-col :span="12" class="padding">
            <el-form-item label="在职时间" prop="jobTime">
              <el-date-picker
                v-model="ruleForm.jobTime"
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
          <!-- 技能标签 -->
          <el-col :span="24" class="padding">
            <el-form-item label="技能标签" prop="skillLabel">
              <el-select v-model="ruleForm.skillLabel" placeholder="请选择" multiple>
                <el-option
                  v-for="item in skillOptions"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                >
                  <span style="float: left">{{ item.label }}</span>
                </el-option>
              </el-select>
            </el-form-item>
          </el-col>
        </el-row>
        <!-- 第五列 -->
        <el-row>
          <!-- 工作内容 -->
          <el-col :span="24" class="padding">
            <el-form-item label="工作内容" prop="jobContent">
              <el-input
                type="textarea"
                v-model="ruleForm.jobContent"
                maxlength="1600"
                :autosize="{ minRows: 6, maxRows: 8}"
                show-word-limit
                placeholder="请输入工作内容"
              ></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <!-- 第六列 -->
        <el-row>
          <!-- 业绩（选填） -->
          <el-col :span="24" class="padding">
            <el-form-item label="工作业绩(选填)" prop="jobPerformance">
              <el-input
                type="textarea"
                v-model="ruleForm.jobPerformance"
                maxlength="300"
                :autosize="{ minRows: 6, maxRows: 8}"
                show-word-limit
                placeholder="请输入工作业绩"
              ></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <!-- 第七列 -->
        <el-row>
          <el-col :span="24" class="padding">
            <el-form-item label prop>
              <el-checkbox-group v-model="ruleForm.isInternshipExChecked">
                <el-checkbox label="本段经历是实习经历" name="ex"></el-checkbox>
              </el-checkbox-group>
            </el-form-item>
          </el-col>
        </el-row>
        <!-- 第八列 -->
        <el-row>
          <el-col :span="24" class="padding">
            <el-form-item label prop>
              <el-checkbox-group v-model="ruleForm.isHidden">
                <el-checkbox label="对该公司隐藏简历" name="hiden"></el-checkbox>
              </el-checkbox-group>
            </el-form-item>
          </el-col>
        </el-row>
        <!-- 第九列 -->
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
      skillOptions: null, //技能选项
      ruleForm: {
        companyName: "", //公司名称
        trade: "", //所属行业
        section: "", //所属部门
        postName: "", //职位名称
        postType: "", //职位类型
        // startJobTime: null, //在职时间
        // endJobTime: null, //在职时间
        jobTime: null, //在职时间
        skillLabel: [], //技能标签
        jobContent: "", //工作内容
        jobPerformance: "", //工作业绩
        isInternshipExChecked: true, //是否是实习经历
        isHidden: true, //是否对该公司隐藏
      },
      rules: {
        companyName: [
          { required: true, message: "请输入公司姓名", trigger: "change" },
        ],
        trade: [
          { required: true, message: "请输入行业名称", trigger: "change" },
        ],
        postType: [
          { required: true, message: "请选择职位类型", trigger: "change" },
        ],
        jobTime: [
          {
            type: "date",
            required: true,
            message: "请选择日期",
            trigger: "change",
          },
        ],
        skillLabel: [
          {
            required: true,
            message: "请选择技能标签",
            trigger: "change",
          },
        ],
        jobContent: [
          { required: true, message: "请输入工作内容", trigger: "change" },
        ],
      },
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
/* 添加按钮 */
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
.logo {
  width: 44px;
  height: 20px;
  line-height: 20px;
  border-radius: 10px;
  border: 1px solid #3a98fc;
  margin-left: 20px;
  font-size: 12px;
  font-weight: 500;
  color: #3a98fc;
  display: inline-block;
  text-align: center;
}
.second {
  align-items: center;
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
.fourth {
  font-size: 14px;
  padding: 7px 0;
  color: #61687c;
  white-space: pre-wrap;
  overflow: hidden;
  word-break: break-all;
}
.fourth > div:first-child {
  font-weight: 700;
}
.skillIitem {
  display: inline-block;
  font-size: 12px;
  line-height: 20px;
  color: #9fa3b0;
  padding: 0 14px;
  margin-right: 10px;
  border: 1px solid #cfd1d7;
  border-radius: 50px;
}
.editBox {
  padding: 20px 30px;
  margin: 0 -30px;
  background-color: #f8f9fb;
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
.el-date-editor {
  width: 100%;
}
.el-date-editor ::v-deep .el-range-separator {
  padding: 0;
}
.textRight {
  text-align: right;
}
.second {
  align-items: center;
}
</style>