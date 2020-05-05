<script>
import BaseLayout from "@com/BaseLayout/index.vue";
import Card from "@com/Card/index.vue";
import { getAllArticles } from "@api/artils.js";
import { ref, onMounted } from "vue";
export default {
  name: "Home",
  components: { BaseLayout, Card },
  setup() {
    let articleList = ref([]);
    onMounted(() => {
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

<template>
  <BaseLayout>
    <div class="Home">
      <div class="total">总共{{ article.length }}篇文章</div>
      <div class="cardList">
        <Card v-for="item in article" :key="item.id" :card-data="item" />
      </div>
    </div>
  </BaseLayout>
</template>

<style lang="less">
.Home {
  flex: 1;
  margin: 0 30px;
  .cardList {
    display: flex;
    flex-direction: column;
    padding: 35px 0;
  }
  .total {
    padding: 35px 0;
    border-bottom: 1px solid #000000;
  }
}
</style>
