import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getUserTimeZoneFromLS, saveUserTimeZoneToLS } from '../../utils/local-storage-utils';
import { DEFAULT_THEME, Themes } from '../../constants/style/themes';
import momentTimezone from 'moment-timezone';

const defaultTimeZone = momentTimezone.tz.guess();

export interface SettingsState {
  theme: Themes;
  userTimeZone: string;
  isSideMenuCollapsed: boolean;
}

const initialState: SettingsState = {
  userTimeZone: getUserTimeZoneFromLS() || defaultTimeZone,
  theme: DEFAULT_THEME,
  isSideMenuCollapsed: false,
};

export const settingsSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    setUserTimeZone: (state, action: PayloadAction<string>) => {
      saveUserTimeZoneToLS(action.payload);
      state.userTimeZone = action.payload;
    },
    setTheme: (state, action: PayloadAction<Themes>) => {
      state.theme = action.payload;
    },
    setIsMenuCollapsed: (state, action: PayloadAction<boolean>) => {
      state.isSideMenuCollapsed = action.payload;
    },
  }
});

export const { setUserTimeZone, setTheme, setIsMenuCollapsed } = settingsSlice.actions;

export default settingsSlice.reducer;
