
import './home.css'

const Home = () => {

    return <div className='container'>

        <section className='section initial-section'>
            <div className='content initial-content'>
                <h1>Histórias que a <span>sua pele</span>  <br />pode contar.</h1>
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
                <a href=""><div className="style-content card realism-card"><h2>REALISMO</h2></div></a>
                <a href=""><div className="style-content card cover-card"><h2>COBERTURA</h2></div></a>
                <a href=""><div className="style-content card piercing-card"><h2>PIERCING</h2></div></a>
            </div>
        </section>

        <section className='section space-section'>
            <div className='content space-content'>
                <div>
                    <h2>Nosso espaço</h2>
                    <p>Nosso estúdio é um espaço acolhedor e profissional, dedicado a criar tatuagens
                        únicas e de alta qualidade. Com uma equipe de tatuadores talentosos e experientes,
                        estamos prontos para trazer à vida os mais diversos estilos, desde os clássicos até
                        os mais contemporâneos.</p>
                </div>
                <div></div>
            </div>
        </section>

    </div>
}

export default Home;