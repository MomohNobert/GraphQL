import styled from 'styled-components';
import { GlobalStyle } from './global-styles';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

import BookList from './components/BookList';
import AddBook from './components/AddBook';

// Apollo Client Setup
const client = new ApolloClient({
  uri: "http://localhost:5001/graphql"
})


const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #eee;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  h1 {
    height: 15vh;
    width: 100%;
    display: grid;
    place-items: center;
  }
`;

const ContentContainer = styled.div`
  height: 80%;
  border: 1px solid red;
  display: flex;
`;

function App() {
  return (
    <ApolloProvider client={client}>
      <GlobalStyle />
      <AppContainer>
        <h1>Nobert's Reading List</h1>
        <ContentContainer>
          <BookList />  
          <AddBook />
        </ContentContainer> 
      </AppContainer>
    </ApolloProvider>
  );
}

export default App;
