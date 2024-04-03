import * as Icons from "@tabler/icons";

export default function FetchIcon(props: any) {
  let name = props.name === null ? "IconDatabase" : props.name;
  const IconComponent: any = Icons[name];
  return <IconComponent {...props} />;
}
