import { Theme } from '../constants/style/themes';

export const checkSupportCSS = () => window.CSS && CSS.supports('color', 'var(--fake-var)');

export const changeThemesConstants = ({constants}: Theme) => {
  const isSupported = checkSupportCSS();
  if (isSupported) {
    const body = document.getElementsByTagName('body')[0];
    Object.keys(constants).forEach((key) => body.style.setProperty(key, constants[key]));
  }
};
