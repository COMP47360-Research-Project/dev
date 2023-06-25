<template>
  <div class="container">
    <div class="row">
      <div class="col-md-6 mx-auto">
        <div class="box">
          <div class="header">
            <div class="header-left">
              <img src="../../assets/logo.png" alt="" />
              <span style="font-size: 16px; margin-left: 15px">LOGIN</span>
            </div>
            <div class="header-right"></div>
          </div>

          <div class="content">
            <C_Login v-if="status == 'login'" @toLink="toLink"></C_Login>
            <C_Register
              v-if="status == 'register'"
              @toLink="toLink"
            ></C_Register>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import C_Login from "./LoginView.vue";
import C_Register from "./RegisterView.vue";
export default {
  name: "LoginInterface",
  components: {
    C_Login,
    C_Register,
  },
  data() {
    return {
      status: "login",
    };
  },
  methods: {
    toLink(path) {
      this.status = path;
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  height: 100vh;
  background-image: url("../../assets/images/background3.jpg");
  background-size: cover;
  // caret-color: transparent;

  .box {
    background-color: rgb(255, 255, 255);
    border: 1px solid #ddd;
    // padding: 20px;
    text-align: center;
    position: relative;
    top: 30%;
    height: 400px;

    .header {
      width: 100%;
      height: 40%;
      background: linear-gradient(135deg, #17ead9, #6078ea);
      // box-sizing: border-box;
      display: flex;

      .header-left img {
        width: 20px;
      }
    }
  }
}
</style>
