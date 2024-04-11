<template>
  <div class="login-container">
    <form @submit.prevent="login">
      <h2>login</h2>
      <div>
        <label for="username">username:</label>
        <input id="username" v-model="credentials.username" type="text" placeholder="ユーザーネーム"/>
      </div>
      <div>
        <label for="password">password:</label>
        <input id="password" v-model="credentials.password" type="password" placeholder="パスワード"/>
      </div>
      <!-- 错误消息显示 -->
      <div v-if="loginError" class="error">Username or password is incorrect</div>
      <div>
        <button type="submit">login</button>
      </div>
    </form>
  </div>
</template>


<script>
import axios from 'axios';

export default {
  data() {
    return {
      credentials: {
        username: '',
        password: '',
      },
      loginError: false, // 控制错误消息的显示
    };
  },
  methods: {
    login() {
      // 将this保存在变量中，以便在axios回调中使用
      const vm = this;
      axios.post('http://localhost:8080/login', this.credentials)
        .then(function (response) {
          // 这里根据后端返回的实际响应来处理
          if (response.data.status === 'success') {
            vm.loginError = false;
            vm.$router.push('/home'); 
            alert('Login successful');
          } else {
            // 登录失败
            vm.loginError = true;
          }
        })
        .catch(function (error) {
          console.error('Error on login', error);
          vm.loginError = true;
        });
    },
  },
};
</script>


<style>
.login-container {
  max-width: 300px;
  margin: auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
}
.error {
  color: red;
  margin-top: 10px;
}
</style>
