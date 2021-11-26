import './App.css';
import StateHook from './components/StateHook';
import EffectHook from './components/EffectHook'

function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <StateHook/>
        </div>
        <div className="col-md-6">
          <EffectHook/>
        </div>
      </div>
    </div>
  );
}

export default App;
