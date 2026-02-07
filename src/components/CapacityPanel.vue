<template>
  <section class="panel">
    <header class="panel-header">
      <h3>关键节点负载</h3>
      <span class="sub">实时监测</span>
    </header>
    <div class="capacity-list">
      <div v-for="node in nodes" :key="node.name" class="capacity-item">
        <div class="capacity-head">
          <span>{{ node.name }}</span>
          <strong>{{ node.value }}%</strong>
        </div>
        <div class="bar">
          <span :style="{ width: node.value + '%', background: node.color }"></span>
        </div>
        <div class="capacity-meta">{{ node.note }}</div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const nodes = [
  {
    name: '华东智能仓',
    value: 92,
    color: '#2f54eb',
    note: '自动化拣选效率稳定'
  },
  {
    name: '华中分拨中心',
    value: 78,
    color: '#faad14',
    note: '受天气影响略有延迟'
  },
  {
    name: '西南冷链仓',
    value: 85,
    color: '#13c2c2',
    note: '冷链波动已控制'
  }
];
</script>

<style scoped>
.panel {
  padding: 18px 20px;
  background: rgba(13, 22, 36, 0.9);
  border-radius: 16px;
  color: #f5f7ff;
  display: grid;
  gap: 16px;
}

.panel-header {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
}

.panel-header h3 {
  margin: 0;
  font-size: 16px;
}

.sub {
  font-size: 12px;
  color: #9fb0c7;
}

.capacity-list {
  display: grid;
  gap: 14px;
}

.capacity-item {
  display: grid;
  gap: 8px;
}

.capacity-head {
  display: flex;
  justify-content: space-between;
  font-size: 13px;
}

.bar {
  height: 6px;
  background: rgba(255, 255, 255, 0.08);
  border-radius: 999px;
  overflow: hidden;
}

.bar span {
  display: block;
  height: 100%;
  border-radius: 999px;
}

.capacity-meta {
  font-size: 12px;
  color: #9fb0c7;
}
</style>
