import { createRouter, createWebHashHistory } from 'vue-router'
import { gallery_demos } from '../components/gallery-index'

const routes = [
    {
        path: '/',
        redirect: '/hello-world',
    },
].concat(gallery_demos)

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

router.beforeEach((to) => {
    document.title = to.meta.title
})

export default router
