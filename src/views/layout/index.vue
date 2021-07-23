<template>
  <el-container class="lay-container">
    <el-aside class="lay-aside">
      <app-aside class="aside-menu" />
    </el-aside>
    <el-container>
      <el-header class="lay-header">
        <div><i class="el-icon-s-fold"></i> <span>我的后台管理系统</span></div>

        <el-dropdown>
          <div class="user-wiap">
            <img
              class="pic-tou"
              src="https://img2.baidu.com/it/u=3834396650,2600895298&fm=26&fmt=auto&gp=0.jpg"
            />
            <span class="el-dropdown-link">用户昵称</span
            ><i class="el-icon-arrow-down el-icon--right"></i>
          </div>

          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>
              <i class="el-icon-setting"></i>个人设置</el-dropdown-item
            >
            <el-dropdown-item>
              <i class="el-icon-s-unfold"></i>
              退出登录</el-dropdown-item
            >
          </el-dropdown-menu>
        </el-dropdown>
      </el-header>
      <el-main class="lay-main">
        <router-view />
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import AppAside from "@/views/layout/components/aside.vue";
import { getUserProfile } from "@/api/user.js";

export default {
  name: "LayoutIndex",
  components: {
    AppAside,
  },
  data() {
    return {
      user:{}
    };
  },
  created() {
    //组件初始化获取用户信息
    this.loadUserProfile();
  },
  mounted() {},
  methods: {
    
    loadUserProfile(){
      getUserProfile().then(res =>{
        this.user = res.data.data;
        //console.log('用户信息方法');
      })
    }
  },
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
  .aside-menu {
    height: 100%;
  }
}

.lay-header {
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
}

.lay-main {
  background-color: burlywood;
}

.user-wiap {
  display: flex;
  align-items: center;
  .pic-tou {
    width: 45px;
    height: 45px;
    border-radius: 50%;
    margin-right: 10px;
  }
}
</style>
