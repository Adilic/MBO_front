<template>
  <div class="welcome-container">
    <h1>いらっしゃいませ！</h1>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
}
</script>

<style>
.welcome-container {
  display: flex;
  justify-content: center; /* 水平居中 */
  align-items: center; /* 垂直居中 */
  height: 100vh; /* 让容器铺满整个视口高度 */
  background-color: antiquewhite;
}

/* 如果您还希望标题居中显示，可以在标题元素上添加样式 */
.welcome-container h1 {
  text-align: center;
}
</style>
