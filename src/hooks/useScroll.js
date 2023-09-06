import { ref, onMounted, onUnmounted } from 'vue'

// 监听window创建的滚动
export default function useScroll() {
    const isReachBottom = ref(false)

    const scrollListenerHandler = () => {
        const clientHeight = document.documentElement.clientHeight;
        const scrollTop = document.documentElement.scrollTop;
        const scrollHeight = document.documentElement.scrollHeight;
        console.log(clientHeight, Math.round(scrollTop), scrollHeight);
        if (clientHeight + Math.round(scrollTop) >= scrollHeight) {
            isReachBottom.value = true
        }
    }

    onMounted(() => {
        window.addEventListener("scroll", scrollListenerHandler)
    })

    onUnmounted(() => {
        window.removeEventListener("scroll", scrollListenerHandler)
    })

    return { isReachBottom }
}
