<template>
    <transition name="fade">
        <div>componentName</div>
    </transition>
</template>

<script>
export default {
    name: 'componentName',
    components: {

    },
    data () {
        return {

        }
    },
    methods: {
        async getData () {
            // 数据请求
            // let res = await this.$axios.post("xx.do", data);

            // 数据处理完成后，展示页面
            this.$nextTick(() => {
            });
        }
    },
    mounted () {
        this.getData();
    }
}
</script>

<style lang="less" scoped>
</style>
