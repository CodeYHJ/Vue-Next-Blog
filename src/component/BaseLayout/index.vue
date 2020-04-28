<template>
  <div class="BaseLayout">
    <HeaderCom />
    <div class="content">
      <slot />
    </div>
    <FootCom />
  </div>
</template>

<script>
import HeaderCom from "./component/Header/index.vue";
import FootCom from "./component/Footer/index.vue";

export default {
  name: "BaseLayout",
  components: { HeaderCom, FootCom },
  setup() {}
};
</script>

<style lang = "less" >
.BaseLayout {
  height: 100%;
  display: flex;
  flex-direction: column;
  .content {
    flex: 1;
  }
}
</style>