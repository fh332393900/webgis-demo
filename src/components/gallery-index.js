export const gallery_demos = [
    {
        name: 'hello-world',
        path: '/' + 'hello-world',
        img: require('../assets/hello-world.jpg'),
        component: () => import('./cesium/hello-world.vue'),
        meta: {
            title: 'Hello World'
        },
    },
]
