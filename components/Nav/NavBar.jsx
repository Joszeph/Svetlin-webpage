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
@media (max-width: 1239px) {
    a{
  padding: 16px 0;
}
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
