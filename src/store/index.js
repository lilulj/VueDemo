import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
// import { getPlace } from "network/registerIndiv";

export default new Vuex.Store({
  //所有的数据都放在state中
  state: sessionStorage.getItem("state")
    ? JSON.parse(sessionStorage.getItem("state"))
    : {
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
            value: "不限",
            label: "不限",
          },
          {
            value: "中专/中技",
            label: "中专/中技",
          },
          {
            value: "初中以下",
            label: "初中以下",
          },
          {
            value: "高中",
            label: "高中",
          },

          {
            value: "大专",
            label: "大专",
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
            value: "不限",
            label: "不限",
          },
          {
            value: "在校生",
            label: "在校生",
          },
          {
            value: "应届生",
            label: "应届生",
          },
          {
            value: "1年以内",
            label: "1年以内",
          },
          {
            value: "1~3年",
            label: "1~3年",
          },
          {
            value: "3~5年",
            label: "3~5年",
          },
          {
            value: "5~10年",
            label: "5~10年",
          },
          {
            value: "10年以上",
            label: "10年以上",
          },
        ],
        //薪资范围
        salaryRangeOptions: [
          {
            value: "不限",
            label: "不限",
          },
          {
            value: "面谈",
            label: "面谈",
          },
          {
            value: "3K以下",
            label: "3K以下",
          },
          {
            value: "3K~5K",
            label: "3K~5K",
          },
          {
            value: "5K~10K",
            label: "5K~10K",
          },
          {
            value: "10K~15K",
            label: "10K~15K",
          },
          {
            value: "15K~20K",
            label: "15K~20K",
          },
          {
            value: "20K~30K",
            label: "20K~30K",
          },
          {
            value: "30K~50K",
            label: "30K~50K",
          },
          {
            value: "50K以上",
            label: "50K以上",
          },
        ],
        //融资阶段
        stageRangeOptions: [
          {
            value: "不限",
            label: "不限",
          },
          {
            value: "未融资",
            label: "未融资",
          },
          {
            value: "天使轮",
            label: "天使轮",
          },
          {
            value: "A轮",
            label: "A轮",
          },
          {
            value: "B轮",
            label: "B轮",
          },
          {
            value: "C轮",
            label: "C轮",
          },
          {
            value: "D轮及以上",
            label: "D轮及以上",
          },
          {
            value: "已上市",
            label: "已上市",
          },
          {
            value: "不需要融资",
            label: "不需要融资",
          },
        ],
        //公司规模
        companyScaleOptions: [
          {
            value: "不限",
            label: "不限",
          },
          {
            value: "0-20人",
            label: "0-20人",
          },
          {
            value: "20-99人",
            label: "20-99人",
          },
          {
            value: "100-499人",
            label: "100-499人",
          },
          {
            value: "500-999人",
            label: "500-999人",
          },
          {
            value: "1000-9999人",
            label: "1000-9999人",
          },
          {
            value: "10000人以上",
            label: "10000人以上",
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
