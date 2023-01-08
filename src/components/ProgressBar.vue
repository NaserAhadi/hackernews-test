<template>
    <div :class="{'hidden': hidden}" :style="{ 'width': `${width}%`}" ></div>
</template>

<script>
export default{
    data(){
        return {
            hidden: true,
            width: 0,
            timer:0
        }
    },
    methods:{
        start(){
            this.hidden = false
            this.width = 0
            this.timer = setInterval(() => {
                    this.width ++
                }, 100)
            // this.$nextTick(() => {
            //     this.timer = setTimeout(() => {
            //         this.width ++
            //         console.log(this.width)
            //     }, 100)
            // })
        },
        finish(){
            this.width = 100
            this.hidden = true
            clearInterval(this.timer)
        }
    },
}
</script>