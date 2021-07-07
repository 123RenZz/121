<template>
  <div class="login-container">
    <el-image style="width: 100px; height: 100px" :src="require('./logo.jpeg')"></el-image>

    <!--el-form 表单组件 每个表单项都必须使用el-form-item包裹-->
    <el-form class="login-form" ref="form" :model="user">
      <el-form-item>
        <el-input v-model="user.mobile" placeholder="请输入手机号"></el-input>
      </el-form-item>
      <el-form-item>
        <el-input v-model="user.code" placeholder="请输入验证码"></el-input>
      </el-form-item>

      <el-form-item>
        <el-checkbox v-model="checked"
          >我已阅读并同意用户协议和隐私条款</el-checkbox
        >
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="onSubmit" class="login-btn"
          >立即登录</el-button
        >
      </el-form-item>
    </el-form>
  </div>
</template>


<script>
export default {
  name: "LoginIndex",
  components: {},
  props: {},
  data() {
    return {
      user: {
        mobile: "",
        code: "",
      },
      checked: false, //是否同意选中的状态
      img:require('./logo.jpeg')
     
    };
  },
  methods: {
    onSubmit() {
      console.log("submit!");
    },
  },
};
</script>


<style scoped   lang='less' >
.login-container {
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: url("./login_bg.jpg") no-repeat;
  background-size: cover;
}
.login-form {
  background: #fff;
  padding: 70px;
  min-width: 300px;
}
.login-btn {
  width: 100%;
}
.logo {
  width: 300px;
  height: 300px;
  background: url("./logo.jpeg");
}
</style>