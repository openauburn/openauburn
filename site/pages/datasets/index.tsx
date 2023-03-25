import { Metadata } from '@/utils/types'
import { Container, Text, Title } from '@mantine/core'
import React from 'react'

interface DatasetsProps {
  metadata: Array<Metadata>
}

export default function index(props: DatasetsProps) {

  
  

  return (
    <>
      <Container>
        {props.metadata.map((md:Metadata) => (
          <Text>
            {md.title}
          </Text>
          )
        )}
      </Container>
    </>
  )
}


export async function getServerSideProps() {
  // get todo data from API
  const res = await fetch('http://localhost:3000/api/metadata')
  const metadata = await res.json()

  // return props
  return {
    props: { metadata },
  }
}
