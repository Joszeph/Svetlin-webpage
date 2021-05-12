import{useRouter} from 'next/router'

import bg from '../locales/bg'
import en from '../locales/en'


const LangSwitch = () => {

const router = useRouter()
const { locale } = router
const t = locale === 'bg' ? bg : en

const changeLanguage = (e) => {
    const locale = e.target.value;
    router.push(router.pathname, router.asPath, { locale })
    }

    return ( 
        // <div>
        //     <select
        //     onChange={changeLanguage}
        //     defaultValue={locale}>
        //     <option className="" value="bg">BG</option>
        //     <option className="" value="en">EN</option>
        //     </select>
        // </div>

        <div class="wrapper">
            <button className="langBtn" value="bg" onClick={changeLanguage} defaultValue={locale}>БГ</button>
            <button className="langBtn" value="en" onClick={changeLanguage} defaultValue={locale}>EN</button> 
            <style jsx>{`
                .langBtn{
                    width: 35px;
                    height: 20px;
                    padding:0px;
                    font-size:0.5em;
                    font-weight: bold;
                    background-color: transparent;
                    color: #333333;
                    border: 1px solid #333333;
                }
                .langBtn:active{
                    width: 35px;
                    height: 20px;
                    padding:0px;
                    font-size:0.5em;
                    font-weight: bold;
                    background-color: grey;
                    color: #333333;
                    border: 1px solid #333333;
                }
            `}   
            </style>
        </div>
     );
}
 
export default LangSwitch;