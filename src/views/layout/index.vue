<template>
  <el-container class="lay-container">
    <el-aside class="lay-aside">
         <app-aside class="aside-menu"/>
    </el-aside>
    <el-container>
      <el-header class="lay-header">Header</el-header>
      <el-main class="lay-main">
        <router-view />
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import AppAside from '@/views/layout/components/aside.vue'

export default {
  name: "LayoutIndex",
  components:{
      AppAside
  },
  data() {
    return {};
  },
  created() {},
  mounted() {},
  methods: {},
};
</script>

<style scoped lang="less">
.lay-container {
  position: fixed;
  top: 0px;
  bottom: 0px;
  left: 0px;
  right: 0px;
}

.lay-aside {
  width: 100px;

  background-color: antiquewhite;
  .aside-menu{
    height: 100%;
  }
}

.lay-header {
  background-color: aqua;
}

.lay-main {
  background-color: burlywood;
}


</style>
