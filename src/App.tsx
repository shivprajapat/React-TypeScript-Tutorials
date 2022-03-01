import Container from './components/Container';
import { LoggedIn } from './components/LoggedIn';

function App() {

  return (
    <div className="App">
      <Container styles={{ border: "1px solid red", padding: "1rem", display: "inline-blocks" }} />
      <LoggedIn />
    </div>
  );
}

export default App;
