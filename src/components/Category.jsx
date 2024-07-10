import { FaPizzaSlice,FaHamburger } from "react-icons/fa"
import { GiNoodles,GiChopsticks } from "react-icons/gi"
import { NavLink } from "react-router-dom"
import styled from "styled-components"
function Category() {
  return (
    <List>
        <NavLink to={'/cuisine/Italian'}>
            <FaPizzaSlice />
            <h4>Italian</h4>
        </NavLink>
        <NavLink to={'/cuisine/American'}>
            <FaHamburger />
            <h4>American</h4>
        </NavLink>
        <NavLink to={'/cuisine/Thai'}>
            <GiNoodles />
            <h4>Thai</h4>
        </NavLink>
        <NavLink to={'/cuisine/Japanese'}>
            <GiChopsticks />
            <h4>Japanese</h4>
        </NavLink>
      
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

export default Category
