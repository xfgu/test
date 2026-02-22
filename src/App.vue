<template>
  <div class="app">
    <header class="app-header">
      <div>
        <h1>企业级可视化系统</h1>
        <p>基于 AntV L7 + Vue 的生产级供应链态势感知</p>
      </div>
      <div class="header-actions">
        <button class="primary">应急预案</button>
        <button class="ghost">运维中心</button>
      </div>
    </header>

    <main class="app-grid">
      <section class="left">
        <OverviewPanel />
        <CapacityPanel />
      </section>

      <section class="center">
        <MapScene />
        <div class="map-footer">
          <div class="footer-card">
            <div class="footer-title">智能调度建议</div>
            <p>
              建议提升华中冷链储备 12%，同时优先调配华南港口到华东干线，预计可降低
              8% 的高风险订单延期率。
            </p>
          </div>
          <div class="footer-card">
            <div class="footer-title">实时服务等级</div>
            <div class="service-metrics">
              <div>
                <strong>99.2%</strong>
                <span>SLA 达标率</span>
              </div>
              <div>
                <strong>3.4h</strong>
                <span>平均交付时长</span>
              </div>
              <div>
                <strong>14</strong>
                <span>自动化工单</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="right">
        <AlertsPanel />
        <section class="panel">
          <header class="panel-header">
            <h3>重点策略执行</h3>
          </header>
          <ul class="strategy-list">
            <li>
              <span>供应链备货策略</span>
              <strong>执行中</strong>
            </li>
            <li>
              <span>干线弹性运力</span>
              <strong>已完成</strong>
            </li>
            <li>
              <span>冷链温控巡检</span>
              <strong>执行中</strong>
            </li>
          </ul>
        </section>
      </section>
    </main>
  </div>
</template>

<script setup lang="ts">
import MapScene from './components/MapScene.vue';
import OverviewPanel from './components/OverviewPanel.vue';
import AlertsPanel from './components/AlertsPanel.vue';
import CapacityPanel from './components/CapacityPanel.vue';
</script>

<style scoped>
.app {
  min-height: 100vh;
  background: radial-gradient(circle at top, #1b2b4b 0%, #0a0f1f 55%, #05070f 100%);
  color: #f5f7ff;
  display: grid;
  grid-template-rows: auto 1fr;
  gap: 20px;
  padding: 24px 32px;
  box-sizing: border-box;
}

.app-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 16px;
}

.app-header h1 {
  margin: 0;
  font-size: 26px;
}

.app-header p {
  margin: 6px 0 0;
  font-size: 13px;
  color: #9fb0c7;
}

.header-actions {
  display: flex;
  gap: 10px;
}

.primary {
  background: #2f54eb;
  border: none;
  color: white;
  padding: 8px 16px;
  border-radius: 8px;
  font-size: 13px;
}

.ghost {
  background: transparent;
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: #f5f7ff;
  padding: 8px 16px;
  border-radius: 8px;
  font-size: 13px;
}

.app-grid {
  display: grid;
  grid-template-columns: minmax(260px, 1fr) minmax(520px, 2.4fr) minmax(260px, 1fr);
  gap: 20px;
  align-items: stretch;
}

.left,
.right {
  display: grid;
  gap: 20px;
}

.center {
  display: grid;
  grid-template-rows: minmax(460px, 1fr) auto;
  gap: 16px;
}

.map-footer {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 16px;
}

.footer-card {
  background: rgba(13, 22, 36, 0.9);
  border-radius: 16px;
  padding: 16px 18px;
  font-size: 13px;
  color: #dbe4f3;
}

.footer-title {
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 8px;
}

.service-metrics {
  display: grid;
  gap: 10px;
}

.service-metrics div {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.service-metrics strong {
  font-size: 20px;
}

.panel {
  padding: 18px 20px;
  background: rgba(13, 22, 36, 0.9);
  border-radius: 16px;
  color: #f5f7ff;
}

.panel-header h3 {
  margin: 0 0 12px;
  font-size: 16px;
}

.strategy-list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  gap: 10px;
  font-size: 13px;
}

.strategy-list li {
  display: flex;
  justify-content: space-between;
  padding: 10px 12px;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 10px;
}
</style>
