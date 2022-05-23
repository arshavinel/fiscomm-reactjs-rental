import Header from "./Header";
import './Hero.css';
import Main from "./Main"

export default function Hero() {
  return (

    <div className = 'hero'>
      <Header />
      <div className="hero-subtitle">
        <img src={require('../img/wave.jpg')} alt='wave' />
        <h3>BE MY GUEST</h3>
        <img src={require('../img/wave.jpg')} alt='wave' />
      </div>
      <h1>Welcome to Rio</h1>
      <Main />
    </div>

  )
}