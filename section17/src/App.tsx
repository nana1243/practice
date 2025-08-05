import './App.css'
import UseActionComponent from "./components/UseActionComponent";
import UseOptimisticComponent from "./components/UseOptimisticComponent";
import UseSuspenseComponent from "./components/UseSuspenseComponent";

function App() {

  return (
    <>
        <h1>AppComponents</h1>
        {/*<UseActionComponent/>*/}
        {/*<UseOptimisticComponent/>*/}
        <UseSuspenseComponent/>
    </>
  )
}

export default App
