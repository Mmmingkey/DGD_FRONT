<template>
  <div>
    <input type="text" v-model="input" @keyup.enter="instText">
    <button @click="instText">입력</button>
  </div>

  <ul>
    <li v-for="( input, idx) in inputArr" :key="idx">
      > {{ input }}
    </li>
  </ul>
</template>

<script setup>
  // import axios from 'axios';
  import { ref, onMounted } from 'vue';

   function getMsg(){
    fetch('/api/message/get', {
      method: 'GET'
    })
        .then( res => res.json())
        .then( res => inputArr.value = res)
  }

  onMounted( () => {
    getMsg();

    fetch('/api/test')
  });

  const inputArr = ref([]);
  const input = ref();
  const instText = () => {
    fetch( '/api/message/add', {
        method: 'POST',
        headers: {
          'Content-Type' : 'text/plain'
        },
        body: input.value
      }
    ).then(res => {
      console.log(res);
      if(res){
        getMsg();
      }
    });
    input.value = '';
  }

</script>

<style scoped>
  div{
    word-break: break-word;
  }
</style>