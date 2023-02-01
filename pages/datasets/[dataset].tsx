import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

export default function Dataset() {

    const router = useRouter()
    const {dataset} = router.query

    const text = `${dataset} | Open Auburn`

  return (
    <>
        <Head>
            <title>{text}</title>
        </Head>
    </>
  )
}

// export async function getStaticProps({ params }){
//     const req = await fetch(`http://api.openauburn.org/v1/${params.set}`)
//     const data = await req.json();

//     return {
//         props: { set: data },
//     }
// }

// export async function getStaticPaths(){
//     const req = await fetch('');
//     const data = await req.json();

//     const paths = data.map((set: any) => {
//         return {params : {id: set}}
//     })

//     return {
//         paths,
//         fallback: false
//     }
// }

