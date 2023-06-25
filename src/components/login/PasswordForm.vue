<template>
    <div class="form-password">
      <img src="../../assets/login/lock.png" alt="" width="20px" class="form-icon">
      <input type="password" placeholder="新密码" v-model="formData.password" @keydown.enter="submitForm" oninput="value=value.replace(/[^0-9a-zA-Z]/g,'')">
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        formData: {
          password: ''
        }
      };
    },
    methods: {
      submitForm() {
        // 处理表单提交逻辑
      }
    }
  };
  </script>
  