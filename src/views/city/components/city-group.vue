<script setup>
import useCityStore from '@/stores/modules/city';
import { computed } from 'vue'
import { useRouter } from 'vue-router';

// 定义props
const props = defineProps({
    groupData: {
        type: Object,
        default: () => ({})
    }
})

/**动态索引 */
const indexList = computed(() => {
    const list = props.groupData.cities.map(item => item.group)
    list.unshift("热门")
    return list
})

// 监听城市的点击
const router = useRouter()
const cityStore = useCityStore()
const cityClick = (city) => {
    // 选中当前城市
    cityStore.currentCity = city

    // 返回上一级
    router.back()
}

</script>

<template>
    <div class="city-group">
        <van-index-bar :sticky="false" :index-list="indexList">
            <van-index-anchor index="热门" />
            <div class="list">
                <template v-for="(city, index) in groupData.hotCities">
                    <div class="city" @click="cityClick(city)">{{ city.cityName }}</div>
                </template>
            </div>
            <template v-for="(group, index) in groupData.cities" :key="index">
                <van-index-anchor :index="group.group" />
                <template v-for="(city, indey) in group.cities" :key="indey">
                    <van-cell :title="city.cityName" @click="cityClick(city)" />
                </template>
            </template>

        </van-index-bar>
    </div>
</template>
  

  
<style lang="less" scoped>
.list {
    display: flex;
    flex-wrap: wrap;
    padding: 10px;

    .city {
        width: 74px;
        height: 30px;
        line-height: 30px;
        border-radius: 4px;
        font-size: 17px;
        color: #000;
        text-align: center;
        background-color: #fff4ec;
        margin: 6px 5px;
        padding: 3px 0;
    }
}
</style>
  