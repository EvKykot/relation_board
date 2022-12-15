import React, { useState } from 'react';
import { Layout, Menu } from 'antd';
import { useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { HomeOutlined, AccountBookOutlined, LogoutOutlined } from '@ant-design/icons';

import { clearAuthData } from '../../utils/local-storage-utils';
import { selectIsSideMenuCollapsed } from '../../redux/settings/settings-selectors';
import styleConstants from '../../constants/style/style-constants.module.scss';
import MainLogo from '../../components/main-logo';
import './base-layout.scss';

const SideMenu = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const isMenuCollapsed = useSelector(selectIsSideMenuCollapsed);

  const menuItems = [{
    key: 'home',
    label: 'Home',
    icon: <HomeOutlined />,
    onClick: () => navigate('/')
  }, {
    key: 'counter',
    label: 'Counter',
    icon: <AccountBookOutlined />,
    onClick: () => navigate('/counter')
  }, {
    key: 'logout',
    label: 'Logout',
    icon: <LogoutOutlined />,
    onClick: clearAuthData
  }];

  const [selectedKey, setSelectedKey] = useState<string>('');
  const [openKeys, setOpenKeys] = useState<string[]>([]);

  return (
    <Layout.Sider
      collapsible
      trigger={null}
      collapsed={isMenuCollapsed}
      width={styleConstants.baseLayoutSiderWidth}
      className="base-layout-sider"
    >
      <div className="logo">
        <MainLogo />
        {!isMenuCollapsed && <h3 className="label">__TEST__</h3>}
      </div>
      <Menu
        mode="inline"
        theme="dark"
        className="base-layout-nav-menu"
        style={{ height: 'calc(100% - 150px)' }}
        // selectedKeys={[selectedKey]}
        openKeys={openKeys}
        items={menuItems}
        onOpenChange={() => {
          //
        }}
      />
    </Layout.Sider>
  );
};

export default SideMenu;
