import { Metadata, Tag } from "@/utils/types";
import {
  Badge,
  Center,
  Container,
  Divider,
  Flex,
  Grid,
  Group,
  Paper,
  Space,
  Stack,
  Switch,
  Text,
  ThemeIcon,
  Title,
  useMantineTheme,
} from "@mantine/core";
import React, { useState } from "react";
import * as Icons from "@tabler/icons";
import Link from "next/link";
import { base } from "@/utils/api";
import FetchIcon from "@/components/FetchIcon";
import { IconClock } from "@tabler/icons";

interface DatasetsProps {
  metadata: Array<Metadata>;
  tags: Array<Tag>;
}

export default function Datasets(props: DatasetsProps) {
  const theme = useMantineTheme();
  const [showDetails, setShowDetails] = useState<boolean>(false);
  return (
    <>
      <Container>
        <div>
          <Space h={"xl"} />
          <Space h={"xl"} />
          <Grid>
            <Grid.Col md={12} lg={6}>
              <Title order={1}>Datasets</Title>
              <Text>
                Discover diverse datasets from various sources, topics, and
                formats to support your research, innovation, or civic
                engagement.
              </Text>
            </Grid.Col>
          </Grid>
        </div>
        <Space h={"xl"} />

        <Space h={"sm"} />
        <Grid>
          <Grid.Col md={12} lg={2}>
            <Title order={4}>Tags</Title>
            {props.tags.map((tag: Tag) => {
              return (
                <Text ff={"monospace"} fz={"sm"}>
                  {tag.title}
                </Text>
              );
            })}
          </Grid.Col>
          <Grid.Col md={12} lg={10}>
            <Container
              sx={{ display: "flex", justifyContent: "space-between" }}
            >
              <Text
                ff={"monospace"}
                sx={{ fontSize: theme.fontSizes.sm }}
              >{`${props.metadata.length} datasets found`}</Text>
              <Group>
                <Text>{`${showDetails ? "Hide" : "Show"} details`}</Text>
                <Switch
                  checked={showDetails}
                  onChange={(event) =>
                    setShowDetails(event.currentTarget.checked)
                  }
                ></Switch>
              </Group>
            </Container>
            {props.metadata.map((md: Metadata) => {
              if (md.public) {
                return (
                  <Paper
                    shadow="xs"
                    p="md"
                    radius={"lg"}
                    withBorder
                    style={{ marginBottom: 10 }}
                  >
                    <Stack spacing={0}>
                      <Link
                        href={`/datasets/${md.id}`}
                        key={Math.random() + Date.now()}
                        style={{ textDecoration: "none" }}
                      >
                        <Group spacing={"xs"} sx={{ width: "100%" }}>
                          <FetchIcon
                            name={md.icon}
                            size={22}
                            color={theme.fn.primaryColor()}
                          ></FetchIcon>
                          <Title order={4} sx={{ color: "CaptionText" }}>
                            {md.title}
                          </Title>{" "}
                        </Group>
                      </Link>
                      <Group spacing={3}>
                        {(md.tags || []).map((tagID: number) => {
                          let tagObj = props.tags.filter(
                            (x) => x.id === tagID
                          )[0];
                          if (tagObj !== undefined) {
                            return (
                              <Paper>
                                <Badge
                                  pl={3}
                                  sx={{
                                    margin: "auto",
                                  }}
                                  ff={"monospace"}
                                  size={"sm"}
                                >
                                  <Center>
                                    {tagObj?.icon !== undefined ? (
                                      <FetchIcon
                                        size={13}
                                        name={tagObj.icon}
                                        style={{
                                          marginRight: 5,
                                          marginLeft: 5,
                                        }}
                                      />
                                    ) : undefined}

                                    {tagObj?.title}
                                  </Center>
                                </Badge>
                              </Paper>
                            );
                          }
                        })}
                      </Group>
                      <Text>{md.summary}</Text>
                      <div style={{ display: showDetails ? "" : "none" }}>
                        <Divider />
                        <Group
                          sx={{
                            display: "flex",
                            alignContent: "center",
                          }}
                        >
                          <Group spacing={5}>
                            <IconClock size={12}></IconClock>
                            <Text
                              ff={"monospace"}
                              transform={"uppercase"}
                              size={"xs"}
                            >
                              {md.updated_at.split("T")[0]}
                            </Text>
                          </Group>
                        </Group>
                      </div>
                    </Stack>
                  </Paper>
                );
              }
            })}
          </Grid.Col>
        </Grid>
      </Container>
    </>
  );
}

export async function getServerSideProps() {
  // get todo data from API
  const res = await fetch(base + "/metadata");
  const metadata = await res.json();

  const res2 = await fetch(base + "/tags");
  const tags = await res2.json();
  // return props
  return {
    props: { metadata, tags },
  };
}
