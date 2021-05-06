import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import styled from 'styled-components'

const Question = ({ title, info }) => {
  const [showInfo, setShowInfo] = useState(false);
  return (
    <Wrapper className="container">
      <header>
        <h4>{title}</h4>
        <button className="btn" onClick={() => setShowInfo(!showInfo)}>
          {showInfo ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      {showInfo && <p>{info}</p>}
    </Wrapper>
  )
};

const Wrapper = styled.section`
padding: 1rem 1.5rem;
box-shadow: var(--light-shadow);
margin-bottom: 1rem;
border: 2px solid var(--clr-grey-special);
border-radius: var(--radius);
transition: var(--transition);

header{
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.btn{
  background: transparent;
  border-color: transparent;
  background: var(--clr-grey-special);
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  color: var(--clr-red-special);
  display: flex;
  align-items: center;
  justify-content: center;

}
p{
  color: var(--clr-black);
  margin-top: 1rem;
  margin-bottom: 0;
}
h4{
  margin-bottom: 0;
}

`
export default Question;
