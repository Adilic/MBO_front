<template>
  <div class="addProcuct">
    <form @submit.prevent="submitProduct">
      <div>
        <label for="productName">商品名:</label>
        <input id="productName" v-model="product.productName" required>

      </div>
      <div>
        <label for="productType">商品の種類:</label>
        <input id="productType" v-model="product.productType" required>

      </div>
      <div>
        <label for="stockInTime">入库時間:</label>
        <input id="stockInTime" type="date" v-model="product.stockInTime" required>

      </div>
      <div>
        <label for="stockOutTime">出库時間:</label>
        <input id="stockOutTime" type="date" v-model="product.stockOutTime" required>

      </div>
      <div>
        <label for="expirationDate">賞味期限:</label>
        <input id="expirationDate" type="date" v-model="product.expirationDate" required>

      </div>
      <button type="submit">追加</button>
      <button>
      <router-link to="/shohinzaiko">戻る</router-link>
      </button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  data() {
    return {
      product: {
        productName: '',
        productType: '',
        stockInTime: '',
        stockOutTime: '',
        expirationDate: ''
      }
    };
  },
  methods: {
   

    submitProduct() {
      const url = 'http://localhost:8080/add'; 
      // 调用API提交数据
      axios.post(url, this.product)
      .then(() => {
        // 这里可以根据后端的响应进行一些操作
        // 例如，如果后端返回了创建的产品信息，可以在这里处理
        alert('処理成功');

        // 提交成功后，使用编程式导航返回到指定页面
        
      })
      .catch(error => {
        // 错误处理
        // 如果错误是因为用户输入不合法，可以在这里设置一些错误消息到data属性，然后在模板中显示它们
        console.error('処理失敗:', error);
        
      });
    }
  }
    }

</script>
