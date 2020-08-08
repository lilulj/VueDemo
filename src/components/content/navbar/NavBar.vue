<template>
  <div class="navbar">
    <div class="inner displayflex navbar-nav">
      <div class="navbar-left displayflex">
        <div class="navbar-logo greencolor">领航</div>
        <slot name="navbar-city"></slot>
        <ul class="displayflex navbar-item">
          <li @click="indexClick">首页</li>
          <li @click="postClick">职业</li>
          <li>校园</li>
          <li @click="companyClick">公司</li>
          <li>APP</li>
          <li>资讯</li>
        </ul>
        <slot name="navbar-search"></slot>
      </div>
      <!-- 未登录 -->
      <div class="navbar-right displayflex" v-if="isShowNav">
        <ul class="displayflex navbar-item1">
          <li>上传简历</li>
          <li>我要找工作</li>
          <li>我要招聘</li>
        </ul>
        <div class="register outline cursorpointer" @click="register">注册</div>
        <div class="login outline cursorpointer" @click="login">登录</div>
      </div>
      <!-- 已登录 -->
      <div class="navbar-right displayflex" v-else>
        <ul class="displayflex navbar-item1">
          <li class="nav-message">消息</li>
          <li>简历</li>
          <li class="nav-dot">·</li>
          <li>上传</li>
          <li class="nav-name">
            李禄
            <span class="nav-headimg">
              <img src alt />
            </span>
            <div class="name-item">
              <p>
                个人中心
                <span>推荐职位、编辑在线简历</span>
              </p>
              <p>
                账号设置
                <span>修改密码、打招呼语和常用语</span>
              </p>
              <p>隐私设置</p>
              <p class="job">求职助手</p>
              <p class="cut">切换为招聘者</p>
              <p class="logout" @click="logout">退出登录</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavBar",
  data() {
    return {
      isShowNav: true,
    };
  },
  mounted() {
    this.cutLogin()
  },
  methods: {
    //注册跳转
    register() {
      this.$router.push("/register");
    },
    //登录跳转
    login() {
      this.$router.push("/login");
    },
    //职业跳转
    postClick() {
      this.$router.push("/DetailHotPost");
    },
    //主页跳转
    indexClick() {
      this.$router.push("/index");
    },
    //公司跳转
    companyClick() {
      this.$router.push("/company");
    },
    //切换登录状态
    cutLogin() {
      if (this.$store.state.user.userId === null) {
        this.isShowNav = true;
      } else {
        this.isShowNav = false;
      }
    },
    //退出登录
    logout() {
      this.$store.commit("logout");
      this.cutLogin();
    },
  },
  components: {},
};
</script>

<style scoped lang="less">
/* 顶部导航 */
.navbar {
  width: 100%;
  height: 49px;
  line-height: 49px;
  background: #202329;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.06);
  /* position: relative;
  z-index: 99; */
  font-size: 14px;
  color: #e1e1e1;
}
/* 导航左 */
.navbar-left {
  width: 60%;
}
/* 顶部导航logo */
.navbar-logo {
  width: 110px;
  font-size: 26px;
}
/* 顶部导航分类 */
.navbar-item {
  width: calc(80% - 232px);
  justify-content: space-evenly;
}
.navbar-item li {
  cursor: pointer;
}
.navbar-item li:hover {
  color: #5dd5c8;
}
.navbar-item1 {
  width: calc(80% - 156px);
  justify-content: space-between;
}
.navbar-item1 li {
  cursor: pointer;
}
.navbar-item1 li:hover {
  color: #5dd5c8;
}
/* 导航右 */
.navbar-right {
  width: 40%;
  justify-content: flex-end;
  .nav-message {
    margin-left: 6px;
  }
  .nav-dot {
    color: #fff;
    margin: 0 -15px 0 -15px;
    font-size: 18px;
  }
  .nav-name {
    position: relative;
    font-size: 14px;
    .nav-headimg {
      margin-left: 14px;
      img {
        display: inline-block;
        vertical-align: middle;
        width: 26px;
        height: 26px;
        background: rosybrown;
        border-radius: 100%;
      }
    }
    .name-item {
      display: none;
      position: absolute;
      width: 234px;
      top: 49px;
      left: auto;
      right: -50px;
      box-shadow: 1px 2px 14px rgba(0, 0, 0, 0.11);
      background: #fff;
      color: #414a60;
      padding: 0 25px;
      z-index: 9999;
      p {
        line-height: 22px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        border-bottom: 1px solid rgba(0, 0, 0, 0.05);
        padding: 10px 0;
        padding-left: 25px;
        margin: 0 -25px;
        span {
          display: block;
          font-size: 12px;
          color: #9fa3b0;
        }
      }
      .logout {
        border: 0;
      }
      .job,
      .cut {
        border-bottom: 6px solid #f2f5fa;
        padding-left: 25px;
        margin: 0 -25px;
      }
    }
    .name-item p:hover {
      background: #f2f5fa;
    }
    .name-item .cut:hover,
    .name-item .logout:hover {
      background: #fff;
      color: #00d7c6;
    }
  }
  .nav-name:hover {
    .name-item {
      display: block;
    }
  }
}
.outline {
  border-radius: 15px;
  text-align: center;
  height: 23px;
  line-height: 23px;
  padding: 0 11px 0 11px;
  border: 1px #5dd5c8 solid;
  margin-top: 12px;
}
.register {
  margin-left: 20px;
}
.login {
  margin-left: 20px;
}
</style>
