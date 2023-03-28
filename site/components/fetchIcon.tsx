
import { filterProps } from '@mantine/core';
import * as Icons from '@tabler/icons';

export default function FetchIcon( props: any) {
    const IconComponent:any = Icons[props?.name];
    return  <IconComponent {...props}/>
}