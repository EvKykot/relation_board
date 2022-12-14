import React, { CSSProperties, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Dropdown, Button, Menu } from 'antd';
import { SettingOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';

import { setTheme } from '../../redux/settings/settings-reducer';
import { useAction } from '../../hooks/use-actions';
import { selectTheme, selectThemeDetails } from '../../redux/settings/settings-selectors';
import { Themes, themes, themesMap } from '../../constants/style/themes';
import { usePreviousValue } from '../../hooks/use-previous-value';
import { changeThemesConstants } from '../../utils/themes';
import './base-layout.scss';

type MenuItem = Required<MenuProps>['items'][number];

const ThemeIcon = ({ styles }: { styles: CSSProperties, className: string }) => (
  <div style={styles} className="theme-icon" />
);

const SettingsMenu = () => {
  const currentTheme = useSelector(selectTheme);
  const currentThemeDetails = useSelector(selectThemeDetails);
  const prevThemeDetails = usePreviousValue(currentThemeDetails);
  const onSetTheme = useAction(setTheme);

  useEffect(() => {
    const isThemeChanged = currentThemeDetails.key !== prevThemeDetails?.key;
    if (isThemeChanged) changeThemesConstants(currentThemeDetails);
  }, [currentThemeDetails, prevThemeDetails]);

  const themeItems = themes.map(({key, title: label}): MenuItem => {
    const { constants: themeConstants } = themesMap[key];

    const iconStyles = {
      backgroundColor: themeConstants['--primary-background'],
      border: `1px solid ${themeConstants['--secondary-text']}`,
      color: themeConstants['--primary-header-text'],
    };

    return ({
      key,
      label,
      className: 'theme-menu-item',
      icon: <ThemeIcon styles={iconStyles} className="theme-icon" />,
      onClick: (theme) => onSetTheme(theme.key as Themes)
    })
  });

  return (
    <Dropdown overlay={(
        <Menu
          className="themes-dropdown"
          items={themeItems}
          selectedKeys={[currentTheme]}
        />
      )}
    >
      <Button className="settings-menu-button">
        <SettingOutlined className="settings-menu-icon" />
      </Button>
    </Dropdown>
  );
};

export default SettingsMenu;
