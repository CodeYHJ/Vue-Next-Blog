

<script>
import { computed } from "vue";

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
<template>
  <div class="Card">
    <h3 class="title">{{ cardData.title }}</h3>
    <div class="dsc">{{ cardData.description }}</div>
    <router-link :to="navPath" class="go">继续阅读全文</router-link>
  </div>
</template>

<style lang = "less"  >
.Card {
  width: 80%;
  border-bottom: 1px solid #000000;
  padding: 75px 0;
  cursor: default;
  .dsc {
    padding: 75px 0;
    overflow: hidden;
  }
  .go {
    font-size: 50px;
    cursor: pointer;
    color: rgb(85, 26, 139);
    padding-left: 75px;
    &:link {
      color: rgb(85, 26, 139);
    }
  }
  &:nth-last-child(1) {
    border: none;
  }
}
</style>