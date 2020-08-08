<template>
  <div class="bg">
    <div class="wrap">
      <RegisterTopSlot>
        <!-- 套了一层 所以传出插槽 -->
        <slot name="change" slot="change"></slot>
      </RegisterTopSlot>
      <RegisterIndivFormSlot>
        <!-- 套了一层 所以传出插槽 -->
        <slot name="headH" slot="headH"></slot>
        <slot name="headP" slot="headP"></slot>
        <slot name="form" slot="form"></slot>
      </RegisterIndivFormSlot>
    </div>
  </div>
</template>

<script>
import RegisterTopSlot from "views/registerIndiv/childChomps/RegisterTopSlot";
import RegisterIndivFormSlot from "views/registerIndiv/childChomps/RegisterIndivFormSlot";
export default {
  name: "",
  components: {
    RegisterTopSlot,
    RegisterIndivFormSlot,
  },
};
</script>
<style scoped>
.bg {
  background: #5dd5c8 url(~assets/img/Login/newbg.png) center bottom no-repeat;
  width: 100%;
  height: 100vh;
  position: relative;
  font-size: 14px;
}
.wrap {
  width: 1000px;
  height: 780px;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
}
</style>
