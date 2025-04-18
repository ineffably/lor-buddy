import { type BadgeProps } from "antd";
interface BadgeIconProps extends BadgeProps {
    src: string;
}
interface BadgeIconNumberProps extends BadgeProps {
    number: number;
    statsStyle?: React.CSSProperties;
    badgeStyle?: React.CSSProperties;
}
export declare const BadgeIconNumber: ({ number, badgeStyle, statsStyle, ...badgeProps }: BadgeIconNumberProps) => import("react/jsx-runtime").JSX.Element;
export declare const BadgeIconImage: ({ src, ...badgeProps }: BadgeIconProps) => import("react/jsx-runtime").JSX.Element;
export {};
