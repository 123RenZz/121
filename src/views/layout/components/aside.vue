<template>
  <el-menu
    default-active="/"
    class="el-menu-vertical-demo"
    @open="handleOpen"
    @close="handleClose"
    background-color="#002033"
    text-color="#fff"
    active-text-color="red"
    router
  >
    <el-menu-item index="/">
      <i class="el-icon-platform-eleme"></i>
      <span slot="title">王小云一</span>
    </el-menu-item>

    <el-menu-item index="/article">
      <i class="el-icon-menu"></i>
      <span slot="title">王小云二</span>
    </el-menu-item>
    <el-menu-item index="/image">
      <i class="el-icon-picture-outline-round"></i>
      <span slot="title">王小云三</span>
    </el-menu-item>
    <el-menu-item index="/publish">
      <i class="el-icon-tickets"></i>
      <span slot="title">王小云四</span>
    </el-menu-item>
    <el-menu-item index="/comment">
      <i class="el-icon-star-off"></i>
      <span slot="title">王小云五</span>
    </el-menu-item>
    <el-menu-item index="/fans">
      <i class="el-icon-s-custom"></i>
      <span slot="title">王小云六</span>
    </el-menu-item>
    <el-menu-item index="/setting">
      <i class="el-icon-setting"></i>
      <span slot="title">王小云七</span>
    </el-menu-item>
  </el-menu>
</template>

<script>
export default {
  name: "appAside",
  data() {
    return {};
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
</style>
