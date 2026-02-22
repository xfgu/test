<template>
  <div class="map-root">
    <div ref="mapRef" class="map-canvas"></div>
    <div class="map-legend">
      <div class="legend-title">图层说明</div>
      <div class="legend-row"><span class="dot dot-high"></span>高风险区域</div>
      <div class="legend-row"><span class="dot dot-medium"></span>中风险区域</div>
      <div class="legend-row"><span class="dot dot-low"></span>低风险区域</div>
      <div class="legend-row"><span class="line line-high"></span>高风险路线</div>
      <div class="legend-row"><span class="line line-medium"></span>中风险路线</div>
      <div class="legend-row"><span class="line line-low"></span>低风险路线</div>
      <div class="legend-row"><span class="dot dot-hub"></span>枢纽/仓储</div>
      <div class="legend-row"><span class="dot dot-supplier"></span>关键供应商</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue';
import { Scene, PointLayer, LineLayer, PolygonLayer, Popup } from '@antv/l7';
import { GaodeMap } from '@antv/l7-maps';
import { mapConfig } from '../config/map';
import { facilities } from '../data/facilities';
import { routes } from '../data/routes';
import { riskAreas } from '../data/riskAreas';

const mapRef = ref<HTMLDivElement | null>(null);
let scene: Scene | null = null;

const riskColors: Record<string, string> = {
  high: '#ff4d4f',
  medium: '#faad14',
  low: '#52c41a'
};

onMounted(() => {
  if (!mapRef.value) return;

  scene = new Scene({
    id: mapRef.value,
    map: new GaodeMap({
      style: mapConfig.style,
      center: [112.5, 30.5],
      zoom: 4.6,
      pitch: 35,
      rotation: -15,
      token: mapConfig.token
    })
  });

  scene.on('loaded', () => {
    if (!scene) return;

    const polygonLayer = new PolygonLayer({
      autoFit: false,
      zIndex: 1
    })
      .source(riskAreas, {
        parser: {
          type: 'json',
          coordinates: 'coordinates'
        }
      })
      .color('level', (level: string) => riskColors[level] ?? '#d9d9d9')
      .shape('fill')
      .style({
        opacity: 0.25,
        stroke: '#ffffff',
        lineWidth: 1
      });

    const lineLayer = new LineLayer({
      autoFit: false,
      zIndex: 2
    })
      .source(routes, {
        parser: {
          type: 'json',
          coordinates: 'coordinates'
        }
      })
      .shape('line')
      .size('volume', [1.2, 4.2])
      .color('risk', (risk: string) => riskColors[risk] ?? '#1890ff')
      .style({
        opacity: 0.8
      });

    const pointLayer = new PointLayer({
      autoFit: false,
      zIndex: 3
    })
      .source(facilities, {
        parser: {
          type: 'json',
          coordinates: ['lng', 'lat']
        }
      })
      .shape('circle')
      .size('capacity', [8, 18])
      .color('type', (type: string) => {
        if (type === 'supplier') return '#722ed1';
        if (type === 'hub') return '#13c2c2';
        return '#2f54eb';
      })
      .style({
        stroke: '#ffffff',
        strokeWidth: 1.2,
        opacity: 0.9
      });

    const popup = new Popup({
      closeButton: false,
      closeOnClick: false,
      offsets: [0, 10]
    });

    pointLayer.on('mousemove', (event) => {
      if (!scene || !event.feature) return;
      const { name, status, capacity, throughput } = event.feature;
      popup
        .setLnglat(event.lngLat)
        .setHTML(
          `<div class="popup">
            <div class="popup-title">${name}</div>
            <div class="popup-row">状态：${status}</div>
            <div class="popup-row">容量：${capacity}%</div>
            <div class="popup-row">周转：${throughput}%</div>
          </div>`
        );
      scene.addPopup(popup);
    });

    pointLayer.on('mouseout', () => {
      popup.remove();
    });

    scene.addLayer(polygonLayer);
    scene.addLayer(lineLayer);
    scene.addLayer(pointLayer);
  });
});

onUnmounted(() => {
  scene?.destroy();
  scene = null;
});
</script>

<style scoped>
.map-root {
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 16px;
  overflow: hidden;
}

.map-canvas {
  width: 100%;
  height: 100%;
}

.map-legend {
  position: absolute;
  left: 16px;
  bottom: 16px;
  padding: 12px 14px;
  background: rgba(8, 17, 26, 0.75);
  color: #f5f5f5;
  border-radius: 12px;
  font-size: 12px;
  display: grid;
  gap: 6px;
  min-width: 160px;
}

.legend-title {
  font-weight: 600;
  margin-bottom: 4px;
}

.legend-row {
  display: flex;
  align-items: center;
  gap: 8px;
}

.dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  display: inline-block;
}

.dot-high {
  background: #ff4d4f;
}

.dot-medium {
  background: #faad14;
}

.dot-low {
  background: #52c41a;
}

.dot-hub {
  background: #13c2c2;
}

.dot-supplier {
  background: #722ed1;
}

.line {
  width: 14px;
  height: 3px;
  border-radius: 2px;
  display: inline-block;
}

.line-high {
  background: #ff4d4f;
}

.line-medium {
  background: #faad14;
}

.line-low {
  background: #52c41a;
}

:global(.popup) {
  font-size: 12px;
  color: #0b1220;
}

:global(.popup-title) {
  font-weight: 600;
  margin-bottom: 4px;
}

:global(.popup-row) {
  line-height: 1.4;
}
</style>
