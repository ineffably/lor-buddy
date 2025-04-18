import { Badge, Statistic, type BadgeProps } from "antd";


interface BadgeIconProps extends BadgeProps {
  src: string;
}

interface BadgeIconNumberProps extends BadgeProps {
  number: number;
  statsStyle?: React.CSSProperties;
  badgeStyle?: React.CSSProperties;
}

export const BadgeIconNumber = ({ number, badgeStyle = {}, statsStyle = {}, ...badgeProps }: BadgeIconNumberProps) => {
  return (
    <Badge {...badgeProps} style={{ backgroundColor: '#333', ...badgeStyle }}>
      <Statistic 
        value={number}
        className={ 'badgeIconNumberStats' }
        style={statsStyle} />
    </Badge>
  )
}

export const BadgeIconImage = ({ src, ...badgeProps }: BadgeIconProps) => {
  return (
    <Badge {...badgeProps} style={{ backgroundColor: '#333', margin: '10px' }}>
      <div style={{ width: '50px', height: '50px', margin: '5px 0px', padding: '2px' }} >
        <img src={src} style={{ height: '50px' }} />
      </div>
    </Badge>
  )
}