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
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="icon" href="/favicon.ico" />
                <link rel="preload"/>
                <meta name="theme-color" content="#33333"/>
                <meta property="og:image" content="https://www.todorovlaw.com/_next/image?url=%2Flogo.webp&w=256&q=75"/>
                <meta property="og:image:type" content="image/png"/>
                <meta property="og:image:width" content="228"/>
                <meta property="og:image:height" content="122"/>
                <meta name="description" content="Адвокат Светлин Тодоров - Адвокатска Кантора град Варна. Изготвяне на договори, правни становища, нотариални покани, искови молби, жалби срещу наказателни постановления и административни актове и др."/>
                <meta property="og:title" content="Адвокат Светлин Тодоров - град Варна. Изготвяне на договори, правни становища, нотариални покани, искови молби, жалби срещу наказателни постановления и административни актове и др. Адвокатска Кантора град Варна." />
                <meta property="og:url" content="www.todorovlaw.com" />
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