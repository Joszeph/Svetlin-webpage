import Link from 'next/link'

const Administration = () => {
    return ( 
        <main>
            <h1>Administration panel</h1>
            <div className="enter">
            <Link href="https://next-js-blog-dun.vercel.app/studio/desk/"><a target="_blank">Enter</a></Link>
            </div>
            <style jsx>{`
                main{
                    max-width:1200px;
                    margin:0 auto;
                }
                h1{
                    color:#f20f0f;
                }
                .enter{
                    margin-top:15px;
                    margin-bottom:300px;
                }
                a{
                    text-decoration: none;
                    color:#333333;
                }
            `}</style>
        </main>
     );
}
 
export default Administration;