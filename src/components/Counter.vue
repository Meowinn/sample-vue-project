<template>
    <div> 
        <div>{{ counter.count  }}</div>
        <button 
        @click="counter.increment" 
        :disabled="counter.remaining == 0">Remaining:{{ counter.remaining }}
        </button>
    </div>
    
</template>

<script setup>
import {useCounterStore} from '../stores/stateCounter'

let counter = useCounterStore();
</script>
