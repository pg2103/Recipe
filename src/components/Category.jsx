import { FaPizzaSlice,FaHamburger } from "react-icons/fa"
import { GiNoodles,GiChopsticks } from "react-icons/gi"
import { NavLink } from "react-router-dom"
import styled from "styled-components"
function Category() {
  return (
    <List>
        <SLink to={'/cuisine/Italian'}>
            <FaPizzaSlice />
            <h4>Italian</h4>
        </SLink>
        <SLink to={'/cuisine/American'}>
            <FaHamburger />
            <h4>American</h4>
        </SLink>
        <SLink to={'/cuisine/Thai'}>
            <GiNoodles />
            <h4>Thai</h4>
        </SLink>
        <SLink to={'/cuisine/Japanese'}>
            <GiChopsticks />
            <h4>Japanese</h4>
        </SLink>
      
    </List>
  )
}
const List=styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin: 2rem 0rem;
    a {
        text-decoration: none;
        color: black;
        display: flex;
        flex-direction: column;
        align-items: center;
        font-size: 1.5rem;
        h4 {
        margin-top: 1rem;
        }
    }
    `;
    const SLink = styled(NavLink)`
    color: black;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    margin-right: 2rem;
    text-decoration: none;
    background: linear-gradient(35deg, #494949, #313131);
    width: 6rem;
    height: 6rem;
    cursor: pointer;
    transition: scale 0.8s;
    h4{
     color: white;
     font-size: 0.8rem;   
    }
     svg{
     color: white;
     font-size: 1.5rem;}
    
    &.active {
         background: linear-gradient(to right, #f27121, #e94057);
         svg{
         color: white;
          
         }
         h4{
            color: white;
}

}
    `

export default Category
