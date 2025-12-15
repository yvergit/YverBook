import ErrorBoundary from './components/ErrorBoundary';
import BookPortfolio from './components/BookPortfolio';
import './styles/main.scss';

function App() {
  return (
    <ErrorBoundary>
      <BookPortfolio />
    </ErrorBoundary>
  );
}

export default App;
