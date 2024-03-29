export const getParsedJsonData = (data: string | null | undefined, errorMessage?: string) => {
  if (!data) return null;

  try {
    return JSON.parse(data);
  } catch (error) {
    console.error(errorMessage || 'Can\'t parse data');
  }

  return null;
}

export const getStringifyJsonData = (data: unknown | null | undefined, errorMessage?: string, space?: number) => {
  if (!data) return null;

  try {
    return JSON.stringify(data, null, space);
  } catch (error) {
    console.log(errorMessage || 'Can\'t stringify data');
  }

  return null;
}
