
import * as Icons from '@tabler/icons';

export default function fetchIcon(iconName: any) {
    const IconComponent:any = Icons[iconName];
    return <IconComponent/>;
}