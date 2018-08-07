<template>
  <div class="nav">
    <el-menu default-active="/home" :router="true" class="el-menu-vertical-demo" background-color="#409eff" text-color="#fff" active-text-color="#ffd04b">
      <el-menu-item index="/home/">
        <i class="iconfont icon-shouye"></i>
        <span slot="title">首页</span>
      </el-menu-item>
      <el-menu-item index="2">
        <i class="iconfont icon-shouye4"></i>
        <span slot="title">潜在患者管理</span>
      </el-menu-item>
      <el-menu-item index="3">
        <i class="iconfont icon-shouye2"></i>
        <span slot="title">预约患者管理</span>
      </el-menu-item>
      <el-menu-item index="4">
        <i class="iconfont icon-shouye3"></i>
        <span slot="title">患者信息管理</span>
      </el-menu-item>
      <el-submenu index="1">
        <template slot="title">
          <i class="iconfont icon-shouye1"></i>
          <span slot="title">个人管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="1-1">个人信息</el-menu-item>
          <el-menu-item index="1-2">排班管理</el-menu-item>
          <el-menu-item index="1-3">安全设置</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </div>
</template>
<script>
export default {
  name: "Nav",
  data() {
    return {};
  }
};
</script>
<style lang="less" scoped>
@import url("../../assets/css/iconfont.css");
.nav {
  width: 250px;
  position: absolute;
  top: 70px;
  left: 0;
}
.el-menu {
  padding-bottom: 1000px;
}
</style>
