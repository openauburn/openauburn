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
import Link from "next/link";

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
              <Title order={1}>Contribute</Title>
              <Text>
                Learn how you can best help Open Auburn and its community.
              </Text>
            </Grid.Col>
            <Grid.Col>
              <Text size="xl">I want to contribute...</Text>
            </Grid.Col>
            <Grid.Col>
              <Title order={3}>Data</Title>
              Whether it's data you found on a website or a CSV, please join the
              Discord and share your findings! Alternatively, send an email or
              message a maintainer via any platform. We'll be happy to process
              it and host it.
            </Grid.Col>
            <Grid.Col>
              <Title order={3}>Code</Title>
              Feel free to submit a PR or issue on GitHub, or discuss the
              software in the Discord.
            </Grid.Col>
            <Grid.Col>
              <Title order={3}>A project</Title>
              It's awesome that you applied the data! Share it in the Discord or
              message a maintainer, and after review we'll share at{" "}
              <Link href="/showcase">showcase</Link>.
            </Grid.Col>
            <Grid.Col>
              <Title order={3}>A donation</Title>
              Open Auburn is grateful for any financial donations! Server and
              operational costs are currently paid for out of pocket, and
              usually run about $50 a month. This cost will increase as the
              platform acquires more data, users, and features. You can find
              donation information at the{" "}
              <a href="https://ko-fi.com/mattrog">Ko-fi</a>.
            </Grid.Col>
            <Grid.Col>
              <Title order={3}>Something else</Title>
              Join the Discord, open an issue or start a discussion on GitHub,
              or contact the maintainers any other way.
            </Grid.Col>
          </Grid>
        </div>
      </Container>
    </>
  );
}
