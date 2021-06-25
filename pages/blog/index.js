import Image from 'next/image'
import Link from 'next/link'
import styles from './blog.module.css'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

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

  const router = useRouter()
  const [mappedPosts, setMappedPosts] = useState([])

console.log(posts)

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
    <>
    {locale === 'bg'? 
      <main className={styles.container}>
          <NextSeo {...SEO} />
          <div className={styles.title} data-aos="fade-right">
            <h1>{t.blogTitle}</h1>
            <Image src="/law-blog-image.webp" alt="Law-Blog-Image" width={1200} height={300}/>
          </div>
            <div className={styles.margin}> 
            {mappedPosts.length ? mappedPosts.map((p, index) => (
            <div className={styles.post} data-aos="zoom-in-up">
              <h3>{p.title}</h3>
              <button className={styles.postBtn} onClick={() => router.push(`/post/${p.slug.current}`)} key={index} className={styles.post}>прочети...</button>
              <h6>Дата: {new Date(p.publishedAt).toLocaleDateString()}</h6>
            </div>
          )) : <div className={styles.loading}>{t.loading}</div>}
            </div>
      </main>
    : 
    <main className={styles.container}>
     {/* English version */}
      <NextSeo {...SEO} />
          <div className={styles.title} data-aos="fade-right">
            <h1>{t.blogTitle}</h1>
            <Image src="/law-blog-image.webp" alt="Law-Blog-Image" width={1200} height={300}/>
          </div>
          <div className={styles.margin}> 
            <div className={styles.post} data-aos="zoom-in-up">
              <h3>How long someone can be kept in detention without charges being pressed against him/her? I have been detained. What are my rights with regards to access to legal representation, interpretation and consular support from my embassy? Should I sign any statements or declarations before having spoken to a legal representative?</h3>
              <Link href="https://www.todorovlaw.com/post/how-long-someone-can-be-kept-in-detention-without-charges-being-pressed-against-him-her-i-have">
             <a> <button className={styles.postBtn} className={styles.post}>read more...</button> </a>
              </Link>
              <h6>Date: 2/2/2014</h6>
            </div>
          </div>
          <div className={styles.margin}> 
            <div className={styles.post} data-aos="zoom-in-up">
              <h3>Terms and conditions under which a foreigner, who is not a citizen of a country – member of EU may enter and reside in Republic of Bulgaria on a prolonged, long – term or permanent basis.</h3>
              <Link href="https://www.todorovlaw.com/post/terms-and-conditions-under-which-a-foreigner-who-is-not-a-citizen-of-a-country-member-of-eu-may">
             <a> <button className={styles.postBtn} className={styles.post}>read more...</button> </a>
              </Link>
              <h6>Date: 2/2/2014</h6>
            </div>
          </div>
          <div className={styles.margin}> 
            <div className={styles.post} data-aos="zoom-in-up">
              <h3>I have been sentenced and imprisoned in Bulgaria. How can I apply for a prison transfer to the UK? What do I need to know before applying?</h3>
              <Link href="https://www.todorovlaw.com/post/i-have-been-sentenced-and-imprisoned-in-bulgaria-how-can-i-apply-for-a-prison-transfer-to-the-uk">
             <a> <button className={styles.postBtn} className={styles.post}>read more...</button> </a>
              </Link>
              <h6>Date: 2/2/2014</h6>
            </div>
          </div>
    </main>  
    } 
    </>
    )
}


export const getServerSideProps = async pageContext => {

  // const query = encodeURIComponent('*[ _type == "post" && text match "а" ]|order(publishedAt desc)[]')
  const query = encodeURIComponent('*[_type == "post" && author._ref in *[_type=="author" && name=="Светлин Тодоров"]._id ]|order(publishedAt desc){...}')
  const url = `https://83rj43sn.api.sanity.io/v1/data/query/production?query=${query}`
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
}


export default Blog
