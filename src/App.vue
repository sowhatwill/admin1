<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style lang="less">
@blue: #409eff;
@green: #67c23a;
@yellow: #e6a23c;
@red: #f56c6c;
@gray: #909399;

* {
  padding: 0;
  margin: 0;
}
.blue {
  color: @blue;
}
.green {
  color: @green;
}
.yellow {
  color: @yellow;
}
.red {
  color: @red;
}
.blue {
  color: @gray;
}
.container {
  width: 1200px;
  margin: 0 auto;
  border: 1px solid red;
}
// 导航栏下拉三角颜色
.el-submenu__title i {
  color: #ffffff !important;
}
// icon默认颜色
.el-menu-item i {
  color: #fff;
}
</style>
