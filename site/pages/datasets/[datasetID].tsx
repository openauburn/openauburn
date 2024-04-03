import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { Metadata } from "@/utils/types";
import { base } from "@/utils/api";
import licenses from "@/lib/licenses.json";
import {
  Button,
  Container,
  Divider,
  Grid,
  Group,
  Paper,
  Space,
  Stack,
  Text,
  Title,
  useMantineTheme,
} from "@mantine/core";
import FetchIcon from "@/components/FetchIcon";
import { IconArrowNarrowLeft } from "@tabler/icons";
import Link from "next/link";

interface DatasetProps {
  metadata: Array<Metadata>;
}

export default function Dataset(props: DatasetProps) {
  const router = useRouter();
  const { datasetID } = router.query;
  const dataset = props.metadata.filter(
    (md) => md._id === Number(datasetID)
  )[0];

  const text = `${dataset.title} | Open Auburn`;

  const theme = useMantineTheme();

  const license = licenses.filter((l) => l.id === dataset.license)[0];
  return (
    <>
      <Head>
        <title>{text}</title>
      </Head>

      <Container>
        <Space h={"xl"} />
        <Space h={"xl"} />
        <Stack>
          <Link href={"/datasets"} style={{ textDecoration: "none" }}>
            <Group spacing={3}>
              <IconArrowNarrowLeft size={15} style={{ color: "grey" }} />
              <Text size={13} color={"dimmed"}>
                Back to datasets
              </Text>
            </Group>
          </Link>
          <Grid>
            <Grid.Col md={12} lg={10}>
              <Group spacing={5}>
                <FetchIcon name={dataset.portal_icon} size={36} />
                <Title>{dataset.title}</Title>
              </Group>
              <Text>{dataset.summary}</Text>
            </Grid.Col>
            <Grid.Col md={12} lg={2} sx={{ width: "100%" }}>
              <Group spacing={5}>
                <Button
                  sx={{ width: "100%" }}
                  variant={"filled"}
                  onClick={() => {
                    dataset.source.map((s: string) => {
                      window.open(s);
                    });
                  }}
                >
                  {dataset.source.length > 1 ? "Sources" : "Source"}
                </Button>

                <Button
                  variant={"outline"}
                  disabled={
                    !(
                      dataset.hasOwnProperty("api") &&
                      Object.keys(dataset.api).length > 0
                    )
                  }
                  sx={{ width: "100%" }}
                >
                  API
                </Button>
              </Group>
            </Grid.Col>
          </Grid>
          <Grid>
            <Grid.Col md={12} lg={8}></Grid.Col>
            <Grid.Col md={12} lg={12}>
              <Paper p={15} withBorder radius={"md"}>
                <Stack>
                  <Title order={4}>Details</Title>
                  <Divider />
                  {/* TODO: Maybe heal tag logic? */}

                  {/* <div>
                    <Text>Tags</Text>
                    {dataset.tags.map((t_id: number) => {
                      let tag = props.tags.filter((t) => {
                        return t.id === t_id;
                      })[0];
                      return (
                        <CustomBadge
                          key={tag.id}
                          icon={tag.icon.toString()}
                          title={tag.title}
                          id={tag.id}
                        />
                      );
                    })}
                  </div> */}
                  <Divider />
                  {/* TODO: Please have a local list of licenses, for which we can compare against and get license context data */}
                  <div>
                    <Text>License</Text>
                    {dataset.license !== null ? (
                      <Link
                        href={license.url}
                        style={{ textDecoration: "none" }}
                        target="_blank"
                      >
                        <Text
                          ff={"monospace"}
                          transform={"uppercase"}
                          size={"sm"}
                          color={"dimmed"}
                        >
                          {license.title}
                        </Text>
                      </Link>
                    ) : (
                      <></>
                    )}
                  </div>
                </Stack>
              </Paper>
            </Grid.Col>
          </Grid>
        </Stack>
        <Space h={"xl"} />
        {/* <Stack spacing={3}>
          <Title order={3}>Related datasets</Title>
          <Grid>
            {props.metadata
              .filter((md: Metadata) => {
                return (
                  dataset.tags.filter((t: number) => md.tags.includes(t))
                    .length > 0 && dataset._id !== md._id
                );
              })
              .slice(0, 4)
              .map((md: Metadata) => {
                return (
                  <Grid.Col md={6} lg={3} key={md._id.toString()}>
                    <Link
                      href={`/datasets/${md._id}`}
                      style={{ textDecoration: "none" }}
                    >
                      <Paper
                        withBorder
                        shadow={"md"}
                        radius={"md"}
                        p={"md"}
                        sx={{
                          // width: 200,
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                        }}
                      >
                        <Stack spacing={"xs"}>
                          <Group spacing={3}>
                            <Title order={6}>{md.title}</Title>
                          </Group>
                          <div>
                            {md.tags.map((t_id: number) => {
                              let tag = props.tags.filter((t) => {
                                return t.id === t_id;
                              })[0];
                              if (tag !== undefined) {
                                return (
                                  <CustomBadge
                                    key={tag.id}
                                    icon={tag.icon.toString()}
                                    title={tag.title}
                                    id={tag.id}
                                  />
                                );
                              }
                            })}
                          </div>

                          <Text size={"sm"}>{md.summary}</Text>
                        </Stack>
                      </Paper>
                    </Link>
                  </Grid.Col>
                );
              })}
          </Grid>
        </Stack> */}
      </Container>
    </>
  );
}

export async function getServerSideProps(context: any) {
  const { datasetID } = context.query;
  const res = await fetch(base + `/metadata`);
  const metadata = await res.json();
  return {
    props: { metadata },
  };
}
