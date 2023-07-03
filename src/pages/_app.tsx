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
                <meta name="viewport" content="width=device-width, initial-scale=1" />
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
            <Script strategy="lazyOnload" src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`} />

<Script strategy="lazyOnload">
    {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
        page_path: window.location.pathname,
        });
    `}
</Script>

            <Component {...pageProps} />
        </>
    );
}

export default MyApp;