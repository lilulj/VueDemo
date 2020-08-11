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
    <!-- 项目名称 -->
    <div class="exBox" v-show="!isEdit" @click="isEdit=true">
      <!-- 项目名称+时间+编辑+删除按钮 -->
      <div class="flex first">
        <div class="flex">
          <h4>项目名称{{}}</h4>
          <p class="date">日期{{}}</p>
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
        <div class="hfour">服务时长{{}}</div>
      </div>
      <!-- 内容 -->
      <div class="third flex">
        <div>内容：</div>
        <p>内容{{}}</p>
      </div>
    </div>
    <!-- 编辑盒子 -->
    <div class="editBox" v-show="isEdit">
      <h3>编辑志愿者经历</h3>
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm">
        <!--  第一列 -->
        <el-row>
          <!-- 项目名称 -->
          <el-col :span="12" class="padding">
            <el-form-item label="项目名称" prop="itemName">
              <el-input v-model="ruleForm.itemName" placeholder="例如：成都万息科技"></el-input>
            </el-form-item>
          </el-col>
          <!-- 服务时长-->
          <el-col :span="12" class="padding">
            <el-form-item label="服务时长" prop="hours">
              <el-input v-model="ruleForm.hours" class="输入服务时长例如：12小时"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <!--  第二列 -->
        <el-row>
          <!-- 服务开始时间+结束时间 -->
          <el-col :span="24" class="padding">
            <el-form-item label="项目开始结束时间" prop="startEndTime">
              <el-date-picker
                v-model="ruleForm.startEndTime"
                type="monthrange"
                range-separator="至"
                start-placeholder="开始月份"
                end-placeholder="结束月份"
                value-format="yyyy-MM-dd"
              ></el-date-picker>
            </el-form-item>
          </el-col>
        </el-row>
        <!--  第三列 -->
        <el-row>
          <!-- 项目经历 -->
          <el-col :span="24" class="padding">
            <el-form-item label="项目描述" prop="itemContent">
              <el-input
                type="textarea"
                v-model="ruleForm.itemContent"
                maxlength="1600"
                :autosize="{ minRows: 6, maxRows: 8}"
                show-word-limit
                placeholder="请输入项目内容"
              ></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <!--  第四列 -->
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
      ruleForm: {
        itemName: "", //项目名称
        hours: "", //服务时长
        startEndTime: "", //开始结束时间
        itemContent: "", //项目内容
      },
      rules: {},
    };
  },
};
</script>
<style scoped>
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
.textRight {
  text-align: right;
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
</style>