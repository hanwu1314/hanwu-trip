import { ref, onMounted, onUnmounted } from 'vue';

export default function useNewScroll() {
    const isReachBottom = ref(false);
    // 定义观察器的回调函数
    const handleIntersection = (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                // 到达底部
                isReachBottom.value = true;
            }
        });
    };

    const observer = new IntersectionObserver(handleIntersection, {
        root: null, // 使用默认的根元素，即视口
        rootMargin: '0px',
        threshold: 0.1, // 当目标元素95%可见时触发回调
    });

    const contentBottomElement = ref(null);

    onMounted(() => {
        contentBottomElement.value = document.querySelector('.content-bottom');
        if (contentBottomElement.value) {
            // 将观察器绑定到内容底部元素上
            observer.observe(contentBottomElement.value);
        }
    });

    onUnmounted(() => {
        if (contentBottomElement.value) {
            // 停止观察，以免多次触发
            observer.unobserve(contentBottomElement.value);
        }
    });

    return { isReachBottom };
}