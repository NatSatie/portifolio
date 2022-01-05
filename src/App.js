import { Suspense } from 'react';
import Main from './components/Main/Main';
import { Container } from './AppStyle';
import './App.css';

function App() {
  return (
    <Suspense fallback="loading">
      <Container>
        <Main/>
      </Container>
    </Suspense>
  );
}

export default App;
