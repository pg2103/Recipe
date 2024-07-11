import styled from "styled-components";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Search = () => {
    const [input, setInput] = useState('');
    const navigate=useNavigate();
    // Moved the return statement outside of submitHandler
    const submitHandler = (e) => {
        e.preventDefault();
        navigate(`/searched/${input}`)
    };

    return (
        <FormStyle onSubmit={submitHandler}>
            <div>
                <FaSearch />
                <input 
                    onChange={(e) => setInput(e.target.value)}
                    type="text" 
                    value={input}
                />
            </div>
        </FormStyle>
    );
};

const FormStyle = styled.form`
    margin: 0rem 20rem;
    div {
        width: 100%;
        position: relative;
    }
    input {
        padding: 1rem 3rem;
        font-size: 1.5rem;
        border: none;
        border-radius: 1rem;
        outline: none;
        color: white;
        background: linear-gradient(35deg, #494949, #313131);
        width: 100%;    
    }
    svg {
        position: absolute;
        top: 50%;
        left: 0%;
        transform: translate(100%, -50%);
        color: white;
    }
`;

export default Search;