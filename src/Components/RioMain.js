import './RioMain.scss';
export default function RioMain() {

    return(
        <>

        <div className="rio_main_container">

            <section className="rio_main_section_1">
                <span className='title'>The</span>
                <span className='title'>Marvelous</span>
                <span className='title'>City</span>

                <p className="left_section_1">
                Create memories of a lifetime in one of the most beautiful cities in the world - Rio de Janeiro. Relax on gorgeous white sandy beaches, explore a cultural hub of art and entertainment, or check out the many famous landmarks around the city.
                </p>
                <a className="links" href="/">View Map</a>
           </section>

           <section className="rio_main_section_2">
                <span className='title'>The</span>
                <span className='title'>Games</span>

                <p className="left_section_2">
                Be where the action is. Witness 10,500 athletes from around the world compete in 306 medal events. Celebrate the wins and cheer your nation on. When it comes to The Games, you’ll want to be there. Check the official Games website for updates on events and locations
                </p>
                <a className="links" href="https://olympics.com/en/olympic-games/rio-2016">www.rio2016.com</a>
           </section>
                <img style={{maxWidth:'100%'}} src={require("../img/statue.jpg")} alt="no-pic" />
        </div>

        </>
    )
}