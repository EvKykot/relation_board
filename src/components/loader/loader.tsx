import React from 'react';
import { Spin, Space } from 'antd';

const Loader = () => (
  <Space size="middle" className="centred">
    <Spin size="large" />
  </Space>
);

export default Loader;
