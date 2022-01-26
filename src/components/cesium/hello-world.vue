<template>
    <div id="cesiumContainer"></div>
</template>

<script>
import 'cesium/Build/Cesium/Widgets/widgets.css'
import { Viewer, FeatureDetection } from 'cesium'
export default {
    mounted() {
        this.init()
    },
    methods: {
        init() {
            var viewer = new Viewer('cesiumContainer')
            if (FeatureDetection.supportsImageRenderingPixelated()) {
                //判断是否支持图像渲染像素化处理
                viewer.resolutionScale = window.devicePixelRatio
            }
            viewer.scene.postProcessStages.fxaa.enabled = true
        },
    },
}
</script>

<style lang="less" scoped>
#cesiumContainer {
    position: absolute;
    height: 100%;
    width: 100%;
}
</style>
