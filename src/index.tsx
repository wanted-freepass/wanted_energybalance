import React from 'react';
import ReactDOM from 'react-dom';
import Main from './pages/Main/Main';

import GlobalStyle from './styles/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import theme from './styles/theme';

ReactDOM.render(
  <>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <Main />
    </ThemeProvider>
  </>,
  document.getElementById('root')
);
