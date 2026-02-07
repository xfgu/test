<template>
  <section class="panel">
    <header class="panel-header">
      <div>
        <h2>全国供应链态势</h2>
        <p>综合展示仓储、运输与风险态势</p>
      </div>
      <div class="status-pill">运行中</div>
    </header>
    <div class="kpi-grid">
      <article v-for="item in kpis" :key="item.label" class="kpi-card">
        <div class="kpi-label">{{ item.label }}</div>
        <div class="kpi-value">
          <span>{{ item.value }}</span>
          <small>{{ item.unit }}</small>
        </div>
        <div class="kpi-trend" :class="item.trend">
          {{ item.delta }}
        </div>
      </article>
    </div>
  </section>
</template>

<script setup lang="ts">
const kpis = [
  { label: '全国库存充足率', value: '89.6', unit: '%', delta: '+2.4% WoW', trend: 'up' },
  { label: '干线运输准点率', value: '96.3', unit: '%', delta: '+1.1% WoW', trend: 'up' },
  { label: '高风险节点', value: '3', unit: '处', delta: '+1 处', trend: 'down' },
  { label: '日均配送单量', value: '1.28', unit: 'M', delta: '+4.8% WoW', trend: 'up' }
];
</script>

<style scoped>
.panel {
  padding: 20px 22px;
  background: rgba(13, 22, 36, 0.9);
  border-radius: 16px;
  color: #f5f7ff;
  display: grid;
  gap: 18px;
}

.panel-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
}

.panel-header h2 {
  margin: 0;
  font-size: 18px;
}

.panel-header p {
  margin: 4px 0 0;
  font-size: 12px;
  color: #99a6bf;
}

.status-pill {
  background: #1f8efa;
  padding: 6px 12px;
  border-radius: 999px;
  font-size: 12px;
}

.kpi-grid {
  display: grid;
  gap: 12px;
  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
}

.kpi-card {
  background: rgba(255, 255, 255, 0.06);
  border-radius: 12px;
  padding: 14px;
  display: grid;
  gap: 8px;
}

.kpi-label {
  font-size: 12px;
  color: #9fb0c7;
}

.kpi-value {
  font-size: 22px;
  font-weight: 600;
  display: flex;
  align-items: baseline;
  gap: 6px;
}

.kpi-value small {
  font-size: 12px;
  color: #9fb0c7;
}

.kpi-trend {
  font-size: 12px;
  padding: 2px 8px;
  border-radius: 999px;
  width: fit-content;
}

.kpi-trend.up {
  background: rgba(82, 196, 26, 0.18);
  color: #8ae65c;
}

.kpi-trend.down {
  background: rgba(255, 77, 79, 0.2);
  color: #ff7875;
}
</style>
