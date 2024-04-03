import { Badge, Center, Paper } from "@mantine/core";
import React from "react";
import FetchIcon from "../FetchIcon";

interface CustomBadgeProps {
  icon?: string;
  id: any;
  title: string;
}

export default function CustomBadge(props: CustomBadgeProps) {
  return (
    <Paper key={props.id.toString()}>
      <Badge
        pl={props.icon !== undefined ? 3 : "auto"}
        sx={{
          margin: "auto",
        }}
        ff={"monospace"}
        size={"sm"}
      >
        <Center>
          {props.icon !== undefined ? (
            <FetchIcon
              size={13}
              name={props.icon}
              style={{
                marginRight: 5,
                marginLeft: 5,
              }}
            />
          ) : undefined}

          {props.title}
        </Center>
      </Badge>
    </Paper>
  );
}
