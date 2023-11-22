import { createGlobalStyle } from 'styled-components';
// import 'modern-normalize';

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-size: ${(props) => props.theme.fontSizes.s};
    font-weight: ${(props) => props.theme.fontWeights.normal}
  }
  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }

@font-face {
  font-family: 'Manrope-Regular';
  src: local('Manrope-Regular'),
    url('./fonts/Manrope-Regular.ttf') format('truetype');
}

@font-face {
  font-family: 'Manrope-Medium';
  src: local('Manrope-Medium'),
    url('./fonts/Manrope-Medium.ttf') format('truetype');
}

@font-face {
  font-family: 'Manrope-SemiBold';
  src: local('Manrope-SemiBold'),
    url('./fonts/Manrope-SemiBold.ttf') format('truetype');
}

@font-face {
  font-family: 'Manrope-Bold';
  src: local('Manrope-Bold'),
    url('./fonts/Manrope-Bold.ttf') format('truetype');
}

@font-face {
  font-family: 'Manrope-ExtraBold';
  src: local('Manrope-ExtraBold'),
    url('./fonts/Manrope-ExtraBold.ttf') format('truetype');
}
@font-face {
  font-family: 'Manrope-ExtraLight';
  src: local('Manrope-ExtraBold'),
    url('./fonts/Manrope-ExtraLight.ttf') format('truetype');
    }

@font-face {
  font-family: 'Manrope-Light';
  src: local('Manrope-ExtraBold'),
    url('./fonts/Manrope-Light.ttf') format('truetype');
}
h1,
h2,
h3,
h4,
h5,
h6,
p {
	margin: 0;
}

ul {
	margin: 0;
	padding: 0;
	list-style: none;
}

img {
	display: block;
	max-width: 100%;
	height: auto;
}

a {
text-decoration: none;
}

`;
