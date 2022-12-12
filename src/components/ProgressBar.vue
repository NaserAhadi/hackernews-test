<template>
    <div :class="{'hidden': hidden}" :style="{ 'width': `${width}%`}" ></div>
</template>

<script>
export default{
    data(){
        return {
            hidden: true,
            width: 0
        }
    },
    methods:{
        start(){
            this.hidden = false
            this.width = 0
        },
        finish(){
            this.width = 100
            this.hidden = true
        }
    },
}
</script>