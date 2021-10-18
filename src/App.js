import {useState} from 'react';
import ReactMarkdown from 'react-markdown';
import GlobalStyle from './globalStyles';
import styled from 'styled-components';

const Main = styled.main`
  width: 90vw;
  margin: 0 auto;
  max-width: 1200px;
  @media screen and (min-width: 992px) {
    width: 95vw;
  }
`

const Section = styled.section`
  padding: 4rem;
  display: grid;
  row-gap: 4rem;
  padding: 1rem 2rem;
  margin-top:5rem;

@media screen and (min-width: 992px) {
    min-height: 100vh;
    grid-template-columns: 1fr 1fr;
    column-gap: 4rem;
  }
`

const TextArea = styled.textarea`
  border-color: transparent;
  border-radius: 16px;
  font-size: 1.2rem;
  line-height: 2;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  min-height: 30vh;
  padding: 1rem 2rem;

`

function App() {
  const [markdown,setMarkdown] = useState('## Markdown Preview');
  return (
    <>
      <GlobalStyle/>
      <Main>
        <Section >
          <TextArea value={markdown} onChange={e=>setMarkdown(e.target.value)}></TextArea>
          <article>
            <ReactMarkdown>{markdown}</ReactMarkdown>
          </article>
        </Section>
      </Main>
    </>
  )
}

export default App
