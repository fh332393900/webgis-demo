const dict = {
    public: [
        { name: 'tianditu_map', title: '天地图' },
        { name: 'layers_split', title: '卷帘分屏' },
        { name: 'cesium_threejs', title: 'Cesium集成Threejs' },
        { name: 'optimizing_lots_of_objects', title: 'Threejs加载大量几何体' },
    ],
}

function createRouter(dict) {
    const result = []
    for (let key in dict) {
        let items = dict[key]
        for (let item of items) {
            let name = item['name']
            let title = item['title']
            result.push({
                name: name,
                path: '/' + name,
                img: require('./' + key + '/' + name + '.gif'),
                component: () => import('./' + key + '/' + name + '.vue'),
                meta: {
                    title: title,
                },
            })
        }
    }
    return result
}

export const gallery_demos = createRouter(dict)
