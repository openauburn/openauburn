import {
  Container,
  Grid,
  Space,
  Text,
  Title,
  useMantineTheme,
} from "@mantine/core";
import React from "react";

import _ from "lodash";
import Null from "@/components/splash/null";

export default function Showcase() {
  const theme = useMantineTheme();

  return (
    <>
      <Container>
        <Space h={"xl"} />
        <Space h={"xl"} />
        <div>
          <Grid>
            <Grid.Col span={{ md: 12, lg: 6 }}>
              <Title order={1}>Showcase</Title>
              <Text>
                View select projects making the most with Auburn data.
              </Text>
            </Grid.Col>
          </Grid>
        </div>
        <Space h={"xl"} />
        <Space h={"xl"} />
        <Space h={"xl"} />

        <Null />
      </Container>
    </>
  );
}
