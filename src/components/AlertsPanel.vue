<template>
  <section class="panel">
    <header class="panel-header">
      <h3>风险告警与处置</h3>
      <button class="ghost">查看全量</button>
    </header>
    <ul class="alert-list">
      <li v-for="alert in alerts" :key="alert.id" class="alert-item">
        <div class="alert-tag" :class="alert.level">{{ alert.levelLabel }}</div>
        <div class="alert-body">
          <div class="alert-title">{{ alert.title }}</div>
          <div class="alert-meta">{{ alert.region }} · {{ alert.time }}</div>
        </div>
        <div class="alert-action">{{ alert.action }}</div>
      </li>
    </ul>
  </section>
</template>

<script setup lang="ts">
const alerts = [
  {
    id: 'alert-01',
    level: 'high',
    levelLabel: '高',
    title: '西北供应链波动区库存跌破安全线',
    region: '西安 · 供应商',
    time: '09:12',
    action: '启动备货'
  },
  {
    id: 'alert-02',
    level: 'medium',
    levelLabel: '中',
    title: '华中干线气象预警导致运输延迟',
    region: '武汉 · 干线',
    time: '08:47',
    action: '切换路线'
  },
  {
    id: 'alert-03',
    level: 'low',
    levelLabel: '低',
    title: '华南港口卸货等待时长上升',
    region: '广州 · 港口',
    time: '07:30',
    action: '优化排班'
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
  justify-content: space-between;
  align-items: center;
}

.panel-header h3 {
  margin: 0;
  font-size: 16px;
}

.ghost {
  background: transparent;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 999px;
  color: #f5f7ff;
  padding: 4px 10px;
  font-size: 12px;
}

.alert-list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  gap: 12px;
}

.alert-item {
  display: grid;
  grid-template-columns: auto 1fr auto;
  gap: 12px;
  padding: 12px;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.04);
}

.alert-tag {
  width: 32px;
  height: 32px;
  border-radius: 10px;
  display: grid;
  place-items: center;
  font-size: 12px;
  font-weight: 600;
}

.alert-tag.high {
  background: rgba(255, 77, 79, 0.22);
  color: #ff7875;
}

.alert-tag.medium {
  background: rgba(250, 173, 20, 0.22);
  color: #ffd666;
}

.alert-tag.low {
  background: rgba(82, 196, 26, 0.22);
  color: #b7eb8f;
}

.alert-title {
  font-size: 13px;
}

.alert-meta {
  font-size: 12px;
  color: #9fb0c7;
  margin-top: 4px;
}

.alert-action {
  font-size: 12px;
  color: #69c0ff;
  align-self: center;
}
</style>
