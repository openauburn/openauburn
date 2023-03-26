import { Metadata } from '@/utils/types'
import { Container, Grid, Paper, Text, Title } from '@mantine/core'
import React from 'react'
import * as Icons from '@tabler/icons';


interface DatasetsProps {
  metadata: Array<Metadata>
}

export default function index(props: DatasetsProps) {

  function fetchIcon(iconName: any) {
    const IconComponent:any = Icons[iconName];
    return <IconComponent/>;
  }
  
  

  return (
    <>
      <Container>
        <div>
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
        {props.metadata.map((md:Metadata) => {
          return (
            <Container key={Math.random() + Date.now()}>
              {fetchIcon(md.icon)}
              <Title order={4}>
                {md.title}
              </Title>
              <Text>
                {md.summary}
              </Text>
            </Container>
          )
        }
          
          )
        }
      </Container>
    </>
  )
}


export async function getServerSideProps() {
  // get todo data from API
  const res = await fetch((process.env.PUBLIC_API_URL || 'http://localhost:8080') + "/api/metadata")
  const metadata = await res.json()

  // return props
  return {
    props: { metadata },
  }
}
