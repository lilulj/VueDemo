import Vue from "vue";
import VueRouter from "vue-router";

const Login = () => import("views/login/Login");
const Register = () => import("views/register/Register");
const Index = () => import("views/index/Index");
const DetailHotPostList = () => import("views/detail/DetailHotPostList");
const DetailHotPost = () => import("views/detail/DetailHotPost");
const Company = () => import("views/company/Company");
const DetailHotCompany = () => import("views/detail/DetailHotCompany");

//gch
const UploadResum = () => import("views/upload/UploadResum");
// 个人注册路由
const RegisterIndiv = () => import("views/registerIndiv/RegisterIndiv");
const RegisterIndivExInCom = () =>
  import("views/registerIndiv/RegisterIndivExInCom");
const RegisterIndivEdInSch = () =>
  import("views/registerIndiv/RegisterIndivEdInSch");
const RegisterIndivHopePost = () =>
  import("views/registerIndiv/RegisterIndivHopePost");
// 企业招聘者注册路由
const RegisterHr = () => import("views/registerHr/RegisterHr");
const RegisterHrRecruitMsg = () =>
  import("views/registerHr/RegisterHrRecruitMsg");

//我的简历路由
const indivResume = () => import("views/indivResume/myResume");
// 使用路由
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/index",
  },
  {
    path: "/index",
    name: "Index",
    component: Index,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
  },
  {
    path: "/DetailHotPostList",
    name: "DetailHotPostList",
    component: DetailHotPostList,
  },
  {
    path: "/DetailHotCompany",
    name: "DetailHotCompany",
    component: DetailHotCompany,
  },
  {
    path: "/DetailHotPost",
    name: "DetailHotPost",
    component: DetailHotPost,
  },
  {
    path: "/company",
    name: "Company",
    component: Company,
  },
  // 上传简历
  {
    path: "/uploadResum",
    name: "uploadResum",
    component: UploadResum,
  },
  //个人注册路由 Gch
  {
    path: "/registerIndiv",
    component: RegisterIndiv,
  },
  //个人注册 实习经历
  {
    path: "/registerIndivExInCom",
    component: RegisterIndivExInCom,
  },
  //个人注册 学历信息
  {
    path: "/registerIndivEdInSch",
    component: RegisterIndivEdInSch,
  },
  //个人注册 期望职位
  {
    path: "/registerIndivHopePost",
    component: RegisterIndivHopePost,
  },
  // 招聘者注册 基本信息
  {
    path: "/registerHr",
    component: RegisterHr,
  },
  //招聘者注册 发布职位信息
  {
    path: "/registerHrRecruitMsg",
    component: RegisterHrRecruitMsg,
  },
  // 我的简历
  {
    path: "/indivResume",
    component: indivResume,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
