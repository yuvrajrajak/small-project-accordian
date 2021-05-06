import React, { useState } from 'react';
import data from './data';
import SingleQuestion from './Question';
import styled from 'styled-components'
function App() {
  const [questions, setQuestions] = useState(data);

  return (
    <Wrapper className="container section">
      <div>
      <h3>Questions and Answers about Login</h3>
      </div>
      <section className="info">
        {
          questions.map((question) => {
            return (
              <SingleQuestion key={question.id} {...question} />
            )
          })
        }
      </section>
    </Wrapper>
  )
}

const Wrapper = styled.section`
background: var(--clr-white);
margin: 5rem auto;
border-radius: 0.25rem;
padding: 2.5rem 2rem;

display: grid;
gap: 1rem 2rem;
h3{
font-size: 2rem;
font-weight: 500;
margin-bottom: 2rem;
}

@media screen(min-width: 992px){
    .container{
      grid-template-columns: 250px 1fr;
    }
}

`

export default App;
