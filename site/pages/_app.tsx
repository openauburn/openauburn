import "@mantine/core/styles.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { MantineProvider, AppShell, createTheme } from "@mantine/core";
import NavHeader from "@/components/AppShell/NavHeader/NavHeader.tsx";
import Footer from "@/components/AppShell/Footer/Footer.tsx";
import Script from "next/script";
import { poppinsBold, noto, noto_mono } from "@/lib/CustomFonts";
import classes from "./_app.module.css";

export default function App({ Component, pageProps }: AppProps) {
  const theme = createTheme({
    primaryColor: "blue",
    primaryShade: 5,
    fontFamily: `${noto.style.fontFamily}`,
    fontFamilyMonospace: `${noto_mono.style.fontFamily}`,
    headings: {
      fontFamily: `${poppinsBold.style.fontFamily}, sans-serif`,
      fontWeight: `800`,
    },
  });

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

      <MantineProvider theme={theme}>
        <AppShell className={classes.main}>
          <NavHeader />
          <AppShell.Main>
            <Component {...pageProps} />
          </AppShell.Main>
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
        </AppShell>
      </MantineProvider>
    </>
  );
}
