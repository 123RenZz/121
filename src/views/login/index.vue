<template>
  <div class="login-container">
    <el-image
      style="width: 100px; height: 100px"
      :src="require('./logo.jpeg')"
    ></el-image>

    <!--el-form 表单组件 每个表单项都必须使用el-form-item包裹-->

    <el-form
      class="login-form"
      ref="login-form"
      :model="user"
      :rules="formRules"
    >
      <el-form-item prop="mobile">
        <el-input v-model="user.mobile" placeholder="请输入手机号"></el-input>
      </el-form-item>
      <el-form-item prop="code">
        <el-input v-model="user.code" placeholder="请输入验证码"></el-input>
      </el-form-item>

      <el-form-item prop="agree">
        <el-checkbox v-model="user.agree"
          >我已阅读并同意用户协议和隐私条款</el-checkbox
        >
      </el-form-item>

      <el-form-item>
        <el-button
          type="primary"
          :loading="loginLoading"
          @click="onLogin"
          class="login-btn"
          >立即登录</el-button
        >
      </el-form-item>
    </el-form>
  </div>
</template>


<script>
import request from "@/utils/request";

export default {
  name: "LoginIndex",
  components: {},
  props: {},
  data() {
    return {
      user: {
        mobile: "",
        code: "",
        agree: false, //是否同意协议
      },

      img: require("./logo.jpeg"),
      loginLoading: false, //登录的loading状态

      formRules: {
        //要验证的数据名称：规则列表[]
        mobile: [
          { required: true, message: "手机号不能为空", trigger: "change" },
          {
            pattern: /^1[3|5|7|8|9]\d{9}$/,
            message: "请输入正确的手机号",
            trigger: "change",
          },
        ],
        code: [
          { required: true, message: "验证码不能为空", trigger: "change" },
          {
            pattern: /^\d{6}$/,
            message: "请输入正确的验证码",
            trigger: "blur",
          },
        ],
        agree: [
          {
            validator: (rule, value, callback) => {
              //通过 调用callback
              //shibai callback(new Error('失败'))
              if (value) {
                callback();
              }
              callback(new Error("请勾选用户协议!!!"));
            },
            trigger: "change",
          },
        ],
      },
    };
  },
  methods: {
    onLogin() {
      //获取表单数据
      //const user = this.user;
      //表单验证
      this.$refs["login-form"].validate((valid, err) => {
        //如果表单验证失败，停止请求
        if (!valid) {
          return;
        }
        //验证通过，登录成功
        this.login();
      });
    },
    login() {
      //验证通过
      this.loginLoading = true; //开启登录中loading
      request({
        methods: "POST",
        url: "/mp/v1_0/authorizations",
        data: this.user, //data 用来设置post 请求体
      })
        .then((res) => {
          //登录成功
          console.log(res);

          this.$message({
            message: "登录成功！",
            type: "success",
          });
          this.loginLoading = false;
        })
        .catch((err) => {
          //登录失败
          console.log("登录失败", err);
          this.$message.error("登录失败，手机号或验证码错误！！！");
          this.loginLoading = false; //关闭loading
        });
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