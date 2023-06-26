<template>
  <div>
    <label>
      <input type="checkbox" :checked="checked" @change="handleChange" />
      {{ boxName }}
    </label>
  </div>
</template>
  
<script>
export default {
  props: {
    boxName: {
      type: String,
      required: true,
    },
    checked: {
      type: Boolean,
      default: false,
    },
    callback: {
      type: Function,
      required: true,
    },
  },
  setup(props) {
    const handleChange = (event) => {
      props.callback(event.target.checked);
    };

    return {
      handleChange,
    };
  },
};
</script>

<style lang="scss" scoped>
label {
  font-size: 13px;
  color: rgb(138, 144, 151);
}
</style>
