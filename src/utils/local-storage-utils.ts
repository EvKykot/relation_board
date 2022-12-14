/**
 *
 */
export enum LocalStorageKeys {
  idToken = 'id_token',
  accessToken = 'access_token',
  expiresAt = 'expires_at',
  timeZone = 'time_zone',
}

/**
 * AUTH
 */
export const setTokenToLS = (idToken: string) => localStorage.setItem(LocalStorageKeys.idToken, idToken);
export const getTokenFromLS = () => localStorage.getItem(LocalStorageKeys.idToken);

export const setAccessTokenToLS = (accessToken: string) => localStorage.setItem(LocalStorageKeys.accessToken, accessToken);
export const getAccessTokenFromLS = () => localStorage.getItem(LocalStorageKeys.accessToken);

export const setExpiresAtToLS = (expiresAt: string) => localStorage.setItem(LocalStorageKeys.expiresAt, expiresAt);
export const getExpiresAtFromLS = () => localStorage.getItem(LocalStorageKeys.expiresAt);

export const clearAuthData = () => {
  localStorage.removeItem(LocalStorageKeys.idToken);
  localStorage.removeItem(LocalStorageKeys.accessToken);
  localStorage.removeItem(LocalStorageKeys.expiresAt);
};

/**
 * TIME ZONE
 */
export const saveUserTimeZoneToLS = (timeZone: string) => localStorage.setItem(LocalStorageKeys.timeZone, timeZone);
export const getUserTimeZoneFromLS = () => localStorage.getItem(LocalStorageKeys.timeZone);
