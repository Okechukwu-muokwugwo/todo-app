import TodoContainer from './components/TodoContainer';

const App = () => (
  <div className="w-2/3 box-border mt-10 px-5 mx-auto border rounded-3xl shadow-lg">
    <h1 className="font-mono text-center text-slate-200 font-extrabold text-8xl p-5">todo</h1>
    <TodoContainer />
  </div>
);

export default App;
