<script setup>
import { useRouter } from 'vue-router';
import { computed, ref } from 'vue'
import useCityStore from '@/stores/modules/city';
import { storeToRefs } from 'pinia';
import CityGroup from './components/city-group.vue'

const router = useRouter()
/**tab标签 */
const tabActive = ref()
/**输入框数据 */
const searchValue = ref("")
/**点击取消 */
const cancelClick = () => {
    router.back()
}
/**城市Store */
const cityStore = useCityStore()
cityStore.fetchAllCitiesData()
const { allCities } = storeToRefs(cityStore)

/**获取选中标签后的数据 */
const currentGroup = computed(() => allCities.value[tabActive.value])

</script>
<template>
    <div class="city top-page">
        <div class="top">
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
        <div class="content">
            <template v-for="(value, key, index) in allCities">
                <city-group v-show="tabActive === key" :group-data="value" />
            </template>
        </div>
    </div>
</template>
<style lang='less' scoped>
.top {
    position: relative;
    z-index: 9;
}

// 布局滚动
.content {
    height: calc(100vh - 98px);
    overflow-y: auto;
}
</style> 