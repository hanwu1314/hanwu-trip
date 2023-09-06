<script setup>
import { watch, computed } from 'vue';
import HomeNavBar from './components/home-nav-bar.vue'
import HomeSearcBox from './components/home-search-box.vue'
import HomeContent from './components/home-content.vue'
import useHomeStore from '@/stores/modules/home';
import useScroll from '@/hooks/useScroll'
import useNewScroll from '@/hooks/useNewScroll'

const homeStore = useHomeStore()
homeStore.fetchHotSuggestData()
homeStore.fetchHomeHouselist()

const { isReachBottom } = useNewScroll()
watch(isReachBottom, (newValue) => {
    if (newValue) {
        homeStore.fetchHomeHouselist().then(() => {
            isReachBottom.value = false;
        })
    }
})
const { scrollTop } = useScroll()
// 定义的可响应式数据, 依赖另外一个可响应式的数据, 那么可以使用计算函数(computed)
const isShowSearchBar = computed(() => {
    return scrollTop.value >= 360
})


</script>
<template>
    <div class="home">
        <HomeNavBar />
        <div class="banner">
            <img src="@/assets/img/home/banner.webp" alt="">
        </div>
        <HomeSearcBox />
        <div class="search-bar" v-if="isShowSearchBar">
            search-bar...喵
        </div>
        <HomeContent />
    </div>
</template>
<style lang='less' scoped>
.home {
    padding-bottom: 60px;
}

.banner {
    img {
        width: 100%;
    }
}

.search-bar {
    position: fixed;
    z-index: 9;
    top: 0;
    left: 0;
    right: 0;
    height: 45px;
    padding: 16px 16px 10px;
    box-shadow: 0 2px 30px 0 rgba(5, 17, 40, .15);
    background-color: #fff;
}
</style>