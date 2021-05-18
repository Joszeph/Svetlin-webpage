import Link from 'next/link'

const Card = ({recipe}) => {
    
    const{title, slug} = recipe.fields
    return ( 
        <div className="container">
            <div className="content">
                <div className="info">
                    <span>12.05.2021</span>
                    <Link href={`/articles/${slug}`}><a><h2>{title}</h2></a></Link> 
                </div>
                        <div className="border">
                        <div>{documentToReactComponents(method)}</div>
                            <p>Кратък текст..</p>
                        </div>  
            </div>
            <style jsx>{`
            .container{
                margin:25px 0;
                line-height: 27px;
            }

            .info a{
                text-decoration: none;
                color: black;
            }

            .border{
                border: 1px solid #f20f0f;
                border-right: none;
                border-top: none;
                border-left-width: thick;
                margin: 8px 0;
            }
            
            .border p{
                margin: 0 0 0px 10px;
                color: #333333;
            }
            
            .container span{
                font-size: 0.8em;
                color:#333333;
            }
            
            `}</style>  
        </div>
     );
}
 
export default Card;

//!SSR
// const Card = ({items}) => {
//         return ( 
//          <>
//             {items.map(item=>(
//                 <div className="container">
//                 <div className="content">
//                     <div className="info">
//                         <span>12.05.2021</span>
//                         <Link href={`/articles/${item.slug}`}><a><h2>{item.Title}</h2></a></Link> 
//                     </div>
//                     <div className="border">
//                         <p>Кратък текст...</p>
//                     </div>  
//                 </div>
//                 </div>
//             ))}
//          </>
//         )    
// }

     
//     export default Card;