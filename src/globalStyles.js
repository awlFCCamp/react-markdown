import {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after{
    box-sizing:border-box;
  }
  body{
    margin:0;
    padding:0;
    background:#6b705c;
    font-family: 'Noto Sans Mono', monospace;
    color:#ffe8d6;
    line-height: 1.5;
    font-size: 0.875rem;
  }
  
  ul {
    list-style-type: none;
  }

  a {
    text-decoration: none;
  }

h1,
h2,
h3,
h4{
  letter-spacing: 0.25rem;
  text-transform: capitalize;
  line-height: 1.25;
  margin-bottom: 0.75rem;
}

h1 {
  font-size: 2.5rem;
}

h2 {
  font-size: 2rem;
}

h3 {
  font-size: 1.25rem;
}

h4 {
  font-size: 0.875rem;
}

@media screen and (min-width: 800px) {
  h1 {
    font-size: 3rem;
  }

  h2 {
    font-size: 2.5rem;
  }

  h3 {
    font-size: 1.75rem;
  }

  h4 {
    font-size: 1rem;
  }

  body {
    font-size: 1rem;
  }

  h1,
  h2,
  h3,
  h4 {
    line-height: 1;
  }
}

img {
  width: 200px;
  height: 200px;
  object-fit: cover;
}
blockquote {
  font-size: 2rem;
  font-style: italic;
  border-left: 5px solid #ddbea9;
  color: #cb997e;
  padding-left: 2rem;
  line-height: 2;
  margin-bottom: 1.5rem;
}
blockquote ::first-letter {
  text-transform: uppercase;
}
pre {
  background: #222;
  display: inline-block;
  border-radius: 15px;
  padding: 1rem 2rem;
  color: yellow;
  margin-bottom: 1.5rem;
}
`

export default GlobalStyle