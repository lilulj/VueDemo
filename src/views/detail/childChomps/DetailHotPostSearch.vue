<template>
  <div class="searchBox">
    <div class="wrap">
      <!-- 搜索框 -->
      <div class="searchItem"></div>
      <!-- 城市的列表 -->
      <!-- 要求列表 -->
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      search: null,
    };
  },
};
</script>
<style scoped>
body {
  background: #f6f6f8;
}
.wrap {
  width: 1196px;
  margin: 0 auto;
}
.searchItem {
  width: 100%;
  height: 90px;
  background-color: #f00;
}
</style>