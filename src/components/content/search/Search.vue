<template>
  <div>
    <div :class="isShow?'searchTopShow':''" ref="search">
      <div class="search">
        <el-form
          :model="formData"
          :rules="rules"
          ref="formData"
          class="indexlogin-form displayflex"
        >
          <div class="search-logo" v-show="isShow">领航</div>
          <el-form-item prop="item" class="searchitem">
            <el-select v-model="formData.item" placeholder="职业类型" class="searchitem-select">
              <el-option label="不限" value="all"></el-option>
              <el-option label="高级管理" value="management"></el-option>
              <el-option label="技术" value="technology"></el-option>
              <el-option label="产品" value="product"></el-option>
              <el-option label="设计" value="design"></el-option>
              <el-option label="运营" value="operation"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item prop="search" class="searchcompany">
            <el-input v-model="formData.search" :disabled="false" placeholder="搜索职位、公司"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button class="btnlogin" type="primary" @click="submitForm('formData')">搜索</el-button>
          </el-form-item>
        </el-form>
        <div class="search-hot" v-show="!isShow">
          <span>热门职位:</span>
        </div>
      </div>
    </div>
    <div :class="isShow?'searchTopShow1':''"></div>
  </div>
</template>

<script>
export default {
  name: "Search",
  data() {
    return {
      isShow: false,
      formData: {
        item: "",
        search: "",
      },
      rules: {
        item: [{ required: false, message: "请输入手机号", trigger: "change" }],
      },
    };
  },
  mounted() {
    window.addEventListener("scroll", this.positionFixedTop); // 监听（绑定）滚轮滚动事件
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.positionFixedTop); //  离开页面清除（移除）滚轮滚动事件
  },
  methods: {
    //提交按钮
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          //搜索数据
          console.log(this.formData);
          // this.$emit("getLoginPhone", this.formData);
        } else {
          return false;
        }
      });
    },
    //滚轮滑动到一定距离出现固顶
    positionFixedTop() {
      let scrollObj = this.$refs["search"];
      let scrollNumber =
        document.documentElement.scrollTop || document.body.scrollTop;
      let scrollTop = scrollObj.offsetTop + scrollObj.scrollHeight; //自身底部到页面顶部的距离
      if (scrollNumber > scrollTop) {
        this.isShow = true;
      } else {
        this.isShow = false;
      }
    },
  },
  components: {},
};
</script>

<style scoped>
/* 搜索栏 */
.search {
  width: 934px;
  margin: 0 auto;
}
/* 隐藏 */
.searchTopShow {
  width: 100%;
  height: 128px;
  padding: 14px 0;
  background: #fff;
  position: fixed;
  right: 0;
  left: 0;
  top: 0;
  box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.21);
  z-index: 1005;
}
.searchTopShow1 {
  height: 128px;
  visibility: hidden;
}
/* 隐藏搜索的logo */
.search-logo {
  position: absolute;
  width: 100px;
  left: -80px;
  top: 30px;
  font-size: 28px;
  color: #00d7c6;
  z-index: 100;
}
.indexlogin-form {
  width: 100%;
  position: relative;
  padding-top: 20px;
}
.indexlogin-form >>> .el-input__inner {
  height: 48px;
  line-height: 48px;
  border: 0;
}
.searchitem-select {
  position: absolute;
  border: none;
  left: 0;
  top: 0;
  z-index: 99;
  width: 110px;
}
.searchcompany {
  width: 100%;
  box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.13);
}
.searchcompany >>> .el-input__inner {
  padding-left: 120px;
}
.el-form-item {
  margin-bottom: 10px;
}
.btnlogin {
  height: 48px;
  width: 140px;
}
/* 搜索按钮 */
.el-button {
  border-radius: 0;
}
/* 热门职位 */
.search-hot {
  font-size: 13px;
  color: #9fa3b0;
  padding-bottom: 24px;
}
</style>
