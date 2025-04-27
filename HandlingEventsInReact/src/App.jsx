import './App.css'
import Form from './components/Form';

// This tutorial demonstrates passing functions as props.

function App() {

  function handleClick(e)
  {
    console.log("The Click Me button was clicked.");
  }

  function handleSubmit()
  {
    console.log("The submit button was clicked.");
  }

  function handleTextChange(e)
  {
    console.log(e.target.value);
  }

  return (
    <>
    <button onClick = { handleClick } > Click Me </button>
    <Form onSubmit = {handleSubmit} handleTextChange = {handleTextChange} />
    </>
  )
}

export default App;