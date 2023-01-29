import { createSelector } from '@reduxjs/toolkit';

import { RootState } from '../../boot/store';
import { SettingsState } from './settings-reducer';
import { themesMap } from '../../constants/style/themes';

export const selectSettingsState = (state: RootState): SettingsState => state.settings;

export const selectIsSideMenuCollapsed = createSelector(selectSettingsState, (slice) => slice.isSideMenuCollapsed);
export const selectTheme = createSelector(selectSettingsState, (slice) => slice.theme);
export const selectThemeDetails = createSelector(selectTheme, (theme) => themesMap[theme]);
