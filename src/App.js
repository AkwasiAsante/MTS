import { StyledContainer } from './components/Styles';
import Home from './pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './pages/Login';

function App() {
  return (
    <Router>
      <StyledContainer>
        <Home />
      </StyledContainer>
    </Router>
  );
}

export default App;
