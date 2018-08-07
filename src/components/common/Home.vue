<template>
  <div class="wrapper">
    <v-head></v-head>
    <v-nav></v-nav>
    <div class="content">
      <!-- 页面切换过度状态 -->
      <transition name="move" mode="out-in">
        <router-view>
        </router-view>
      </transition>
    </div>
  </div>
</template>
<script>
import vHead from "./Header.vue";
import vNav from "./Nav.vue";
export default {
  name: "Home",
  components: {
    vHead,
    vNav
  },
  data() {
    return {};
  }
};
</script>
<style scoped>
.content {
  position: absolute;
  top: 70px;
  left: 249px;
  width: calc(100% - 250px);
  height: calc(100% - 70px);
  min-width: 950px;
  background: #e8e8e8;
  overflow-x: hidden;
  box-sizing: border-box;
  padding: 10px 15px;
}
</style>
