<script setup>
import router from '@/router';

const cancelClick = () => {
    router.back()
}


/**tab的切换 */
// const tabActive = ref()

</script>
<template>
    <div class="city top-page">
        <!-- 1.搜索框 -->
        <van-search v-model="searchValue" placeholder="城市/区域/位置" shape="round" show-action @cancel="cancelClick" />


        <!-- 2.tab的切换 -->
        <!-- tabActive默认索引 -->
        <van-tabs v-model:active="active" color="#ff9854">
            <van-tab title="国内·港澳台"></van-tab>
            <van-tab title="海外"></van-tab>
        </van-tabs>
    </div>
</template>
<style lang='less' scoped></style>