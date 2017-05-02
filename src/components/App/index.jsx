import React from 'react';
import styled from 'styled-components';

const App = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

export default () => {
  // Render these styled components like normal react components. They will pass on all props and work
  // like normal react components – except they're styled!
  return (
    <App>Mi primer styled component</App>
  );
}