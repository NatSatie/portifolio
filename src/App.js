import { Suspense } from 'react';
import Main from './components/Main/Main';

function App() {
  return (
    <Suspense fallback="loading">
      <Main/>
    </Suspense>
  );
}

export default App;
