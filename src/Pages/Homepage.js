import Header from "../Components/Header";
import Main from "../Components/Main";
import Hero from "../Components/Hero";
import './Homepage.css';


export default function Homepage() {
  return (
    <div className="container">
      <Header />
      <Hero />
      <Main />
    </div>
  )
}