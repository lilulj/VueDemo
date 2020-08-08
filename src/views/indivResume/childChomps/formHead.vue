<template>
  <div class="flex">
    <!-- 最后更新时间 -->
    <p class="updatetime">
      最后更新
      <span>{{}}</span>
    </p>
    <!-- 预览简历按钮 -->
    <p class="btn">
      <a href="javascript:;">预览简历</a>
    </p>
  </div>
</template>

<script>
export default {
  name: "",
};
</script>
<style scoped>
.flex {
  display: flex;
  justify-content: space-between;
}
.updatetime {
  font-size: 12px;
  color: #9fa3b0;
}
.btn {
  color: #414a60;
  font-size: 14px;
}
a:hover {
  color: #5dd5c8;
}
a:focus {
  outline: none;
}
</style>