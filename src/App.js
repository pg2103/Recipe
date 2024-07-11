import Pages from "./pages/Pages";
import Category from "./components/Category";
import { BrowserRouter, Link } from "react-router-dom"; // Import Link for navigation
import Search from "./components/Search";
import styled from "styled-components";
import { GiKnifeFork } from "react-icons/gi";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Nav>
          <GiKnifeFork />
          <Logo to="/">delicious</Logo> {/* Changed Logo from styled.div to styled(Link) */}
        </Nav>
        <Search />
        <Category />
        <Pages />
      </BrowserRouter>
    </div>
  );
}

const Logo = styled(Link)` // Changed from styled.div to styled(Link) for navigation
  text-decoration: none;
  font-size: 2rem;
  font-weight: bold;
  font-family: 'Lobster', cursive;
  color: black; // Added color to ensure the logo text is visible
`;

const Nav = styled.div`
  padding: 4rem 0rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  svg {
    font-size: 2rem;
  }
`;

export default App;