<template>
  <div class="detailhotpost">
    <nav-bar></nav-bar>
    <!-- <h2>{{$route.params.hotPostName}}</h2> -->
    <DetailHotPostSearch></DetailHotPostSearch>
    <DetaikHopePostItem></DetaikHopePostItem>
  </div>
</template>
<script>
import NavBar from "components/content/navbar/NavBar";
import DetailHotPostSearch from "views/detail/childChomps/DetailHotPostSearch";
import DetaikHopePostItem from "views/detail/childChomps/DetaikHopePostItem";
export default {
  name: "DetailHotPost",
  data() {
    return {};
  },
  components: {
    NavBar,
    DetailHotPostSearch,
    DetaikHopePostItem,
  },
  methods: {},
};
</script>

<style scoped>
</style>
