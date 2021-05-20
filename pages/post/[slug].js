import Link from 'next/link'
import BlockContent from '@sanity/block-content-to-react';


const Post = ({title, body, publishedAt})=>{
    return(
        <div className="container">
            <h2>{title}</h2>
            <div>
            <BlockContent blocks={body} />
            </div>
            <h6>Дата: {new Date(publishedAt).toLocaleDateString()}</h6>
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

export const getServerSideProps = async pageContext => {
  const pageSlug = pageContext.query.slug;
  
  if (!pageSlug) {
    return {
      notFound: true
    }
  }

  const query = encodeURIComponent(`*[ _type == "post" && slug.current == "${pageSlug}" ]`);
  const url = `https://kna6xtr1.api.sanity.io/v1/data/query/production?query=${query}`;

  const result = await fetch(url).then(res => res.json());
  const post = result.result[0];

  if (!post) {
    return {
      notFound: true
    }
  } else {
    return {
      props: {
        body: post.body,
        title: post.title,
        publishedAt: post.publishedAt
      }
    }
  }
};

export default Post





