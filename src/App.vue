
<script setup lang="ts">
  import { NonExistent } from './doesNotExist'; // build will fail

</script>

<template>
  <div class="hello">
    <h1>Hi!</h1>
  </div>
</template>

<style scoped>
.hello {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  text-align: center;
}

h1 {
  font-size: 3rem;
  color: #42b983;
  margin-bottom: 1rem;
}

p {
  font-size: 1.25rem;
  color: #666;
}
</style>
