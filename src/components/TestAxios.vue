<template>

</template>

<script>
  import axios from 'axios';
    export default {
        name: "TestAxios",
      mounted() {
        axios.post('/user', {
          firstName: 'Fred',
          lastName: 'Flintstone'
        })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
      }
    }
</script>

<style scoped>

</style>
