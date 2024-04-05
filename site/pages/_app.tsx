import { useState } from "react";
import NextApp, { AppProps, AppContext } from "next/app";
import { getCookie, setCookie } from "cookies-next";
import Head from "next/head";
import {
  MantineProvider,
  useMantineColorScheme,
  AppShell,
  useMantineTheme,
  ColorSchemeScript,
  createTheme,
  virtualColor,
} from "@mantine/core";
import { useHotkeys } from "@mantine/hooks";
import NavHeader from "@/components/appshell/NavHeader";
import Footer from "@/components/appshell/Footer";
import Script from "next/script";
import { poppinsBold, noto, noto_mono } from "@/lib/CustomFonts";
import classes from "./_app.module.css";

export default function App(props: AppProps) {
  // const theme = useMantineTheme();
  const { Component, pageProps } = props;

  const theme = createTheme({
    colors: {
      primary: virtualColor({
        name: "primary",
        dark: "orange",
        light: "blue",
      }),
    },
    primaryShade: 5,
    fontFamily: `${noto.style.fontFamily}`,
    fontFamilyMonospace: `${noto_mono.style.fontFamily}`,
    headings: {
      fontFamily: `${poppinsBold.style.fontFamily}, sans-serif`,
      fontWeight: `800`,
    },
  });

  // const { colorScheme } = useMantineColorScheme();

  // const [colorScheme, setColorScheme] = useState<string>(props.colorScheme);

  // const toggleColorScheme = (value?: string) => {
  //   const nextColorScheme =
  //     value || (colorScheme === "dark" ? "light" : "dark");
  //   setColorScheme(nextColorScheme);
  //   setCookie("mantine-color-scheme", nextColorScheme, {
  //     maxAge: 60 * 60 * 24 * 30,
  //   });
  // };

  // useHotkeys([["mod+J", () => toggleColorScheme()]]);

  const temp = () => {
    const theme = useMantineTheme();
    return theme.colors.dark[8];
  };
  const temp2 = () => {
    const theme = useMantineTheme();
    return theme.colors.gray[9];
  };
  const t2 = () => {
    const { colorScheme } = useMantineColorScheme();
    return colorScheme === "dark" ? temp() : temp2();
  };

  return (
    <>
      <Head>
        <title>Open Auburn</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>

      <ColorSchemeScript defaultColorScheme="light">
        <MantineProvider theme={theme}>
          <AppShell
          // className={classes.main}
          // styles={{
          //   main: {
          //     background: t2(),
          //   },
          // }}
          >
            <NavHeader />
            <Footer
              data={[
                {
                  title: "About",
                  links: [
                    {
                      label: "Datasets",
                      link: "/datasets",
                    },
                    {
                      label: "Features",
                      link: "/home#features",
                    },
                    {
                      label: "Mission",
                      link: "/about",
                    },
                  ],
                },
                {
                  title: "Project",
                  links: [
                    {
                      label: "Applications",
                      link: "/showcase",
                    },
                    {
                      label: "Contribute",
                      link: "/contribute",
                    },
                    {
                      label: "Documentation",
                      link: "/docs",
                    },
                  ],
                },
                {
                  title: "Community",
                  links: [
                    {
                      label: "Discord",
                      link: "https://discord.com/invite/pjabvqrReR",
                    },
                    {
                      label: "Twitter",
                      link: "https://twitter.com/OpenAuburn",
                    },
                    {
                      label: "GitHub",
                      link: "https://github.com/openauburn",
                    },
                  ],
                },
              ]}
            />
            <Script
              src="https://www.googletagmanager.com/gtag/js?id=G-552477Q8JV"
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                            window.dataLayer = window.dataLayer || [];
                            function gtag(){window.dataLayer.push(arguments);}
                            gtag('js', new Date());

                            gtag('config', 'G-552477Q8JV');
                          `}
            </Script>
            <Script id="hotjar">
              {`
                          (function(h,o,t,j,a,r){
                            h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
                            h._hjSettings={hjid:3420031,hjsv:6};
                            a=o.getElementsByTagName('head')[0];
                            r=o.createElement('script');r.async=1;
                            r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
                            a.appendChild(r);
                          })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
                        `}
            </Script>
            <Component {...pageProps} />
          </AppShell>
        </MantineProvider>
      </ColorSchemeScript>
    </>
  );
}

App.getInitialProps = async (appContext: AppContext) => {
  const appProps = await NextApp.getInitialProps(appContext);
  return {
    ...appProps,
  };
};
