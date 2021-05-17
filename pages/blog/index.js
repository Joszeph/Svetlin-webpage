import Card from '../../components/Card.jsx'
import styles from './blog.module.css'

import {createClient} from 'contentful'

import "aos/dist/aos.css";

export async function getStaticProps(){

  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  })

  const res = await client.getEntries({content_type: 'recipe'})

  return{
    props: {recipes: res.items },
    revalidate: 1
  }
}

const Blog = ({recipes}) => {
  console.log(recipes)
    return ( 
        <main className={styles.container}>
          <div className={styles.title} data-aos="fade-right">
            <h1>Правен блог</h1>
          </div>
            <div> 
            {recipes.map(recipe =>(
          <Card recipe={recipe} key={recipe.sys.id}/>
      ))}
            </div>
        </main>
     );
}
 
export default Blog;