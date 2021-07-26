<template>
  <el-container class="lay-container">
    <el-aside width="auto" class="lay-aside">
      <app-aside class="aside-menu" :is-collapse="isCollapse" />
    </el-aside>
    <el-container>
      <el-header class="lay-header">
        <div>
          <i
            :class="{
              'el-icon-s-fold': isCollapse,
              'el-icon-s-unfold': !isCollapse,
            }"
            @click="isCollapse = !isCollapse"
          ></i>
          <span>我的后台管理系统</span>
        </div>

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
            <el-dropdown-item @click.native="onLogOut">
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
      user: {},
      isCollapse: false, //侧边菜单栏的展开状态
    };
  },
  created() {
    //组件初始化获取用户信息
    this.loadUserProfile();
  },
  mounted() {},
  methods: {
    loadUserProfile() {
      getUserProfile().then((res) => {
        this.user = res.data.data;
        //console.log('用户信息方法');
      });
    },
    onLogOut() {
      console.log("退出登录");

      this.$confirm("您确认退出当前用户登录吗?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          //把用户的登录状态清除
          window.localStorage.removeItem("user"),
            //跳转到登录页面
            this.$router.push("/login");
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "取消退出",
          });
        });
    },
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
  //background-color: antiquewhite;
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
  background-color:#E7EEF2
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
