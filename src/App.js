import { Suspense } from 'react';
import Main from './components/Main/Main';
import { Container } from './AppStyle';

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
