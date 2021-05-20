import styles from './blog.module.css'

import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';


const Blog = ({posts}) => {

  const router = useRouter();
  const [mappedPosts, setMappedPosts] = useState([]);

  useEffect(() => {
    if (posts.length) {
      // const imgBuilder = imageUrlBuilder({
      //   projectId: 'mjoyrhci',
      //   dataset: 'production',
      // });

      setMappedPosts(
        posts.map(p => {
          return {
            ...p,
            // mainImage: imgBuilder.image(p.mainImage).width(500).height(250),
          }
        })
      );
    } else {
      setMappedPosts([]);
    }
  }, [posts]);

    return ( 
        <main className={styles.container}>
          <div className={styles.title} data-aos="fade-right">
            <h1>Правен блог</h1>
          </div>
            <div> 
            {mappedPosts.length ? mappedPosts.map((p, index) => (
            <div onClick={() => router.push(`/post/${p.slug.current}`)} key={index} className={styles.post}>
              <h3>{p.title}</h3>
              {/* <img className={styles.mainImage} src={p.mainImage} /> */}
            </div>
          )) : <>No Posts Yet</>}
            </div>
        </main>
     );
}

export const getServerSideProps = async pageContext => {
  const query = encodeURIComponent('*[ _type == "post" ]');
  const url = `https://kna6xtr1.api.sanity.io/v1/data/query/production?query=${query}`;
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
