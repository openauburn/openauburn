import { useState } from "react";
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
import CustomBadge from "@/components/data_display/CustomBadge";
import RelatedDatasets from "@/components/data_display/RelatedDatasets";
import PreviewTable from "@/components/data_display/PreviewTable";
import { IconArrowNarrowLeft } from "@tabler/icons";
import Link from "next/link";

interface DatasetProps {
  metadata: Array<Metadata>;
  data_access_url: string;
}

export default function Dataset(props: DatasetProps) {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const { dataset_id } = router.query;
  const dataset = props.metadata.filter(
    (md) => md._id === Number(dataset_id)
  )[0];

  const text = `${dataset.title} | Open Auburn`;

  const theme = useMantineTheme();

  const data_access_url = `${props.data_access_url}/datasets/${dataset.title
    .toLowerCase()
    .replace(/ /g, "_")}`;

  const fetchAllData = async () => {
    setLoading(true);
    let allData: any[] = [];
    let page = 1;
    const page_size = 100;

    try {
      while (true) {
        // Pass `data_access_url` as query parameter to the server-side API
        const response = await fetch(
          `/api/download?page=${page}&page_size=${page_size}&data_access_url=${encodeURIComponent(
            data_access_url
          )}`
        );
        const result = await response.json();

        // Check if data exists
        if (result && result.data) {
          allData = [...allData, ...result.data];

          // If the data is less than the page size, assume it's the last page
          if (result.data.length < page_size) {
            break;
          }
        }

        page += 1;
      }

      // Create JSON file
      const blob = new Blob([JSON.stringify(allData, null, 2)], {
        type: "application/json",
      });
      const link = document.createElement("a");
      link.href = URL.createObjectURL(blob);
      link.download = `${dataset.title.toLowerCase().replace(/ /g, "_")}.json`;
      link.click();
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

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
            <Group gap={3}>
              <IconArrowNarrowLeft size={15} style={{ color: "grey" }} />
              <Text size={"sm"} color={"dimmed"}>
                Back to datasets
              </Text>
            </Group>
          </Link>
          <Grid>
            <Grid.Col span={{ md: 12, lg: 10 }}>
              <Group gap={5}>
                <FetchIcon name={dataset.portal_icon} size={36} />
                <Title>{dataset.title}</Title>
              </Group>
              <Text>{dataset.summary}</Text>
            </Grid.Col>
            <Grid.Col span={{ md: 12, lg: 2 }} style={{ width: "100%" }}>
              <Group gap={5}>
                <Button
                  style={{ width: "100%" }}
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
                  style={{ width: "100%" }}
                  component="a"
                  href={data_access_url}
                  target="_blank"
                >
                  API
                </Button>
              </Group>
            </Grid.Col>
          </Grid>
          <Grid>
            <Grid.Col span={{ md: 12, lg: 8 }}></Grid.Col>
            <Grid.Col span={{ md: 12, lg: 12 }}>
              <Paper p={15} withBorder radius={"md"}>
                <Stack>
                  <Title order={4}>Details</Title>
                  <Divider />
                  <div>
                    <Grid>
                      <Grid.Col span={3}>
                        <Text c="dimmed">Tags</Text>
                        {dataset.tags.map((tag: string) => (
                          <CustomBadge key={tag} title={tag} id={tag} />
                        ))}
                      </Grid.Col>
                      <Grid.Col span={3}>
                        <Text c="dimmed">Records</Text>
                        <Text>{dataset.records}</Text>
                      </Grid.Col>
                      <Grid.Col span={3}>
                        <Text c="dimmed">Requests</Text>
                        <Text>{dataset.requests}</Text>
                      </Grid.Col>
                      <Grid.Col span={3}>
                        <Text c="dimmed">Updated</Text>
                        <Text>
                          {(() => {
                            const date = new Date(dataset.updated_at);

                            // Get month, day, and year
                            return `${
                              date.getMonth() + 1
                            }/${date.getDate()}/${date.getFullYear()}`;
                          })()}
                        </Text>
                      </Grid.Col>
                    </Grid>
                  </div>
                  <Divider />
                  <div>
                    <Text c="dimmed">License</Text>
                    {dataset.license !== null ? (
                      <Link
                        href={license.url}
                        style={{ textDecoration: "none" }}
                        target="_blank"
                      >
                        <Text ff={"monospace"} td={"uppercase"} size={"sm"}>
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
        <>
          <Title order={3}>Download</Title>
          <Space h={"xs"} />

          <Button variant="outline" onClick={fetchAllData} loading={loading}>
            JSON
          </Button>
        </>
        <Space h={"xl"} />
        <PreviewTable data_access_url={data_access_url} />
        <Space h={"xl"} />
        <RelatedDatasets metadata={props.metadata} dataset={dataset} />
      </Container>
    </>
  );
}

export async function getServerSideProps(context: any) {
  const { dataset_id } = context.query;
  const res = await fetch(base + `/metadata`);
  const metadata = await res.json();
  const data_access_url = process.env.DATA_ACCESS_URL;
  return {
    props: { metadata, data_access_url },
  };
}
