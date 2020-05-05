
<script>
import { ref } from "vue";

export default {
  name: "App",
  setup() {
    const count = ref(0);
    const inc = () => {
      count.value++;
    };

    return {
      count,
      inc
    };
  }
};
</script>

<template>
  <router-view />
</template>

