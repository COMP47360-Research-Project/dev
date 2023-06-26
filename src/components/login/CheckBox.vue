<template>
    <div>
      <label>
        <input type="checkbox" :checked="checked" @change="handleChange" />
        {{ boxName }}
      </label>
    </div>
  </template>
  
  <script>
//   import { defineProps, defineEmits } from 'vue';
  
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

<style lang="scss" scoped></style>
