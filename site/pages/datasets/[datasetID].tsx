import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { Metadata } from '@/utils/types';
import { base } from '@/utils/api';
import { Container, Space, Text, Title } from '@mantine/core';


interface DatasetProps {
  metadata: Array<Metadata>
}

export default function Dataset(props: DatasetProps) {

    const router = useRouter()
    const {datasetID} = router.query
    const dataset = props.metadata.filter((md) => md.id === Number(datasetID))[0]

    const text = `${dataset.title} | Open Auburn`

  return (
    <>
        <Head>
            <title>{text}</title>
        </Head>

        <Container>
          <Title>
            {dataset.title}
          </Title>
          <Space h={'xl'}/>
          <Text>
            {dataset.description}
          </Text>
        </Container>
    </>
  )
}

export async function getServerSideProps(context: any) {
  const {datasetID} = context.query
  const res = await fetch(base +`/metadata`);
  const metadata = await res.json()

  // return props
  return {
    props: { metadata },
  }
}