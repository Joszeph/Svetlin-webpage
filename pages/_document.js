import Document, {Html, Head, Main, NextScript} from 'next/document'

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx)
        return {...initialProps}
    }

    render() {
        return (
            <Html lang="bg">
            <Head>
                <link rel="icon" href="/favicon.ico" />
                <link rel="preload"/>
                <meta name="theme-color" content="#33333"/>
                <meta property="og:image" content="/logo.png"/>
                <meta property="og:image:type" content="image/png"/>
                <meta property="og:image:width" content="228"/>
                <meta property="og:image:height" content="122"/>
            </Head>
                <body>
                    <Main/>
                    <NextScript/>
                </body>
            </Html>
        )
    }
}

export default MyDocument