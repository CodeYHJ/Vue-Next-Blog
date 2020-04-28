<template>
  <BaseLayout>
    <div class="Content">
      <div class="total">总共{{ article.length }}篇文章</div>
      <div class="cardList">
        <Card :cardData="item" v-for="item in article" :key="item.id" />
      </div>
    </div>
  </BaseLayout>
</template>

<script>
import BaseLayout from "@com/BaseLayout/index.vue";
import Card from "@com/Card/index.vue";
import { getAllArticles } from "@api/artils.js";
import { onMounted, ref, watchEffect } from "vue";
export default {
  name: "Home",
  components: { BaseLayout, Card },
  setup() {
    let articleList = ref([]);
    watchEffect(() => {
      getAllArticles().then(res => {
        const { list } = res;
        articleList.value = list;
      });
    });

    return {
      article: articleList
    };
  }
};
</script>

<style lang="less" scoped>
.Content {
  // height: 100%;
  margin: 0 30px;
}
.cardList {
  display: flex;
  flex-direction: column;
  padding:10px 0
}
.total {
  padding:6px 0;
  border-bottom: 1px solid #000000;
}
</style>