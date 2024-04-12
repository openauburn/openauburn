import {
  Container,
  Grid,
  Space,
  Text,
  Title,
  Center,
  useMantineTheme,
  Paper,
  getThemeColor,
} from "@mantine/core";
import Link from "next/link";
import React from "react";

export default function About() {
  const theme = useMantineTheme();

  return (
    <>
      <Container>
        <Space h={"xl"} />
        <Space h={"xl"} />
        <Center>
          <Title fs={""}>
            The{" "}
            <a
              href="https://en.wikipedia.org/wiki/API"
              target="_blank"
              style={{
                textDecoration: "none",
                color: getThemeColor(theme.primaryColor, theme),
              }}
            >
              API
            </a>{" "}
            for{" "}
            <a
              href="https://en.wikipedia.org/wiki/History_of_Auburn_University"
              target="_blank"
              style={{
                textDecoration: "none",
                color: getThemeColor(theme.primaryColor, theme),
              }}
            >
              API
            </a>
          </Title>
        </Center>
        <Space h={"xl"} />
        <div>
          <Grid>
            <Grid.Col span={{ md: 12, lg: 6 }}>
              <Title order={2}>About Open Auburn</Title>
            </Grid.Col>
            <Grid.Col>
              <Text size="lg">
                Open Auburn is an open database of community and university
                public data, designed to support Auburn-specific development and
                insights.
              </Text>
            </Grid.Col>
            <Grid.Col>
              <Space h={"md"} />
              <Title order={2}>Motivation</Title>
              <Space h={"md"} />
              <Text>
                The City of Auburn and Auburn University both host massive
                amounts of public data online. Much of this data has obvious
                value and could be used to derive important information or
                applied to products and services that directly aim to help the
                community.
                <br />
                <br />
                However, this data is almost exclusively scattered acrossed
                multiple pages, unnormalized, and intricately wrapped in HTML.
                In order to make anything of Auburn data, you would have to
                spend hours developing some web-scraper, normalizing the data,
                and reliably storing it. This poses a serious barrier to
                community-centred software development, data mining, etc.
                <br />
                <br />
                Open Auburn distinguishes itself by providing not just public
                data, but <a href="https://opendefinition.org/">open</a> data -
                data that is not only accessible to humans but also readily
                available and machine-readable. The people behind this project
                figured it would be best if this data was scraped and processed
                once, and then served in its usable form for all.
              </Text>
            </Grid.Col>
            <Grid.Col>
              <Space h={"md"} />
              <Title order={2}>Architecture</Title>
              <Space h={"md"} />
              <Text>
                Open Auburn is currently comprised of the following 4 systems.
              </Text>
              <Space h={"md"} />
              <Title order={4}>1. Central Database</Title>
              <Text>
                A PostgreSQL database acts as central storage for the datasets
                that offer programmatic access. This database also stores
                relevant metadata on these collections.
              </Text>
              <Space h={"md"} />
              <Title order={4}>
                2.{" "}
                <a
                  href="https://github.com/openauburn/data-access"
                  target="_blank"
                  style={{
                    textDecoration: "none",
                    color: getThemeColor(theme.primaryColor, theme),
                  }}
                >
                  Data Access
                </a>
              </Title>
              <Text>
                Data Access is a{" "}
                <a href="https://en.wikipedia.org/wiki/REST" target="_blank">
                  RESTful
                </a>{" "}
                web API that allows programmatic access to Open Auburn's data.
                It supports user-defined pagination, filtering, sorting, and
                selective field hiding. The root endpoint for Data Access is{" "}
                <a href="https://data.openauburn.org/" target="_blank">
                  https://data.openauburn.org/
                </a>
                and documenation for it can be found <a href="/docs">here</a>.
              </Text>
              <Space h={"md"} />
              <Title order={4}>
                3.{" "}
                <a
                  href="https://github.com/openauburn/scrape-service"
                  target="_blank"
                  style={{
                    textDecoration: "none",
                    color: getThemeColor(theme.primaryColor, theme),
                  }}
                >
                  Scrape Engine
                </a>
              </Title>
              <Text>
                The scrape engine allows command-line access to a collection of
                scripts that scrape data and publish it to Data Access. The
                engine supports error reporting and tolerance, partial and
                complete dataset updates, and browser driving.
                {/* Scripts
                in this engine must comply with an interface provided by the
                engine that allows runtime-error recording and reporting. Large
                datasets are prone to data entry errors that crash even 99%
                successful scraping algorithm. Instead of trying to catch
                hundreds of unpredictable edge cases, the engine takes note of
                any errors and stores them for later review. */}
              </Text>
              <Space h={"md"} />
              <Title order={4}>
                3.{" "}
                <a
                  href="https://github.com/openauburn/openauburn"
                  target="_blank"
                  style={{
                    textDecoration: "none",
                    color: getThemeColor(theme.primaryColor, theme),
                  }}
                >
                  Data Portal
                </a>
              </Title>
              <Text>
                The data portal (this site) offers a central place to explore
                and contribue data.
              </Text>
            </Grid.Col>
            <Grid.Col>
              <Space h={"md"} />
              <Title order={2}>Team</Title>
              <Space h={"md"} />
              <Text>
                Open Auburn is maintained by{" "}
                <a href="https://m477.org/" target="_blank">
                  Matthew Rogers
                </a>
                . The project looks to expand both its data and operational
                capabilities. If you have made something cool with Auburn data
                or want to contribute to the project directly, please review the{" "}
                <Link href={"/contribute"}>contribution page</Link>.{" "}
              </Text>
            </Grid.Col>
          </Grid>
        </div>
      </Container>
    </>
  );
}
