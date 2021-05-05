import styled from 'styled-components';
import Burger from './Burger';


const NavigationBar = styled.nav`
  background-color: transperent;
  display: flex;
a{
  padding: 20px 0;
}
a spam{
    color: #333333;
    font-weight:bold;
    font-size:30px;
}
`

const Navbar = () => {
  return (
    <NavigationBar>
      <Burger />
    </NavigationBar>
  )
}

export default Navbar