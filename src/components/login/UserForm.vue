<template>
  <div class="form-row">
    <div class="col-md-12 d-flex align-items-center">
      <img :src="icon" alt="" class="form-icon" />
      <div class="input-container">
        <input
          :class="inputStyle"
          :type="placeholder === 'password' ? 'password' : 'text'"
          :placeholder="placeholder"
          :value="value"
          @input="updateValue"
        />
        <div class="invalid-feedback message">
          Please provide a {{ placeholder }}.
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    icon: {
      type: String,
      required: true,
    },
    placeholder: {
      type: String,
      required: true,
    },
    value: {
      type: String,
      required: true,
    },
    inputStyle: {
      type: String,
      required: true,
      default: "form-control border border-primary",
    },
  },

  setup(props, { emit }) {
    const updateValue = (event) => {
      emit("update:value", event.target.value);
    };

    return {
      updateValue,
    };
  },
};
</script>

<style lang="scss" scoped>
img {
  width: 20px;
  height: 20px;
}
.form-icon {
  position: relative;
  top: -6px;
  left: 25px;
  z-index: 5;
}
.input-container {
  padding-bottom: 10px;
  position: relative;
  input {
    width: 250px;
    border: 0px;
    padding: 5px 0 5px 30px;
    box-sizing: border-box;
    border-bottom: 1px solid #eee;
    font-size: 16px;
    outline: none;
    margin-bottom: 5px;
  }

  .message {
    position: absolute;
    top: 30px;
    left: 0px;
    font-size: 12px;
  }
}
</style>
