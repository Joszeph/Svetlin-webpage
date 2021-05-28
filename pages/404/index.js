import Link from 'next/link'

const ErrorPage = () => {
    return ( 
        <div className="container">
            <h1>Страницата не е намерена. Грешка 404!</h1>
            <h1>Page not found. Error 404!</h1>
            <Link href="/"><a>Обратно/Back...</a></Link>
            <style jsx>{`
                .container{
                    max-width:1200px;
                    margin: 0 auto 300px;
                    color:#f20f0f;
                    line-height:40px;
                }
                .container a{
                    text-decoration:none;
                    color:#f20f0f;
                    margin: 0 20px;
                }
                .container h1{
                    margin: 0 20px;
                }
            `}</style>
        </div>
     );
}
 
export default ErrorPage;