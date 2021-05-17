import { createClient } from 'contentful'
import{documentToReactComponents} from '@contentful/rich-text-react-renderer'
import Link from 'next/link'

const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  })

export const getStaticPaths = async () => {
    const res = await client.getEntries({ 
      content_type: "recipe" 
    })
  
    const paths = res.items.map(item => {
      return {
        params: { slug: item.fields.slug }
      }
    })
  
    return {
      paths,
      fallback: true
    }
}

export const getStaticProps = async ({ params }) => {
    const { items } = await client.getEntries({
      content_type: 'recipe',
      'fields.slug': params.slug
    })
  
    if (!items.length) {
      return {
        redirect: {
          destination: '/error-404',
          permanent: false,
        },
      }
    }
  
    return {
      props: { recipe: items[0] },
      revalidate: 1
    }
  
}

const Article = ({recipe})=>{
    const{title,method} = recipe.fields
    return(
        <div className="container">
            <h2>{title}</h2>
            <div>{documentToReactComponents(method)}</div>
            <div className="link"><Link href="/blog"><a>Обратно</a></Link></div>
            <style jsx>{`
            .container{
              max-width:1200px;
              margin:0 auto;
              line-height: 22px;
              padding: 20px;
            }
            .container h2{
              margin-bottom:10px;
            }
            .link{
              margin-top:10px;
            }
            .link a{
              color:#f20f0f;
              text-decoration:none;
            }
            `}</style>
        </div>
    )
}

export default Article
