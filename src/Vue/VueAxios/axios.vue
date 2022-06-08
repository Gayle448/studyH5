<template lang=''>

</template>

<script>
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios,axios)

export default {
    data(){
        return {
            fileurl:''
        }
    }
},
methods: {
    test(){
        Vue.axios.get(this.fileurl).then((response) => {
            console.log(response.data);
        })
        this.axios.get(this.fileurl).then((response) => {
            console.log(response.data);
        })
        this.$http.get(this.fileurl).then((response) => {
            console.log(response.data);
        })
    }
},
</script>