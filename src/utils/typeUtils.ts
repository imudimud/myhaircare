/**
 * Converts a string or string array to a string array
 * @param value - Input value that can be string, string array, or undefined
 * @returns string array
 */
export const ensureStringArray = (value: string | string[] | undefined): string[] => {
  if (!value) return [];
  if (Array.isArray(value)) return value;
  return value.split(',').map(item => item.trim());
};

/**
 * Safely combines arrays and/or strings of keywords
 * @param keywords - Arrays of keywords to combine
 * @returns Combined string of keywords
 */
export const combineKeywords = (...keywords: (string | string[] | undefined)[]): string => {
  const combinedArray = keywords
    .map(keyword => ensureStringArray(keyword))
    .flat()
    .filter(Boolean);
  
  return Array.from(new Set(combinedArray)).join(', ');
};
