<script setup>
import { useRouter } from 'vue-router';
import { ref } from 'vue'
// import useCityStore from '@/stores/modules/city';
import { getCityAll } from "@/services"

const router = useRouter()
/**tab标签 */
const tabActive = ref(0)
/**输入框数据 */
const searchValue = ref("")
/**点击取消 */
const cancelClick = () => {
    router.back()
}
/**网络请求：请求城市的数据 */
const allCities = ref({})

// 获取城市数据
getCityAll().then(res => {
    allCities.value = res.data
})




</script>
<template>
    <div class="city top-page">
        <!-- 1.搜索框 -->
        <van-search v-model="searchValue" placeholder="城市/区域/位置" shape="round" show-action @cancel="cancelClick" />

        <!-- 2.tab的切换 -->
        <!-- tabActive默认索引 -->
        <van-tabs v-model:active="tabActive" color="#ff9854" line-height="3">
            <template v-for="(value, key, index) in allCities" :key="key">
                <van-tab :title="value.title" :name="key"></van-tab>
            </template>
        </van-tabs>
    </div>
</template>
<style lang='less' scoped></style>