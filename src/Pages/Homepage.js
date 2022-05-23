import Header from "../Components/Header";
import './Homepage.css';
import ChatButton from './Components/ChatButton';
import Footer from './Components/Footer';

export default function Homepage() {
  return (
    <div className="container">
      <Header />
      <ChatButton/>
      <Footer/>
    </div>
  )
}