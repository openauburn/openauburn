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
import CustomBadge from "@/components/data_display/CustomBadge";
import { IconArrowNarrowLeft } from "@tabler/icons";
import Link from "next/link";
import Null from "@/components/splash/null";

interface Props {
  metadata: any;
  dataset: any;
}

const RelatedDatasets: React.FC<Props> = ({ metadata, dataset }) => {
  const filteredMetadata = metadata
    .filter((md: Metadata) => {
      return (
        dataset.tags.filter((tag: string) => md.tags.includes(tag)).length >
          0 && dataset._id !== md._id
      );
    })
    .slice(0, 4);

  return (
    <Stack gap={3}>
      <Title order={3}>Related datasets</Title>
      {filteredMetadata.length > 0 ? (
        <Grid>
          {filteredMetadata.map((md: Metadata) => (
            <Grid.Col span={{ md: 6, lg: 3 }} key={md._id.toString()}>
              <Link
                href={`/datasets/${md._id}`}
                style={{ textDecoration: "none" }}
                passHref
                legacyBehavior
              >
                <Paper
                  withBorder
                  shadow={"md"}
                  radius={"md"}
                  p={"md"}
                  style={{
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}
                >
                  <Stack gap={"xs"}>
                    <Group gap={3}>
                      <Title order={5}>{md.title}</Title>
                    </Group>
                    <div>
                      {md.tags.map((tag: string) => (
                        <CustomBadge key={tag} title={tag} id={tag} />
                      ))}
                    </div>
                    <Text size={"sm"}>{md.summary}</Text>
                  </Stack>
                </Paper>
              </Link>
            </Grid.Col>
          ))}
        </Grid>
      ) : (
        <>
          <Space h={"xl"} />
          <Null />
        </>
      )}
    </Stack>
  );
};

export default RelatedDatasets;
