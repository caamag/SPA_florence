
import './home.css'

//images
import confortIcon from '../../../public/confort-icon.png'
import toolIcon from '../../../public/tool.png'

//projects images
import project1 from './assets/project1.jpg'
import project2 from './assets/project2.jpg'
import project3 from './assets/project3.jpg'
import project4 from './assets/project4.jpg'


const Home = () => {

    return <div className='container'>

        <section className='section initial-section'>
            <div className='content initial-content'>
                <h1>Histórias que a <span>sua pele</span>  <br />pode contar.</h1>
                <div>
                    <a href="https://wa.me/5511968705571" target='blank' className='yellow-link'>Agendar horário</a>
                    <a href="https://www.instagram.com/florence_tattoostudio/" target='blank'>Explorar</a>
                </div>
            </div>
        </section>

        <section className="section style-section">
            <div className="content styles-container">
                <div className="style-content">
                    <h2>Estilo não<br /> é problema<br /> para nós.</h2><br /><br />
                    <p>Criamos tatuagens personalizadas, perfeitamente alinhadas ao seu gosto<br /> e estilo.
                        Independentemente do design, estamos prontos para transformar suas ideias em arte.</p><br /><br /><br />
                    <a href="https://www.instagram.com/florence_tattoostudio/" target='blank'>Explorar</a>
                </div>
                <a href=""><div className="style-content card realism-card"><h2>REALISMO</h2></div></a>
                <a href=""><div className="style-content card cover-card"><h2>COBERTURA</h2></div></a>
                <a href=""><div className="style-content card piercing-card"><h2>PIERCING</h2></div></a>
            </div>
        </section>

        <section className='section products-section'>
            <div className='content products-container'>
                <div className='product-card-container'>
                    <div className="product-card"></div>
                    <div className="product-card"></div>
                    <div className="product-card"></div>
                    <div className="product-card"></div>
                </div>

                <div className='product-card-container'>
                    <div className="product-card"></div>
                    <div className="product-card"></div>
                    <div className="product-card"></div>
                    <div className="product-card"></div>
                </div>
            </div>
        </section>

        <section className='section space-section'>
            <div className='content space-content'>
                <div className='location-cards'>
                    <h2>Nosso espaço</h2>
                    <p>Espaço acolhedor e profissional, dedicado a criar tatuagens
                        únicas e de alta qualidade. Com uma equipe talentosa e experiente,
                        estamos prontos para trazer à vida os mais diversos estilos.</p>

                    <div className='space-cards'>
                        <div className="space-card">
                            <img src={confortIcon} alt="" className='card-icon' /><br /><br />
                            <h4>Conforto</h4><br />
                            <p>Projetado para oferecer conforto e bem-estar. Desde a decoração até o atendimento,
                                tudo é pensado para que você se sinta em casa.</p>
                        </div>

                        <div className="space-card">
                            <img src={toolIcon} alt="" className='card-icon' /><br /><br />
                            <h4>Equipamento profissional</h4><br />
                            <p>Equipamento profissional e tinta de alta qualidade para garantir resultados impecáveis
                                e seguros. Seja a sua primeira tatuagem ou mais uma para a coleção
                            </p>
                        </div>
                    </div>
                </div>

                <div className='space-banner'></div>
            </div>
        </section><br /><br /><br /><br /><br /><br /><br /><br />

    </div>
}

export default Home;