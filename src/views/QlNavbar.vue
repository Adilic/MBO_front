<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <router-link class="navbar-brand" to="/home">MBO</router-link>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item active">

          <router-link class="nav-link" to="/shohinzaiko">商品検索</router-link>
        </li>
        <li class="nav-item active">

<router-link class="nav-link" to="/add-product">商品追加</router-link>
</li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'QlNavbar',
}
</script>

<style>

</style>
