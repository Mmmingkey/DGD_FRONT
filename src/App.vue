<template>
  <a-header/>
<!--  <left-bar/>-->
  <div id="container">
    <router-view/>
  </div>
<!--  <right-bar/>-->
  <a-footer/>
</template>

<script setup>
  import AHeader from "@/views/layout/AHeader.vue";
  import AFooter from "@/views/layout/AFooter.vue";
  // import leftBar from "@/views/layout/LeftBar.vue";
  // import rightBar from "@/views/layout/RightBar.vue";

</script>