import './RioHero.scss'
import Header from './Header';

export default function RioHero() {


    return (
        <div className = 'rio-hero'>
        <Header />
        <div className="rio-hero-subtitle">
          <h3>Rio De Janeiro</h3>
          <img src={require('../img/wave.jpg')} alt='wave' />
        </div>
      </div>
    );
}