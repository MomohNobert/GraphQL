import styled from 'styled-components';
import BookList from './components/BookList';
import { GlobalStyle } from './global-styles';


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
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <AppContainer>
        <h1>Nobert's Reading List</h1>
        <ContentContainer>
          <BookList />  
        </ContentContainer> 
      </AppContainer>
    </>
  );
}

export default App;
