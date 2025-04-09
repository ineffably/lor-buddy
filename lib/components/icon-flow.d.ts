import React from 'react';
interface IconFlowProps {
    icons: Array<string | React.ReactNode>;
    direction?: 'horizontal' | 'vertical';
    spacing?: number;
    size?: number;
    animate?: boolean;
    onClick?: (index: number) => void;
}
export declare const IconFlow: React.FC<IconFlowProps>;
export {};
