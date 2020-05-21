<!--  -->
<template>
  <baidu-map
    :center="map.center"
    :scroll-wheel-zoom="true"
    :zoom="map.zoom"
    :mapStyle="mapStyle"
    class="baidumapc"
  >
    <template v-for="(it,index) in ms">
      <bm-marker
        :key="it.id"
        :position="it.position"
        @click="markclick(it,index)"
        @mouseover="markover(it,index)"
        :icon="it.if? iocn:newincon"
        @mouseout="markout(it,index)"
      >
        <bm-info-window :show="it.show" :position="it.position">
          <p v-text="it.mess"></p>
        </bm-info-window>
      </bm-marker>
    </template>
  </baidu-map>
</template>

<script>
export default {
  name: "baiduMap",
  data() {
    return {};
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {}
};
</script>
<style lang='scss' scoped>
//@import url(); 引入公共css类
.baidumapc {
  padding: 0 10px ;
}
</style>