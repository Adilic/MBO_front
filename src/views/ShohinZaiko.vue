<template>

  <div>
    <h2>商品検索</h2>
    <form @submit.prevent="searchProducts" class="search-form">
      <div class="form-group">
        <label for="productName">商品名:</label>
        <input id="productName" v-model="searchQuery.productName" type="text" class="form-control">
      </div>
      <div class="form-group">
        <label for="productType">商品の種類:</label>
        <input id="productType" v-model="searchQuery.productType" type="text" class="form-control">
      </div>
      <div class="form-group">
        <label for="stockInTime">入庫時間:</label>
        <input id="stockInTime" v-model="searchQuery.stockInTime" type="date" class="form-control">
      </div>
      <div class="form-group">
        <label for="stockOutTime">出庫時間:</label>
        <input id="stockOutTime" v-model="searchQuery.stockOutTime" type="date" class="form-control">
      </div>
      <div class="form-group">
        <label for="expirationDate">賞味期限:</label>
        <input id="expirationDate" v-model="searchQuery.expirationDate" type="date" class="form-control">
      </div>
      <button type="submit" class="btn btn-primary">検索</button>
    </form>

    <h3>検索結果</h3>
    <table class="table">
      <thead>
        <tr>
          <th>商品名</th>
          <th>商品の種類</th>
          <th>入庫時間</th>
          <th>出庫時間</th>
          <th>賞味期限</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in searchResults" :key="item.productId">
          <td>{{ item.productName }}</td>
          <td>{{ item.productType }}</td>
          <td>{{ item.stockInTime }}</td>
          <td>{{ item.stockOutTime }}</td>
          <td>{{ item.expirationDate }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>


<script>
import axios from 'axios';


export default {

  data() {
    return {
      // 用于绑定到表单的数据模型
      searchQuery: {
        productName: '',
        productType: '',
        stockInTime: '',
        stockOutTime: '',
        expirationDate: ''
      },
      searchResults: [], // 用于存储搜索结果的数组

    };
  },
  
  methods: {
    async searchProducts() {
      try {
        // 构建查询字符串
        const queryParams = new URLSearchParams(this.searchQuery).toString();
        // 发送GET请求
        const response = await axios.get(`http://localhost:8080/search?${queryParams}`);
        // 设置searchResults为响应数据
        this.searchResults = response.data;
      } catch (error) {
        console.error('Error fetching products:', error);

      }
    }
  }

};


</script>

<style>
/* 全局样式 */
body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  padding: 20px;
  background-color: #f4f7f6;
  color: #333;
}

/* 搜索表单样式 */
.search-form {
  background-color: #ffffff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
}

.form-group {
  margin-bottom: 15px;
}

.form-group label {
  font-weight: 600;
  display: block;
  margin-bottom: 5px;
}

.form-control {
  width: 100%;
  padding: 10px 15px;
  margin-top: 5px;
  border: 1px solid #ced4da;
  border-radius: 4px;
  box-sizing: border-box; /* 添加box-sizing */
}

/* 按钮样式 */
.btn-primary {
  background-color: #007bff;
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  display: inline-block; /* 修正按钮对齐问题 */
  font-weight: 600;
}

.btn-primary:hover {
  background-color: #0056b3;
}

/* 表格样式 */
.table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
  background-color: #ffffff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.table thead th {
  background-color: #007bff;
  color: white;
  text-align: center;
  font-weight: 600;
}

.table td, 
.table th {
  text-align: center;
  padding: 12px;
  border-bottom: 1px solid #ddd;
}

.table tr:nth-child(even) {
  background-color: #f2f2f2;
}


</style>



