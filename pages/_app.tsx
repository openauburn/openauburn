import '@/styles/globals.css'
import { useState } from 'react';
import NextApp, { AppProps, AppContext } from 'next/app';
import { getCookie, setCookie } from 'cookies-next';
import Head from 'next/head';
import { MantineProvider, ColorScheme, ColorSchemeProvider, AppShell } from '@mantine/core';
import { NotificationsProvider } from '@mantine/notifications';
import {useHotkeys} from '@mantine/hooks';

import NavHeader from '@/components/NavHeader';
import Footer from '@/components/Footer';

export default function App(props: AppProps & { colorScheme: ColorScheme }) {
    const { Component, pageProps } = props;
    const [colorScheme, setColorScheme] = useState<ColorScheme>(props.colorScheme);

    const toggleColorScheme = (value?: ColorScheme) => {
        const nextColorScheme = value || (colorScheme === 'dark' ? 'light' : 'dark');
        setColorScheme(nextColorScheme);
        setCookie('mantine-color-scheme', nextColorScheme, { maxAge: 60 * 60 * 24 * 30 });
    };

    useHotkeys([['mod+J', () => toggleColorScheme()]]);


    return (
        <>
            <Head>
                <title>Open Auburn</title>
                <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
                <link rel="shortcut icon" href="/favicon.ico" />
            </Head>

            <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
            <MantineProvider 
                theme={{

                primaryColor: colorScheme === 'dark' ? 'orange' : 'blue',

                primaryShade: 5,

                colorScheme: colorScheme,
                headings: { fontFamily: 'Poppins, sans-serif' },
                }} withGlobalStyles withNormalizeCSS>
                    <AppShell
                         header={<NavHeader/>}
                         footer={<Footer
                           data = {
                             [
                               {
                                 "title": "About",
                                 "links": [
                                   {
                                     "label": "Features",
                                     "link": "/home#features"
                                   },
                                   {
                                     "label": "Mission",
                                     "link": "/about"
                                   },
                                   {
                                     "label": "People",
                                     "link": "/people"
                                   }
                                 ]
                               },
                               {
                                 "title": "Project",
                                 "links": [
                                   {
                                     "label": "Applications",
                                     "link": "/showcase"
                                   },
                                   {
                                     "label": "Contribute",
                                     "link": "/contribute"
                                   },
                                   {
                                     "label": "Documentation",
                                     "link": "/docs"
                                   }
                                 ]
                               },
                               {
                                 "title": "Community",
                                 "links": [
                                   {
                                     "label": "Join Discord",
                                     "link": "https://discord.com/invite/pjabvqrReR"
                                   },
                                   {
                                     "label": "Follow on Twitter",
                                     "link": "https://twitter.com/OpenAuburn"
                                   },
                                   {
                                     "label": "Open source",
                                     "link": "https://github.com/openauburn"
                                   }
                                 ]
                               }
                             ]
                           }/>}>
                        <Component {...pageProps} />
                    </AppShell>
                </MantineProvider>
            </ColorSchemeProvider>
        </>
  )
}
