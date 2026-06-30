import { IconType } from 'react-icons';

export interface IconProps extends React.HTMLAttributes<HTMLSpanElement> {
    icon: IconType;
    size?: number;
    color?: string;
}