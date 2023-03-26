import { Metadata } from '@/utils/types'
import { Container, Flex, Grid, Group, Paper, Space, Text, Title, useMantineTheme } from '@mantine/core'
import React from 'react'
import * as Icons from '@tabler/icons';
import Link from 'next/link';
import { base } from '@/utils/api';


interface DatasetsProps {
  metadata: Array<Metadata>
}

export default function Datasets(props: DatasetsProps) {

  const theme = useMantineTheme()

  function fetchIcon(iconName: any) {
    const IconComponent:any = Icons[iconName];
    return <IconComponent size={22} color={theme.fn.primaryColor()}/>;
  }
  
  

  return (
    <>
      <Container>
        <div>
          <Space h={'xl'}/>
          <Space h={'xl'}/>
          <Grid>
            <Grid.Col md={12} lg={6}>
              <Title order={1}>
                Datasets
              </Title>
              <Text>
                Discover diverse datasets from various sources, topics, and formats to support your research, innovation, or civic engagement.
              </Text>
              </Grid.Col>
          </Grid>
        </div>

        <Space h={'xl'}/>

        {props.metadata.map((md:Metadata) => {
          if (md.public) {
            return (
              <Link href={`/datasets/${md.id}`} key={Math.random() + Date.now()} style={{textDecoration: 'none'}}>
                <Paper shadow="xs" p="md" withBorder>
                  <Group spacing={'xs'}>
                    {fetchIcon(md.icon)}
                    <Title order={4}>
                      {md.title}
                    </Title>
                  </Group>
                  <Text>
                    {md.summary}
                  </Text>
                </Paper>
              </Link>
            )
          }
          
        }
          
          )
        }
      </Container>
    </>
  )
}


export async function getServerSideProps() {
  // get todo data from API
  const res = await fetch(base + "/api/metadata")
  const metadata = await res.json()

  // return props
  return {
    props: { metadata },
  }
}
