import { Greet } from './components/Greet';
import { Heading } from './components/Heading';
import { Oscar } from './components/Oscar';
import { Status } from './components/Status';

function App() {

  return (
    <div className="App">
      <Status status={'success'} />
      <Oscar>
        <Heading>Placeholader text</Heading>
      </Oscar>
      <Greet name="Shiv" isLoggedIn={false} />
    </div>
  );
}

export default App;
