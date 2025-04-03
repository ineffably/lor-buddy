
export const indexByField = <T>(data: T[], field: keyof T): Record<string, T> => {
  return data.reduce((acc, item) => {
    if (item[field]) {
      acc[item[field] as unknown as string] = item;
    }
    return acc;
  }, {} as Record<string, T>);
}

export const sortByField = <T>(data: T[], field: keyof T): T[] => {
  return data.sort((a, b) => {
    if (a[field] < b[field]) return -1;
    if (a[field] > b[field]) return 1;
    return 0;
  });
}

export const isInField = <T>(entry: T, field: keyof T, queryText: string) => {
  if (!entry[field]) return false;
  // TODO: optimize: this is a hack, but it works for now for 95% of the cases.
  return (JSON.stringify(entry[field] || {})).toLowerCase().includes(
    queryText.toLowerCase()
  );
}

export const randomInt = (min: number, max: number) => (
  Math.floor(Math.random() * (max - min + 1)) + min
)
