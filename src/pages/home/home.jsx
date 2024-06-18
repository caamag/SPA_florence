
import './home.css'

const Home = () => {

    return <div className='container'>

        <section className='section initial-section'>
            <div className='content initial-content'>
                <h1>Histórias marcadas<br />na sua pele</h1>
                <div>
                    <a href="" className='yellow-link'>Agendar horário</a>
                    <a href="">Explorar</a>
                </div>
            </div>
        </section>

        <section className="section style-section">
            <div className="content styles-container">
                <div className="style-content">
                    <h2>Estilo não<br /> é problema<br /> para nós.</h2><br /><br />
                    <p>Criamos tatuagens personalizadas, perfeitamente alinhadas ao seu gosto<br /> e estilo.
                        Independentemente do design, estamos prontos para transformar suas ideias em arte.</p><br /><br /><br />
                    <a href="">Explorar</a>
                </div>
                <div className="style-content"></div>
                <div className="style-content"></div>
                <div className="style-content"></div>
            </div>
        </section>

    </div>
}

export default Home;