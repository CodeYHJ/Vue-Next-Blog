<template>
  <div class="Dsc">{{articleData}}</div>
</template>
<script>
import { onMounted, watchEffect,ref } from "vue";
import { useRoute } from "../../libaray/vue-router-next";
import { getArticleDsc } from "@api/artils.js";

export default {
  name: "Dsc",
  setup(props) {
    const route = useRoute();
    const {
      query: { slug }
    } = route;
    let articleData = ref();

    watchEffect(() => {
      getArticleDsc(slug).then(res => {
        console.log(res, "222222");
        const { article } = res;
        articleData.value = article;
      });
    });
    return {
        articleData
    }
  }
};
</script>

<style lang="less" scoped>
.Dsc {
}
</style>