import './App.css'
import ControlledInput from "./components/controlled/Input";
import UnControlledInput from "./components/uncontrolled/Input";

import CheckBox from "./components/controlled/CheckBox";
import Radio from "./components/controlled/Radio";

function App() {

  return (
    <>
        <CheckBox/>
        <Radio/>
        <ControlledInput/>
        <UnControlledInput/>
    </>
  )
}

export default App
