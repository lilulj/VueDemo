<template>
  <div class="relative">
    <!-- 添加按钮 绝对定位 -->
    <div class="addBtn">
      <a href="javascript:;" class="edit flex">
        <div class="el-icon-circle-plus-outline"></div>
        <div>添加</div>
      </a>
    </div>
    <!-- 内容区 -->
    <div class="exBox">
      <!-- 公司名称+工作时间+编辑+删除按钮 -->
      <div class="flex first">
        <div class="flex">
          <h4>公司名称{{}}</h4>
          <p class="date">实习工作日期{{}}</p>
        </div>
        <div class="flex">
          <a href="javascript:;" class="edit flex">
            <div class="el-icon-delete"></div>
            <div>删除</div>
          </a>
          <a href="javascript:;" class="edit flex">
            <div class="el-icon-edit-outline"></div>
            <div>编辑</div>
          </a>
        </div>
      </div>
      <!-- 实习部们 职位类型 -->
      <div class="second flex">
        <div class="hfour">部门{{}}</div>
        <el-divider direction="vertical" class="division"></el-divider>
        <div>职位{{}}</div>
        <div class="logo">实习</div>
      </div>
      <!-- 内容 -->
      <div class="third"></div>
      <!-- 业绩 -->
      <div class="fourth"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
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
</style>