import "./App.css";
import Lesson01 from './lesson/lesson01/Lesson01'
import ClassComponent from './lesson/lesson01/ClassComponent'
import FunctionComponent from './lesson/lesson01/FunctionComponent'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Lesson01></Lesson01>
        <ClassComponent name="This is name"></ClassComponent>
        <FunctionComponent name="this is FunctionComponent"></FunctionComponent>
      </header>
    </div>
  );
}

export default App;
