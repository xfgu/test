# 企业级可视化系统（AntV L7 + Vue）

该项目展示了一个生产级的供应链可视化系统，覆盖仓储、干线运输、风险区域与调度建议等核心场景。

## 启动方式

```bash
npm install
npm run dev
```

## 构建

```bash
npm run build
npm run preview
```

## 说明

- 地图使用高德底图，需要替换 `src/config/map.ts` 中的临时 token。
- 数据为可视化演示用的模拟数据，支持扩展至真实业务数据源。
