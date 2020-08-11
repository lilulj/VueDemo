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
      <div class="flex first">
        <div class="flex">
          <p class="label">英语四级</p>
        </div>
        <div class="flex">
          <!-- 编辑 -->
          <a href="javascript:;" class="edit flex" @click.stop="isEdit=true">
            <div class="el-icon-edit-outline"></div>
            <div>编辑</div>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      isEdit: false, //切换
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
.edit {
  font-size: 14px;
  color: #00c2b3;
  align-items: center;
  padding: 0 5px;
}
.addBtn {
  top: -36px;
  right: 0;
  position: absolute;
}
a:hover {
  opacity: 0.5;
}
a:focus {
  outline: none;
}
.el-icon-circle-plus-outline,
.el-icon-delete,
.el-icon-edit-outline {
  margin-right: 5px;
}
.exBox {
  padding: 8px 0 8px 15px;
}
.exBox:hover {
  background-color: #f2f5f9;
  cursor: pointer;
  transition: all 0.15s linear;
}
.first {
  justify-content: space-between;
  padding: 7px 0;
}
.label {
  display: inline-block;
  font-size: 12px;
  font-weight: 400;
  color: #61687c;
  white-space: nowrap;
  height: 23px;
  line-height: 22px;
  border-radius: 2px;
  border: 1px solid #d0d1d6;
  padding: 0 10px;
  margin: 5px 10px 5px 0;
  overflow: hidden;
  vertical-align: top;
  position: relative;
}
</style>