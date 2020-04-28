<template>
  <div class="footer">
    <a href="http://www.miit.gov.cn/">粤ICP备17154839号-1</a>
  </div>
</template>

<script>
export default {
  name: "Footer",
  setup() {}
};
</script>

<style lang="less" scoped>
.footer {
  width: 100%;
  padding: 75px 0;
  text-align: center;
  border-top: 1px solid #000000;
  a {
    text-decoration: none;
    color: #19a1f8;
    &:link {
      color: #19a1f8;
    }
  }
}
</style>