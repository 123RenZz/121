<template>
  <el-menu
    class="nav-menu"
    default-active="/"
    @open="handleOpen"
    @close="handleClose"
    background-color="#002033"
    text-color="#fff"
    active-text-color="red"
    :collapse="isCollapse"
    router
  >
    <img src="https://dss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/logo/logo_white-d0c9fe2af5.png" 
    style="width:180px; height=80px; text-align:center " alt="百度一下" />
    <el-menu-item index="/">
      <i class="el-icon-platform-eleme"></i>
      <span slot="title">首页列表</span>
    </el-menu-item>

    <el-menu-item index="/article">
      <i class="el-icon-menu"></i>
      <span slot="title">内容管理</span>
    </el-menu-item>
    <el-menu-item index="/image">
      <i class="el-icon-picture-outline-round"></i>
      <span slot="title">列表三</span> 
    </el-menu-item>
    <el-menu-item index="/publish">
      <i class="iconfont icon-publish"></i>
      <span slot="title" style="padding-left: 6px">列表四</span>
    </el-menu-item>
    <el-menu-item index="/comment">
      <i class="el-icon-star-off"></i>
      <span slot="title">列表五</span>
    </el-menu-item>
    <el-menu-item index="/fans">
      <i class="el-icon-s-custom"></i>
      <span slot="title">列表六</span>
    </el-menu-item>
    <el-menu-item index="/settings">
      <i class="el-icon-setting"></i>
      <span slot="title">列表七</span>
    </el-menu-item>
  </el-menu>
</template>

<script>
export default {
  name: "appAside",
  props:['is-collapse'],
  data() {
    return {
       //isCollapse:true
    }
  },
  created() {},
  mounted() {},
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>

<style scoped lang="less">
.nav-menu {
  .iconfont {
    margin-left: 0px;
    padding-left: 5px;
  }
}
</style>
