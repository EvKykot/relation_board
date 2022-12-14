import { createSelector } from '@reduxjs/toolkit';

import { RootState } from '../../boot/store';
import { SettingsState } from './settings-reducer';
import { Themes, themesMap } from '../../constants/style/themes';

export const selectSettingsState = (state: RootState): SettingsState => state.settings;

export const selectUserTimeZone = (state: RootState): string => selectSettingsState(state).userTimeZone;
export const selectIsSideMenuCollapsed = (state: RootState): boolean => selectSettingsState(state).isSideMenuCollapsed;
export const selectTheme = (state: RootState): Themes => selectSettingsState(state).theme;
export const selectThemeDetails = createSelector(selectTheme, (theme) => themesMap[theme]);
