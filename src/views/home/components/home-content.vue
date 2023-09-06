<script setup>
import useHomeStore from '@/stores/modules/home';
import HouseItemV9 from "@/components/house-item-v9/house-item-v9.vue"
import HouseItemV3 from "@/components/house-item-v3/house-item-v3.vue"
import { storeToRefs } from 'pinia';

const homeStore = useHomeStore()
const { houselist } = storeToRefs(homeStore)
</script>
<template>
    <div class="home-content">
        <div class="content">
            <h2 class="title">热门精选</h2>
            <div class="list">
                <template v-for="(item, index) in houselist" :key="item.data.houseId">
                    <house-item-v9 v-if="item.discoveryContentType === 9" :item-data="item.data" />
                    <house-item-v3 v-else-if="item.discoveryContentType === 3" :item-data="item.data" />
                </template>
                <div v-if="homeStore.noMoreData" class="noMore">
                    -- 没有更多了 --
                </div>
            </div>
        </div>
    </div>
    <!-- .content-bottom 类名放在这里，表示列表底部 -->
    <div class="content-bottom"></div>
</template>
<style lang='less' scoped>
.content {
    padding: 10px 8px;

    .title {
        font-family: PingFangSC-Medium;
        font-size: 18px;
        color: #333;
        line-height: 22px;
        background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAAwCAMAAADtsU7hAAAAclBMVEUAAAD/l0j/l0b/l0b/l0f/lkf/l0b/l0b/l0b/l0f/l0b/l0X/lkb/lkX/lkb/mUf/lkX/l0b/lkX/l0X/l0b/l0X/lkb/l0b/lkX/lkX/lkb/mEn/lkb/lkX/mUv/lkb/lkb/l0b/l0b/l1P/m0z/nk01eoyFAAAAJnRSTlMAMj9EOjZoT0kplI+BYpklhlSofIptWS6ddXEgpKEZX3itXAcTDG1j5z8AAAK1SURBVFjDxdYNdqowEIbhISgYEQHlT6KgJux/i3cKTTiY0CqE3ncBfc58qR5hXqJw/TwMc59QAX8W24VZlnlfhWHY5Jsa/iBBvApTMMrNMylaWDeWXy6XL3YMP/OcrHl21NzvGtz0cJ64A80ppVEf61uyCPXO92+40i5GOBlo7mIE22DbreM48/dg4RmTcGWEE58IDd4ugsXzcBhgtfUwdS/7vu9wixfz3QFTsHL1i7FdZO1i5x738PQbDxejTGorF9deHCv4nYuxjYWLSZxK2Dx1M4Z7efHFdZai+yMcrgG7KRabp87Mb7yT8IKp6yoI0o8v3i2G3TRAGHsPzi1NXVf7ADNPjbT39F3XT3R44dQk2CNsnBrl54Zx6OL11rf4z9V6+/0knBEBo4STdDBmuhh7F47So4Kx0dQhNf8osTG1fzxKOH25uIkm/yfcpVO3lyNmnNobWDMt3TkwDcoSYcPUlfP7r8D5U/sluqaLzy6HX+N0aupC/Dxzdetg/eJGvPl52BgvRpn9NFVwuxkvvhcffNG6xouLIpqcjJQ3M5y38EHcMV2MNJ1Yrbleryhr8Fme+8HRo4sVTGvT4xxOHVxiI7iR5350tGFqhCnT5mb7E8L61AcHZlWTl6k7WJc319PJdLEnz51xtBGOotFfzB8nCY8uJrAgpqYe4AgTIOOXxzd8wwb4zGBR7dZ0ccSkLNLHw3RxyGFhnJouZqzm3SLlQ8KjNyZgoRpdebK6uJedE7JqagXHDKzUOr1byKmVXKGqT521YClO9akxASi/XIxwAhZjCI+m7l2UB7iX9w5YTWhTC+jKxlOnNViuLdTHSbpKHuBLC9bjkXpjTIDKG964gVVi42+uQZawCysl5NQvD+l1cFnAarUmFwsRDhisGI8QRleXY2GZ0mV09VwOayfg//cP8g+H7R0Q1dgAAAAASUVORK5CYII=) no-repeat;
        font-weight: 500;
        background-size: 50% 50%;
        background-position-y: 6px;
        background-position-x: center;
        width: 72px;
        height: 40px;
        line-height: 40px;
    }
}

.list {
    display: flex;
    flex-wrap: wrap;
}

.noMore {
    text-align: center;
    width: 100%;
    margin: 20px 0;
    color: #999;
}
</style>