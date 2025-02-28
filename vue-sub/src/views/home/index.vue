<template>
  <div>
    <h1>Home Page</h1>
    <button @click="move">跳转子页面</button>
  </div>
</template>
<script setup>
import { useRouter } from "vue-router"

const router = useRouter()
const move = () => {
  console.log("move")
  router.push({ path: "/person" })
}
</script>
<script>
export default {
  name: "HomePage",
  props: {
    msg: String
  }
}
</script>

<style scoped></style>
