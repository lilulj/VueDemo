import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
// import { getPlace } from "network/registerIndiv";

export default new Vuex.Store({
  //所有的数据都放在state中
  state: sessionStorage.getItem('state') ? JSON.parse(sessionStorage.getItem('state')) :
    {
      isPwdorMessage: true,
      //用户信息对象
      user: {
        userId: null,
      },
      // 身份
      identify: null,
      //招聘类型选项
      recruitTypeOptions: [
        {
          value: "社招",
          label: "社招",
        },
        {
          value: "校招",
          label: "校招",
        },
      ],
      // 学历
      educationOptions: [
        {
          value: "大专",
          label: "大专",
        },
        {
          value: "高中",
          label: "高中",
        },
        {
          value: "初中",
          label: "初中",
        },
        {
          value: "本科",
          label: "本科",
        },
        {
          value: "硕士",
          label: "硕士",
        },
        {
          value: "博士",
          label: "博士",
        },
      ],
      //工作经验
      recruitJobExOptions: [
        {
          value: "无工作经验需求",
          label: "无工作经验需求",
        },
        {
          value: "1~2年",
          label: "1~2年",
        },
        {
          value: "2~3年",
          label: "2~3年",
        },
        {
          value: "3年以上",
          label: "3年以上",
        },
      ],
      //薪资范围
      salaryRangeOptions: [
        {
          value: "面谈",
          label: "面谈",
        },
        {
          value: "1K以下",
          label: "1K以下",
        },
        {
          value: "1K~2K",
          label: "1K~2K",
        },
        {
          value: "2K~4K",
          label: "2K~4K",
        },
        {
          value: "4K~8K",
          label: "4K~8K",
        },
        {
          value: "8K~16K",
          label: "8K~16K",
        },
        {
          value: "16K以上",
          label: "16K以上",
        },
      ],
      //公司名字
      companyName: null,
      //招聘者注册用户名字
      userName: null,
      //用户头像本地地址
      headPUrl: null,
      //hr的唯一标识Id
      hrId: null,
      // 三级城市选项
      placeOptions: null,
    },

  //操作数据，唯一的通道是mutations
  mutations: {
    logout(state) {
      state.user.userId = null
    }
    // updatedPalce(state, payload) {
    //   console.log(payload);
    //   state.placeOptions = payload;
    //   console.log(state.placeOptions);
    // },
  },

  //actions,可以来做异步操作，然后提交给mutations，而后再对state(数据)进行操作
  actions: {
    // //获取地区数据
    // position(context) {
    //   getPlace().then((result) => {
    //     console.log(result);
    //     console.log(this.placeOptions);
    //     context.commit("updatedPalce", result.data.data.children);
    //   });
    // },
  },
});
