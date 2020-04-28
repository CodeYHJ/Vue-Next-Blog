<template>
  <div class="Card">
    <h3 class="title">{{ cardData.title }}</h3>
    <div class="dsc">{{ cardData.description }}</div>
    <router-link :to="navPath" class="go">继续阅读全文</router-link>
  </div>
</template>

<script>
import { onMounted, computed } from "vue";

export default {
  name: "Card",
  props: {
    cardData: Object
  },
  setup(props) {
    let navPath = computed(() => {
      return `/dsc?slug=${props.cardData.slug}`;
    });
    return {
        navPath
    };
  }
};
</script>

<style lang = "less" scoped >
.Card {
  width: 80%;
  height: 100px;
  border-bottom: 1px solid #000000;
  padding: 10px 0;
  cursor: default;
}
.dsc {
  font-size: 8px;
  height: 40px;
  padding: 10px 0;
  overflow: hidden;
}
.go {
  cursor: pointer;
  color:rgb(85, 26, 139);
  &:link{
      color:rgb(85, 26, 139);
  }
}
</style>