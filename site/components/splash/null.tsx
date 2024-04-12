import {
  Center,
  Title,
  Text,
  Space,
  Stack,
  Group,
  Container,
  Paper,
  Button,
} from "@mantine/core";
import React from "react";
import FetchIcon from "../FetchIcon";
import { IconMoodConfuzed } from "@tabler/icons";
import Link from "next/link";

export default function Null() {
  return (
    <Container size={"xs"}>
      <Paper p={"xl"} shadow="lg">
        <Center>
          <Stack align="center">
            <Group gap={0}>
              <IconMoodConfuzed />
              <Space w={"xs"} />
              <Title order={3}>Nothing yet</Title>
            </Group>
            <Text ta="center">
              If you think you have some material that should go here, please
              visit the contribution page to learn how to help improve Open
              Auburn.
            </Text>
            <Button component="a" href="/contribute">
              Contribute
            </Button>
          </Stack>
        </Center>
      </Paper>
    </Container>
  );
}
