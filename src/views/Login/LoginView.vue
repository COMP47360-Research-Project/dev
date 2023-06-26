<template>
  <div class="login-container">
    <div class="avatar">
      <img src="../../assets/login/avatar.jpg" alt="" />
    </div>

    <div class="form-container">
      <UserForm :value="formData.username" :icon="require('@/assets/login/user.png')" placeholder="username"
        :inputStyle="inputStyleUser" @update:value="formData.username = $event" />
      <UserForm :value="formData.password" :icon="require('@/assets/login/lock.png')" placeholder="password"
        :inputStyle="inputStylePass" @update:value="formData.password = $event" />
      <div class="checkbox-container">
        <CheckBox boxName="Auto login" :checked="autoLogin" :callback="handleAutoLogin" />
        <CheckBox boxName="Remember Password" :checked="RemPasWor" :callback="handleRemPasWor" />
      </div>
      <button type="button" class="btn btn-outline-primary" @click="submitForm">
        <span class="form-btn-text"> LOGIN</span>
      </button>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { ElMessage } from "element-plus";
import UserForm from "@/components/login/UserForm.vue";
import CheckBox from "@/components/login/CheckBox.vue";

export default {
  components: {
    UserForm,
    CheckBox,
  },
  setup() {
    const formData = {
      username: "",
      password: "",
    };

    const inputStyleUser = ref("form-control border border-primary");
    const inputStylePass = ref("form-control border border-primary");

    const submitForm = () => {
      console.log(formData.username);
      console.log(formData.password);

      ElMessage({
        message: "success",
        type: "success",
      });

      if (!formData.username) inputStyleUser.value += " is-invalid";
      else inputStyleUser.value = "form-control border border-primary";
      if (!formData.password) inputStylePass.value += " is-invalid";
      else inputStylePass.value = "form-control border border-primary";
    };

    const autoLogin = ref(false);
    const RemPasWor = ref(false)

    const handleAutoLogin = (value) => {
      autoLogin.value = value;
      if (autoLogin.value) RemPasWor.value = value;
      window.localStorage.setItem("auto_login", autoLogin.value)
    };

    const handleRemPasWor = (value) => {
      RemPasWor.value = value;
      window.localStorage.setItem("remember_password", RemPasWor.value)
    }

    return {
      formData,
      submitForm,
      inputStyleUser,
      inputStylePass,
      autoLogin,
      handleAutoLogin,
      RemPasWor,
      handleRemPasWor
    };
  },
};
</script>

<style lang="scss" scoped>
.avatar {
  img {
    position: absolute;
    overflow: hidden;
    border-radius: 50%;
    width: 80px;
    height: 80px;
    top: 35%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 999;

    @media (min-width: 992px) {
      width: 100px;
      height: 100px;
    }

    @media (max-width: 992px) {
      width: 80px;
      height: 80px;
    }
  }
}

.form-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  top: 50px;

  button {
    width: 250px;
  }

  .checkbox-container {
    width: 250px;
    display: flex;
    justify-content: space-between;
  }
}
</style>
