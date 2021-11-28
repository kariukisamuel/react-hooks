import './App.css'
import StateHook from './components/StateHook'
import EffectHook from './components/EffectHook'
import ReducerHook from './components/ReducerHook'
import RefHook from './components/RefHook'
import LayoutHook from './components/LayoutHook'
import ContextHook from './components/ContextHook'

function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <LayoutHook/>
        </div>
        <div className="col-md-6">
          <EffectHook/>
        </div>
        <div className="col-md-6">
          <ReducerHook/>
        </div>
        <div className="col-md-6">
          <RefHook/>
        </div>
        <div className="col-md-6">
          <StateHook/>
        </div>
        <div className="col-md-6">
          <div className="card p-5 m-2">
           <ContextHook/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
