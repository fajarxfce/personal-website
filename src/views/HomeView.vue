<script setup>
import Layout from "@/layouts/BaseLayout.vue";
import Plum from "@/components/Plum/index.vue";
import Info from "@/components/Info/index.vue";
import Resume from "@/components/Resume/index.vue";
import Contact from "@/components/Contact/index.vue";
import Project from "@/components/Project/index.vue";
import Footer from "@/components/Footer/index.vue";
</script>
<template>
  <Layout>
    <Info />
    <Contact />
    <Resume />
    <Project />
    <Footer />
    <Plum />
  </Layout>
</template>
