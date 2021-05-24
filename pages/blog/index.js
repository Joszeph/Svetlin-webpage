import styles from './blog.module.css'
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

import bg from '../../locales/bg'
import en from '../../locales/en'

import{NextSeo} from 'next-seo'

const Blog = ({posts}) => {

  const SEO = {
    title: "Адвокат Светлин Тодоров | Правен Блог",
    description: "Адвокат Светлин Тодоров | Адвокатска Кантора Варна | Правен Блог",

    openGraph:{
        title: "Адвокат Светлин Тодоров | Правен Блог",
        description: "Адвокат Светлин Тодоров | Адвокатска Кантора Варна | Правен Блог",
    }
}

  const router = useRouter();
  const [mappedPosts, setMappedPosts] = useState([]);

  useEffect(() => {
    if (posts.length) {
      setMappedPosts(
        posts.map(p => {
          return {
            ...p,
          }
        })
      );
    } else {
      setMappedPosts([]);
    }
  }, [posts]);

  const { locale } = router
  const t = locale === 'bg' ? bg : en

    return ( 
        <main className={styles.container}>
          <NextSeo {...SEO} />
          <div className={styles.title} data-aos="fade-right">
            <h1>{t.blogTitle}</h1>
          </div>
            <div className={styles.margin}> 
            {mappedPosts.length ? mappedPosts.map((p, index) => (
            <div className={styles.post}>
              <h3>{p.title}</h3>
              <button className={styles.postBtn} onClick={() => router.push(`/post/${p.slug.current}`)} key={index} className={styles.post}>прочети...</button>
              <h6>Дата: {new Date(p.publishedAt).toLocaleDateString()}</h6>
            </div>
          )) : <>No Posts Yet</>}
            </div>
        </main>
     );
}

export const getServerSideProps = async pageContext => {
  const query = encodeURIComponent('*[ _type == "post" ]');
  const url = `https://83rj43sn.api.sanity.io/v1/data/query/production?query=${query}`;
  const result = await fetch(url).then(res => res.json());

  if (!result.result || !result.result.length) {
    return {
      props: {
        posts: [],
      }
    }
  } else {
    return {
      props: {
        posts: result.result,
      }
    }
  }
};
 
export default Blog;
