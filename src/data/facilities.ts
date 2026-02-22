export type Facility = {
  id: string;
  name: string;
  type: 'warehouse' | 'hub' | 'supplier';
  status: 'normal' | 'warning' | 'critical';
  lng: number;
  lat: number;
  capacity: number;
  throughput: number;
};

export const facilities: Facility[] = [
  {
    id: 'wh-shanghai-01',
    name: '华东智能仓',
    type: 'warehouse',
    status: 'normal',
    lng: 121.4737,
    lat: 31.2304,
    capacity: 92,
    throughput: 80
  },
  {
    id: 'hub-wuhan-01',
    name: '华中分拨中心',
    type: 'hub',
    status: 'warning',
    lng: 114.3054,
    lat: 30.5931,
    capacity: 78,
    throughput: 66
  },
  {
    id: 'wh-chengdu-01',
    name: '西南冷链仓',
    type: 'warehouse',
    status: 'normal',
    lng: 104.0665,
    lat: 30.5728,
    capacity: 85,
    throughput: 72
  },
  {
    id: 'supplier-xian-01',
    name: '关键零部件供应商',
    type: 'supplier',
    status: 'critical',
    lng: 108.9398,
    lat: 34.3416,
    capacity: 61,
    throughput: 58
  },
  {
    id: 'hub-guangzhou-01',
    name: '华南分拨中心',
    type: 'hub',
    status: 'normal',
    lng: 113.2644,
    lat: 23.1291,
    capacity: 88,
    throughput: 83
  }
];
