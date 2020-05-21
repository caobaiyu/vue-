
<template>
  <baidu-map class="map" :center="center" :zoom="zoom">
    <bm-context-menu>
      <bm-context-menu-item :callback="gotoBeijing" text="去北京"></bm-context-menu-item>
      <bm-context-menu-item :callback="gotoShanghai" text="去上海"></bm-context-menu-item>
    </bm-context-menu>
  </baidu-map>
</template>

<script>
export default {
  name: "baiduMapCs",
  data() {
    return {
      center: "西安",
      zoom: 15
    };
  },
  methods: {
    gotoBeijing(e) {
      this.center = {
        lng: 116.404,
        lat: 39.915
      };
    },
    gotoShanghai(e) {
      this.center = {
        lng: 121.473354,
        lat: 31.238413
      };
    }
  }
};
</script>
<style lang='scss' scoped>
.map {
  width: 100%;
  height: 400px;
}
</style>