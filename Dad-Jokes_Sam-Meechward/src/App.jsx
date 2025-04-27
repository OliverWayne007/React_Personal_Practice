import './App.css'
import Joke from './components/Joke';

function App() {

  const dadJokes = [
    {
      id: 1 , 
      joke: "I used to be a banker, but then I lost interest." , 
      rating: 3
    } , 
    {
      id: 2 , 
      joke: "I'm afraid for the calendar. It's days are numbered." , 
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

  // for (const dadJoke of dadJokes) {
  //   dadJokeComponents.push( <Joke key = {dadJoke.id} joke = {dadJoke.joke} rating = {dadJoke.rating} /> );
  // }

  const dadJokeComponents = dadJokes.map( (dadJoke) => {
    return <Joke key = {dadJoke.id} joke = {dadJoke.joke} rating = {dadJoke.rating} />
  } )

  return (
    <>
    <h1> Dad Jokes </h1>
    { dadJokeComponents }
    </>
  )
}

export default App
