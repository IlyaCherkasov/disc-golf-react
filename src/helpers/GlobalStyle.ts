import { createGlobalStyle, css } from 'styled-components';

// https://piccalil.li/blog/a-more-modern-css-reset/
const ModernCssReset = css`
  /* Box sizing rules */
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  /* Prevent font size inflation */
  html {
    text-size-adjust: none;
  }

  /* Remove default margin in favour of better control in authored CSS */
  body,
  h1,
  h2,
  h3,
  h4,
  p,
  figure,
  blockquote,
  dl,
  dd {
    margin-block-end: 0;
  }

  /* Remove list styles on ul, ol elements with a list role, which suggests default styling will be removed */
  ul[role='list'],
  ol[role='list'] {
    list-style: none;
  }

  /* Set core body defaults */
  body {
    min-height: 100vh;
    line-height: 1.5;
  }

  /* Set shorter line heights on headings and interactive elements */
  h1,
  h2,
  h3,
  h4,
  button,
  input,
  label {
    line-height: 1.1;
  }

  /* Balance text wrapping on headings */
  h1,
  h2,
  h3,
  h4 {
    text-wrap: balance;
  }

  /* A elements that don't have a class get default styles */
  a:not([class]) {
    text-decoration-skip-ink: auto;
    color: currentColor;
  }

  /* Make images easier to work with */
  img,
  picture {
    display: block;
    max-width: 100%;
  }

  /* Inherit fonts for inputs and buttons */
  input,
  button,
  textarea,
  select {
    font: inherit;
  }

  /* Make sure textareas without a rows attribute are not tiny */
  textarea:not([rows]) {
    min-height: 10em;
  }

  /* Anything that has been anchored to should have extra scroll margin */
  :target {
    scroll-margin-block: 5ex;
  }
`;

const GlobalStyle = createGlobalStyle`
  ${ModernCssReset}

  * {
    scroll-margin-top: 6rem;
    margin: 0;
    padding: 0;
    color: inherit;
    font-size: 20px;
    font-family: "${({ theme }) => theme.fontFamily.primary}", sans-serif;
    text-wrap: pretty;

    ${({ theme }) => theme.media.mobile} {
      font-size: 16px;
    }
  }

  body {
    color: ${({ theme }) => theme.colors.text.primary};
    background-color: ${({ theme }) => theme.colors.primary};
  }

  #root {
    background-color: ${({ theme }) => theme.colors.background};
  }

  svg {
    flex-shrink: 0;
    height: 100%;
    aspect-ratio: 1 / 1;
  }

  ul, ol {
    margin: 0;
    padding-left: 2rem;
  }

  li {
    text-align: left;
  }

  h1 {
    font-size: 2rem;
  }

  h2 {
    font-size: 1.5rem;
  }

  h3 {
    font-size: 1.3rem;
  }

  h4 {
    font-size: 1rem;
  }

  h5 {
    font-size: 0.8rem;
  }

  h6 {
    font-size: 0.7rem;
  }
`;

export default GlobalStyle;
