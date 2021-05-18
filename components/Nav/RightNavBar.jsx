import styled from 'styled-components';
import Link from 'next/link'
import { useRouter } from "next/router";

import bg from '../../locales/bg'
import en from '../../locales/en'

const Ul = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  li a{
    list-style-type: none;
    text-transform: uppercase;
    text-decoration:none;
    margin: 0 10px;
    font-size: 1.1em;
    font-weight: bold;
    color: #333333;
  }
  li a:hover{
    color: #f20f0f;
  }

  .active a{
    color:#f20f0f;
  }

  @media (max-width: 1132px) {
    flex-flow: column;
    background-color: #8d8d8deb;
    position: fixed;
    
    z-index:1;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0px;
    right: 0;
    height: 100vh;
    width: 40vh;
    padding-top:160px;
    transition: transform 0.3s ease-in-out;
    li {
      display:flex;
      color: #fff;
    }  
  }
`;

const RightNavBar = (props) => {

  // const router = useRouter()

  // const { locale } = router
  // const t = locale === 'bg' ? bg : en

  const{open, setOpen} = props

  return (
    <Ul open={open}>
      <li className={router.pathname == "/" ? "active" : ""}><Link href="/" ><a onClick={() => setOpen(!open)}>{t.menuHome}</a></Link></li>
      <li className={router.pathname == "/about" ? "active" : ""}><Link href="/about"><a onClick={() => setOpen(!open)}>{t.menuAbout}</a></Link></li>
      <li className={router.pathname == "/activities" ? "active" : ""}><Link href="/activities"><a onClick={() => setOpen(!open)}>{t.menuPractice}</a></Link></li>
      <li className={router.pathname == "/clients" ? "active" : ""}><Link href="/clients"><a onClick={() => setOpen(!open)}>{t.menuClients}</a></Link></li>
      <li className={router.pathname == "/blog" ? "active" : ""}><Link href="/blog"><a onClick={() => setOpen(!open)}>{t.menuLegalBlog}</a></Link></li>
      <li className={router.pathname == "/contacts" ? "active" : ""}><Link href="/contacts"><a onClick={() => setOpen(!open)}>{t.menuContacts}</a></Link></li>
    </Ul>
  )
}

export default RightNavBar