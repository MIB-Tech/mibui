export const stringToI18nKey = (str: string) => {
  const _string = str.charAt(0) + str.slice(1).replace(/([A-Z])/g, '_$1');

  return _string.toUpperCase();
};