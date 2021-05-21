import Layout from '../components/Layout'
import ScrollToTop from '../components/ScrollToTop'
import '../styles/globals.css'

import{DefaultSeo} from 'next-seo'
import SEO from '../next-seo.config'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <DefaultSeo {...SEO} />
    <Layout>
      <Component {...pageProps} />
      <ScrollToTop />
    </Layout>
    </>
  )
}

export default MyApp
