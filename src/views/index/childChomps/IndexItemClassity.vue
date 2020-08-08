<template>
  <div class="itemclassity inner">
    <div class="home-sider">
      <div class="job-menu" @mouseleave="itemMouseleave">
        <dl
          v-for="(item,index) in itemclassity"
          :key="item.name"
          v-show="index<itemIndex"
          @mouseover="itemMouseover(index)"
        >
          <dd>
            <b>{{item.jobName}}</b>
            <span
              v-for="(itemchildren,indexone) in item.children"
              :key="itemchildren.name"
              v-show="indexone<1"
            >
              <span
                class="itemCSpan"
                v-for="(itemC,indextwo) in itemchildren.children"
                :key="itemC.name"
                v-show="indextwo<4"
                @click="itemCClick(itemC.jobName)"
              >{{itemC.jobName}}</span>
            </span>
          </dd>
          <span class="itemmore">></span>
        </dl>
        <div class="show-all" @mouseover="showAll" v-show="isShowAll">显示全部职位</div>
        <div class="hide-menu" v-show="isShowItem">
          <div
            v-for="(item,index) in itemclassity"
            :key="item.name"
            v-show="index>=isShowItemList&&index<isShowItemList+1"
          >
            <p class="menu-article">{{item.jobName}}</p>
            <ul>
              <li v-for="(itemchildren) in item.children" :key="itemchildren.name">
                <h4>{{itemchildren.jobName}}</h4>
                <div class="text">
                  <span v-for="(itemC) in itemchildren.children" :key="itemC.name">{{itemC.jobName}}</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "IndexItemClassity",
  data() {
    return {
      itemIndex: 7,
      isShowAll: true,
      isShowItemList: 0,
      isShowItem: false,
    };
  },
  props: {
    itemclassity: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  methods: {
    showAll() {
      this.itemIndex = this.itemclassity.length;
      this.isShowAll = false;
    },
    itemMouseover(index) {
      this.isShowItemList = index;
      this.isShowItem = true;
    },
    itemMouseleave() {
      this.isShowItem = false;
      this.itemIndex = 7;
      this.isShowAll = true;
    },
    itemCClick(aaa) {
      this.$router.push({
        name: "DetailHotPost",
        params: { hotPostName: aaa },
      });
    },
  },
  computed: {},
  components: {},
};
</script>

<style scoped>
.home-sider {
  width: 384px;
}
/* 菜单栏 */
.job-menu {
  width: 100%;
  background: #fff;
  color: #61687c;
  position: relative;
  z-index: 1002;
  box-shadow: 5px 5px 15px rgba(3, 0, 0, 0.04);
  padding-top: 0;
}
.job-menu dl {
  width: 100%;
  padding: 0 0;
  zoom: 1;
  height: 42px;
  position: relative;
}
.job-menu dl :hover {
  background: #00c2b3;
  color: #fff;
}
.job-menu dl :hover b {
  color: #fff;
}
.job-menu dd {
  padding: 8px 20px 9px;
}
.job-menu dd b {
  font-size: 15px;
  font-weight: 600;
  color: #414a60;
}
.itemCSpan {
  margin-left: 20px;
  font-size: 13px;
  cursor: pointer;
}
.show-all {
  border-top: dashed 1px #ecedef;
  color: #00c2b3;
  height: 45px;
  padding: 0 20px;
  line-height: 45px;
  font-size: 14px;
}
.itemmore {
  position: absolute;
  right: 20px;
  top: 8px;
  color: #cbcbcb;
}
/* 隐藏菜单 */
.hide-menu {
  position: absolute;
  background: #fff;
  padding: 20px 30px 20px 10px;
  width: 648px;
  top: 0;
  margin-top: -5px;
  left: 100%;
  z-index: 1;
  box-shadow: 0 1px 6px rgba(6, 0, 1, 0.1);
}
.menu-article {
  padding-left: 20px;
  height: 30px;
  font-size: 15px;
  font-weight: 700;
}
.hide-menu ul {
  width: 598px;
}
.hide-menu ul li {
  display: flex;
}
.hide-menu h4 {
  width: 120px;
  color: #8d92a1;
  font-size: 13px;
  padding-top: 12px;
  font-weight: 400;
  padding-left: 20px;
  flex-shrink: 0;
}
.hide-menu .text {
  border-bottom: solid 1px #f5f6f9;
  padding: 10px 0 10px 1px;
  word-break: break-all;
}
.hide-menu .text > span {
  margin-right: 25px;
  color: #61687c;
  font-size: 13px;
  line-height: 28px;
}
</style>
