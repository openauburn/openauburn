import {
  Container,
  Grid,
  List,
  Space,
  Text,
  Title,
  useMantineTheme,
} from "@mantine/core";
import { CodeHighlight } from "@mantine/code-highlight";
import React from "react";

import _ from "lodash";

export default function Documentation() {
  const theme = useMantineTheme();

  let api_wrapper_response = `
  {
    error: "Sample error message, will be null if no errors",
    data: [
        {
            "list": "of"
        },
        {
            "json": "objects"
        }
    ]
  }
  `;

  return (
    <>
      <Container>
        <Space h={"xl"} />
        <Space h={"xl"} />
        <div>
          <Grid>
            <Grid.Col span={{ md: 12, lg: 6 }}>
              <Title order={1}>Documentation</Title>
            </Grid.Col>
            <Grid.Col>
              <Title order={2}>API</Title>
              The root endpoint for the data API is
              https://data.openauburn.org/. The following documentation is
              strictly for GET requests, as they are the only request type
              currently supported for public traffic.
            </Grid.Col>
            <Grid.Col>
              <Title order={3}>Endpoints</Title>
              All content is returned as a JSON response wrapped as following:
              <CodeHighlight
                lang="json"
                code={api_wrapper_response}
                withCopyButton={false}
              />
              Response data is by default delivered on page 1, at 50 records per
              'page'. Details on how to adjust pagination can be found in the
              semantics section.
              <Space h={"md"} />
              <Title order={4}>Datasets</Title>
              Datasets are reachable at /datasets/[dataset], where the dataset
              name is as featured on the portal, just lowercase and joined by
              underscores. For example the dataset "Crime Log" is reachable at
              /datasets/crime_log/. Individual data points can be selected by
              calling /datasets/[dataset]/[_id], where _id is a number
              reflecting the '_id' field on the target record.
              <Space h={"md"} />
              <Title order={4}>Metadata</Title>
              Metadata for datasets is reachable at / or /metadata. Individual
              data points can be selected by calling /metadata/[_id], where _id
              is a number reflecting the '_id' field on the target record.
            </Grid.Col>
            <Grid.Col>
              <Title order={3}>Query Semantics and Features</Title>
              This section covers everything following the '?' in your request.
              <Space h={"md"} />
              <Title order={4}>Reserved keys</Title>
              The following keys provide special functionality, while every
              other key will be treated as a field name for filtering: show,
              page, page_size, sort.
              <Space h={"md"} />
              <Title order={4}>Filtering</Title>
              You can filter by one or more values. You can accomplish this by
              any of the following:
              <List>
                <List.Item>
                  ?field1=value1 -- Returns all data where field1 equals value1
                </List.Item>
                <List.Item>
                  ?field1=value1&field1=value2 -- Returns all data where field1
                  equals value1 or value2
                </List.Item>
                <List.Item>
                  ?field1=value1,value2 -- Returns all data where field1 equals
                  value1 or value2
                </List.Item>
              </List>
              <Space h={"md"} />
              <Title order={4}>Pagination</Title>
              <Text>
                You can select page size and the page offset that is returned.
                Follow the form:
                <br />
                ?page=integer -- Determines page number/offset
                <br />
                ?page_size=integer
              </Text>
              <Space h={"md"} />
              <Title order={4}>Sorting</Title>
              <Text>
                You can sort data by any field, ascending or descending. Follow
                the form:
                <br />
                ?sort=field_name,asc -- Sorts data on field_name, ascending.
                <br />
                ?sort=field_name,desc -- Sorts data on field_name, descending.
              </Text>
              <Space h={"md"} />
              <Title order={4}>Field Selection</Title>
              <Text>
                You can show or hide certain fields. It is not reccommended to
                use both 'show' and 'hide' together.
                <br />
                ?show=field1,field2 -- Every record in the response only
                contains fields field1 and field2.
                <br />
                ?hide=field1,field2 -- Every record in the response contains all
                fields except fields field1 and field2.
              </Text>
            </Grid.Col>
          </Grid>
        </div>
      </Container>
    </>
  );
}
