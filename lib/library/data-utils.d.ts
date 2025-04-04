export declare const indexByField: <T>(data: T[], field: keyof T) => Record<string, T>;
export declare const sortByField: <T>(data: T[], field: keyof T) => T[];
export declare const isInField: <T>(entry: T, field: keyof T, queryText: string) => boolean;
export declare const randomInt: (min: number, max: number) => number;
export declare const cleanDescription: (description: string) => string;
