import { AppProps } from 'next/app';
import Head from 'next/head';
import { MantineProvider, NormalizeCSS, Container } from '@mantine/core';
import { NotificationsProvider } from '@mantine/notifications';
import { theme } from '../styles/theme';

export default function App(props: AppProps) {
  const { Component, pageProps } = props;

  return (
    <>
      <Head>
        <title>Mitch Horacek</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width maximum-scale=1" />
      </Head>

      <MantineProvider
        withNormalizeCSS
        withGlobalStyles
        theme={theme}
      >
        <Component {...pageProps} />
        <NormalizeCSS />
      </MantineProvider>
    </>
  );
}
