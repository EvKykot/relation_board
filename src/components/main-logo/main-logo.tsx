import React from 'react';
import { Avatar } from 'antd';
import mainLogo from '../../images/logo.png';

import './main-logo.scss';

const MainLogo: React.FC = () => (
    <Avatar src={mainLogo} className="main-logo" />
);

export default MainLogo;
