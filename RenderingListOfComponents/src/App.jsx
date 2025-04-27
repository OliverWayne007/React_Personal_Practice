import './App.css'
import Joke from './components/Joke';

// The aim of this tutorial is to demonstrate the different ways of rendering a component in React.

function Title()
{
  return ( <h1> Welcome to Dad Jokes !!! </h1>)
}

function Like()
{
  return ( <h2> Do like the joke if it makes you smile ! </h2> )
}

function App() {

  const jokes = [
    {
      id: 1 , 
      joke: "I used to be a baker, but then I lost interest !!!" , 
      rating: 3
    } , 
    {
      id: 2 , 
      joke: "I'm afraid for the calendar. It's days are numbered !!!" , 
      rating: 4
    } , 
    {
      id: 3 , 
      joke: "I used to be addicted to soap, but I'm clean now !!!" , 
      rating: 5
    } , 
    {
      id: 4 , 
      joke: "I'm reading a book about anti-gravity. It's impossible to put down !!!" , 
      rating: 1
    }
  ]

  const jokeComponents = []

  for (const joke of jokes) {
    jokeComponents.push( <Joke key = {joke.id} joke = {joke.joke} rating = {joke.rating} /> );
  }

  return (
    <>
    { Title() }
    <Like />
    {jokeComponents}
    </>
  )
}

export default App
