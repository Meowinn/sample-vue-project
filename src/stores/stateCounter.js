import {defineStore} from "pinia";
import swal from "sweetalert";

export let useCounterStore = defineStore('my-counter', {
    state() {
        return {
            count: 0
        }
    },
    actions: {
        increment() {
            this.count++;
        }
    },
    getters: {
        remaining() {
            if(this.count == 10) {
                swal('Youve reached max boi');
            }
            return 10 - this.count;
        }
    }
});