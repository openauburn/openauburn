import {
  Container,
  Grid,
  Paper,
  SimpleGrid,
  Space,
  Text,
  Title,
  UnstyledButton,
  useMantineTheme,
  Image,
  Loader,
  Box,
} from "@mantine/core";
import React, { useEffect, useState } from "react";
import { base } from "@/utils/api";

import _ from "lodash";
import Null from "@/components/splash/null";

interface ShowcaseProps {
  showcase: Array<any>;
}

export default function Showcase(props: ShowcaseProps) {
  const theme = useMantineTheme();
  let showcase = props.showcase;

  const [ogImage, setOgImage] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!showcase[0].url) return;

    fetch(`/api/ogimage?url=${encodeURIComponent(showcase[0].url)}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.ogImage) setOgImage(data.ogImage);
      })
      .finally(() => setLoading(false));
  }, [showcase[0].url]);

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
        <SimpleGrid cols={3}>
          {showcase.length ? (
            showcase.map((project) => (
              <UnstyledButton
                component="a"
                href={project.url}
                variant="default"
                target="_blank"
                key={project._id.toString()}
              >
                <Paper
                  style={{ padding: 15 }}
                  shadow="sm"
                  radius="lg"
                  withBorder
                >
                  {loading ? (
                    <Box
                      style={{
                        width: "100%",
                        alignItems: "center",
                        display: "flex",
                        justifyContent: "center",
                      }}
                    >
                      <Loader />
                    </Box>
                  ) : (
                    <Image src={ogImage} style={{ borderRadius: 10 }}></Image>
                  )}
                  <Space h={"xs"} />
                  <Title order={4}>{project.title}</Title>
                  <Text c={"dimmed"}>{project.description}</Text>
                </Paper>
              </UnstyledButton>
            ))
          ) : (
            <Null />
          )}
        </SimpleGrid>
      </Container>
    </>
  );
}

export async function getServerSideProps() {
  const sh_res = await fetch(base + "/showcase");
  const showcase = await sh_res.json();
  return {
    props: { showcase },
  };
}
