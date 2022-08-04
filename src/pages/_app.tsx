import React from 'react';
import "../styles/global.css";
import Head from "next/head";
import Script from "next/script";
import {AppProps} from "next/app";


function MyApp({Component, pageProps}: AppProps) {
    return (
        <>
            <Head>
                <link
                    rel="shortcut icon"
                    type="image/x-icon"
                />

                <title>{`József Fényes's Portfolio`}</title>

                <meta name="title" content="József Fényes's Portfolio"/>
                <meta name="description" content="József Fényes's Portfolio"/>

                <meta property="og:type" content="website"/>
                <meta property="og:title" content="József Fényes's Portfolio"/>
                <meta
                    property="og:description"
                    content="József Fényes's Portfolio"
                />
                <meta property="og:image" content="/avatar.png"/>

                <meta property="twitter:card" content="summary_large_image"/>
                <meta property="twitter:title" content="József Fényes's Portfolio"/>
                <meta
                    property="twitter:description"
                    content="József Fényes's Portfolio"
                />
                <meta property="twitter:image" content="/avatar.png"/>
            </Head>

            <Component {...pageProps} />

            <Script
                strategy="lazyOnload"
                async
                src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
            ></Script>
            <Script id="google-analytics" strategy="lazyOnload">
                {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
        `}
            </Script>
        </>
    );
}

export default MyApp;