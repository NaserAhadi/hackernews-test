<template>
    <div>
        <ChildComponent testProp="some-value"/>
    </div>
</template>

<script>
import ChildComponent from '@/components/ChildComponent'
    export default {
        name: 'TestComponent',
        components:{
            ChildComponent
        }
    }
</script>

<style lang="scss" scoped>

</style>