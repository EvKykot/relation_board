import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { DEFAULT_THEME, Themes } from '../../constants/style/themes';

export interface SettingsState {
  theme: Themes;
  isSideMenuCollapsed: boolean;
}

const initialState: SettingsState = {
  theme: DEFAULT_THEME,
  isSideMenuCollapsed: false,
};

export const settingsSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    setTheme: (state, action: PayloadAction<Themes>) => {
      state.theme = action.payload;
    },
    setIsMenuCollapsed: (state, action: PayloadAction<boolean>) => {
      state.isSideMenuCollapsed = action.payload;
    },
  }
});

export const { setTheme, setIsMenuCollapsed } = settingsSlice.actions;

export default settingsSlice.reducer;
