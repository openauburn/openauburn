import { License, Metadata, Tag } from "@/utils/types";
import {
  ActionIcon,
  Badge,
  Center,
  Container,
  Divider,
  Flex,
  Grid,
  Group,
  Input,
  MultiSelect,
  Paper,
  Space,
  Stack,
  Switch,
  Text,
  Textarea,
  TextInput,
  Title,
  useMantineTheme,
} from "@mantine/core";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { base } from "@/utils/api";
import FetchIcon from "@/components/FetchIcon";
import { IconClock } from "@tabler/icons";
import { IconSquarePlus } from "@tabler/icons";
import { IconSquareMinus } from "@tabler/icons";
import { ValueOf } from "next/dist/shared/lib/constants";
import _, { includes } from "lodash";
import { IconListSearch } from "@tabler/icons";
import { type } from "os";
import { match } from "assert";
import licenses from "@/lib/licenses.json";
interface DatasetsProps {
  metadata: Array<Metadata>;
}

interface DatasetFilter {
  [key: string | symbol | number]: any;
}
const INIT_FILTER: DatasetFilter = {
  tags: [],
  license: [],
  SEARCH: "",
};

export default function Datasets(props: DatasetsProps) {
  const theme = useMantineTheme();
  const [filterProps, setFilterProps] = useState<any>(INIT_FILTER);
  const [showDetails, setShowDetails] = useState<boolean>(false);
  const [filterDatasets, setFilterDatasets] = useState<Array<Metadata>>(
    props.metadata
  );
  const tags = [
    ...new Set(
      props.metadata.map((md) => md.tags).flatMap((subtags) => subtags)
    ),
  ];
  const updateFilter = (field: string, value: any) => {
    setFilterProps({
      ...filterProps,
      [field]: value,
    });
  };

  useEffect(() => {
    if (!_.isEqual(filterProps, INIT_FILTER)) {
      setFilterDatasets(
        props.metadata.filter((md: Metadata) => {
          let matches: boolean = false;
          for (const key in filterProps) {
            const value = filterProps[key];
            if (value != INIT_FILTER[key.toString()]) {
              if (key === "SEARCH") {
                let v = value.toLowerCase();
                if (
                  md.title.toLowerCase().includes(v) ||
                  md.description.toLowerCase().includes(v) ||
                  md.summary.toLowerCase().includes(v)
                ) {
                  matches = true;
                }
              } else if (Array.isArray(md[key])) {
                if (md[key].filter((i: any) => value.includes(i)).length > 0) {
                  matches = true;
                }
              } else {
                if (value.includes(md[key])) {
                  matches = true;
                }
              }
            }
          }
          return matches;
        })
      );
    } else {
      setFilterDatasets(props.metadata);
    }
  }, [props.metadata, filterProps]);

  return (
    <>
      <Container>
        <Space h={"xl"} />
        <Space h={"xl"} />
        <div>
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

        <div>
          <Text size={"md"}>Search</Text>
          <TextInput
            icon={<IconListSearch />}
            value={filterProps.SEARCH}
            onChange={(event) => {
              updateFilter("SEARCH", event.currentTarget.value);
            }}
            placeholder={"Search for datasets by name or description"}
          />
        </div>
        <Space h={"lg"} />
        <Grid>
          <Grid.Col md={12} lg={2}>
            <Stack>
              <div>
                <Text size={"md"}>Tags</Text>
                <MultiSelect
                  data={tags.map((tag: string) => {
                    return { value: String(tag), label: tag };
                  })}
                  value={filterProps.tags.map(String)}
                  onChange={(value: any[]) =>
                    updateFilter("tags", value.map(String))
                  }
                />
              </div>
              <div>
                <Text size={"md"}>Licenses</Text>
                <MultiSelect
                  data={licenses.map((license) => {
                    return {
                      value: String(license.id),
                      label: license.id,
                    };
                  })}
                  value={filterProps.license.map(String)}
                  onChange={(value: any[]) =>
                    updateFilter("license", value.map(String))
                  }
                />
              </div>
            </Stack>
            {/* {props.tags.map((tag: Tag) => {
            </Stack>
            <Stack
              return (
                <Text ff={"monospace"} fz={"sm"}>
                  {tag.title}
                </Text>
              );
            })} */}
          </Grid.Col>
          <Grid.Col md={12} lg={10}>
            <Stack w={"100%"}>
              <Container
                sx={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <Text
                  ff={"monospace"}
                  sx={{ fontSize: theme.fontSizes.sm }}
                >{`${filterDatasets.length} datasets found`}</Text>
                <Group>
                  <Group spacing={0}>
                    <ActionIcon
                      color={!showDetails ? theme.primaryColor : "gray"}
                      onClick={() => setShowDetails(true)}
                    >
                      <IconSquarePlus />
                    </ActionIcon>
                    <ActionIcon
                      color={showDetails ? theme.primaryColor : "gray"}
                      onClick={() => setShowDetails(false)}
                    >
                      <IconSquareMinus />
                    </ActionIcon>
                  </Group>
                  {/* 
                <Switch
                  checked={showDetails}
                  onChange={(event) =>
                    setShowDetails(event.currentTarget.checked)
                  }
                ></Switch> */}
                </Group>
              </Container>
            </Stack>
            {/* Datasets List */}
            {filterDatasets.map((md: Metadata) => {
              // if (md.public) {
              return (
                <Paper
                  shadow="xs"
                  p="md"
                  radius={"lg"}
                  withBorder
                  key={md._id.toString()}
                  style={{ marginBottom: 10 }}
                >
                  <Stack spacing={0}>
                    <Link
                      href={`/datasets/${md._id}`}
                      style={{ textDecoration: "none" }}
                    >
                      <Group spacing={"xs"} sx={{ width: "100%" }}>
                        <FetchIcon
                          name={md.portal_icon}
                          size={22}
                          color={theme.fn.primaryColor()}
                        ></FetchIcon>
                        <Title order={4} sx={{ color: "CaptionText" }}>
                          {md.title}
                        </Title>{" "}
                      </Group>
                    </Link>
                    <Group spacing={3}>
                      {/* Tags List  */}
                      {/* {(md.tags || []).map((tagID: number) => {
                        let tagObj = props.tags.filter(
                          (x) => x.id === tagID
                        )[0];
                        if (tagObj !== undefined) {
                          return (
                            <Paper key={tagID.toString()}>
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
                      })} */}
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
                          <Text
                            ff={"monospace"}
                            transform={"uppercase"}
                            size={"xs"}
                          >
                            Last updated
                          </Text>
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
              // }
            })}
          </Grid.Col>
        </Grid>
      </Container>
    </>
  );
}

export async function getServerSideProps() {
  // get todo data from API
  const md_res = await fetch(base + "/metadata");
  const metadata = await md_res.json();

  // const tag_res = await fetch(base + "/tags");
  // const tags = await tag_res.json();

  // const res3 = await fetch(base + "/licenses");
  // const licenses = await res3.json();

  // return props
  return {
    props: { metadata },
  };
}
