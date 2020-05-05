

<script>
import { ref, onMounted } from "vue";

import { useRoute } from "../../libaray/vue-router-next";

import { getArticleDsc } from "@api/artils.js";

export default {
  name: "Dsc",
  setup() {
    const route = useRoute();
    const {
      query: { slug }
    } = route;
    let articleContent = ref();
    let articleTitle = ref();

    onMounted(() => {
      getArticleDsc(slug).then(res => {
        const { article } = res;
        let { body_html, title } = article;
        articleTitle.value = title;
        articleContent.value = body_html;
      });
    });

    return {
      articleContent,
      articleTitle
    };
  }
};
</script>

<template>
  <div class="Dsc">
    <h2 class="title">{{ articleTitle }}</h2>
    <a class="yuque" href="https://www.yuque.com/u120129/aygter">想体验更好的阅读体验，请点击！！</a>
    <div class="dscContent" v-html="articleContent" />
    <div class="comment" />
  </div>
</template>

<style lang="less" >
.Dsc {
  flex: 1;
  margin: 20px 30px;
  .title {
    text-align: center;
    padding: 75px 0;
    border-bottom: 1px solid #000000;
  }
  .yuque {
    margin: 75px 0;
    display: block;
  }
  .dscContent {
    padding: 75px 0;
    .cm-s-default {
      overflow: hidden;
      overflow-x: scroll;
    }
  }
}
</style>