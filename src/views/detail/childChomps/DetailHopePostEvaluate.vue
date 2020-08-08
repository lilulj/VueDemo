<template>
  <div class="evaluateBox">
    <div class="wrap">
      <h2>请您为本次搜索打分</h2>
      <div class="evaluateInnerBox">
        <!-- 评分 -->
        <el-rate
          v-model="evaluate"
          show-text
          :colors="colors"
          :texts="['极差', '失望', '一般', '满意', '非常满意']"
        />
        <!-- 反馈意见 -->
        <el-input
          type="textarea"
          :rows="3"
          placeholder="请输入您的建议，我们会及时反馈您的宝贵意见..."
          v-model="feedback"
        />
        <!-- 提交按钮 -->
        <el-button :type="evaluate != 0 ? 'primary':'info'" :disabled="evaluate==0">提交</el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      evaluate: 0, //评价登记 1-5
      colors: ["#99A9BF", "#F7BA2A", "rgb(83, 202, 195)"], //3级评价 颜色转变
      feedback: "",
    };
  },
};
</script>
<style scoped>
::v-deep .el-rate__icon {
  font-size: 30px;
}
::v-deep .el-rate {
  height: 30px;
  width: 240px;
}
.evaluateBox {
  margin-top: 20px;
  background-color: #fff;
}
.wrap {
  padding: 20px;
}
h2 {
  color: #414a60;
  font-size: 15px;
}
.evaluateInnerBox {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.el-textarea {
  width: 450px;
}
.el-button {
  width: 100px;
  border-radius: 0;
}
</style>