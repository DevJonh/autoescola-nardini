import React from "react";

import { createGlobalStyle } from "styled-components";
import { Helmet } from "react-helmet";

import { breakAt, BreakPoints } from "../BreakPoints";

const GlobalStyle = createGlobalStyle`
  html, body{
    font-family: "Poppins", sans-serif;
    font-weight: 300;
    font-size: 100%;
    color: #212121;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  *, *::before, *::after{
    box-sizing: inherit;
  }

  *{
    box-sizing: border-box;
  }
  
  body.sb-show-main.sb-main-padded{
    padding: 0
  }

  a, button{
    font-family: "Poppins", sans-serif;
  }

  h1,h2,h3,h4,h5,h6{
    line-height: 1.3em;
    font-weight: 700;
    letter-spacing: 2px;
    
    strong{
      color: ${({ theme }) => theme.colors.primary.main};
    }
  }

  p{
    margin: 16px 0
  }

  h1{
    font-size: 2.5rem;

    ${breakAt(BreakPoints.lg)}{
      font-size: 3.75rem;
    }
  }
  h2{
    font-size: 2rem;

    ${breakAt(BreakPoints.lg)}{
      font-size: 3.125rem;
    }
  }
  h3{
    font-size: 1.9rem;
    ${breakAt(BreakPoints.lg)}{
      font-size: 2.5rem;
    }
  }
  h4{
    font-size: 1.3rem;
    font-weight:600;

    ${breakAt(BreakPoints.lg)}{
      font-size: 2.125rem;
    }
  }
  h5{
    font-size: 1.2rem;
    font-weight: 300;
    ${breakAt(BreakPoints.lg)}{
      font-size: 1.5rem;
    }
  }
  h6{
    font-size: 1.1rem;
    font-weight: 600;

    ${breakAt(BreakPoints.lg)}{
      font-size: 1.16rem;
    }
  }
`;

const GlobalStyleComposed = () => (
  <>
    <GlobalStyle />
    <Helmet>
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;600;700&display=swap"
        rel="stylesheet"
      />
    </Helmet>
  </>
);

export default GlobalStyleComposed;
