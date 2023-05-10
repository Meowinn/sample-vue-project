<script setup>
import { useFlash } from '../composables/useFlash';

let {flash} = useFlash()

</script>



<template>
   <p>
      <button @click="flash('Yay!','It works on the about page foo!', 'info')">Click Me</button>
    </p>
</template>

<style>

</style>
