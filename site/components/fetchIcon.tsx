
import { filterProps } from '@mantine/core';
import * as Icons from '@tabler/icons';

export default function FetchIcon( props: any) {
    let name = props.name === undefined ? "IconDatabase" : props.name
    const IconComponent:any = Icons[name];
    return <IconComponent {...props}/>
}