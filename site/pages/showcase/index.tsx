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
import { useMediaQuery } from "@mantine/hooks";

interface ShowcaseProps {
  showcase: Array<any>;
}

export default function Showcase(props: ShowcaseProps) {
  const theme = useMantineTheme();
  const staticShowcaseItem = {
    _id: 0,
    description:
      "Comprehensive report on patterns in faculty & staff salary data.",
    title: "Salary Statistical Analysis",
    url: "/OpenAuburnSalaryGasser.pdf",
    og_img: "/static/images/salary_distribution.webp",
  };

  const [showcase, setShowcase] = useState(
    [staticShowcaseItem].concat(props.showcase)
  );

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const updatedShowcase = [...showcase];

    for (let i = 0; i < updatedShowcase.length; i++) {
      let project = updatedShowcase[i];
      console.log(project);
      if (!Object.keys(project).includes("og_img")) {
        console.log(project);
        fetch(`/api/ogimage?url=${encodeURIComponent(project.url)}`)
          .then((res) => res.json())
          .then((data) => {
            if (data.ogImage) {
              project.og_img = data.ogImage;
              updatedShowcase[i] = project;
            }
          })
          .finally(() => {
            setShowcase(updatedShowcase);
            setLoading(false);
          });
      }
    }
  }, [showcase]);

  const isMedScreen = useMediaQuery("(max-width: 900px)");

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
        <SimpleGrid cols={isMedScreen ? 1 : 3}>
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
                    <Image
                      src={project.og_img}
                      style={{ borderRadius: 10 }}
                    ></Image>
                  )}
                  <Space h={"xs"} />
                  <Title order={4}>{project.title}</Title>
                  {isMedScreen ? (
                    <></>
                  ) : (
                    <Text c={"dimmed"}>{project.description}</Text>
                  )}
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
  console.log(showcase);
  return {
    props: { showcase },
  };
}
