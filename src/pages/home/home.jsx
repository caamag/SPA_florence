
import './home.css'
import { useRef } from 'react'

//images
import confortIcon from '../../../public/confort-icon.png'
import toolIcon from '../../../public/tool.png'

//slides
import slide1 from './assets/slide1.png'
import slide2 from './assets/slide2.png'
import slide3 from './assets/slide3.png'
import slide4 from './assets/slide4.png'
import slide5 from './assets/slide5.png'
import slide6 from './assets/slide6.png'


const Home = () => {

    //carrossel
    const slideRef = useRef(null);
    const slides = [slide1, slide2, slide3, slide4, slide5, slide6];
    const slidesUrl = [
        'https://www.instagram.com/p/C9BCoPUy05U/?img_index=1',
        'https://www.instagram.com/p/C6bc_WaOq8u/',
        'https://www.instagram.com/p/C3QQeUCO8DW/',
        'https://www.instagram.com/p/C1xngqmJ_R-/',
        'https://www.instagram.com/p/C1b6XudOYPF/',
        'https://www.instagram.com/p/C0nGDbspAnG/'
    ]

    const windowWidth = window.innerWidth
    const scrollLength = windowWidth > 1200 ? 1000 : 500

    const scrollLeft = () => {
        if (slideRef.current) {
            slideRef.current.scrollBy({ left: -(scrollLength), behavior: 'smooth' })
        }
    }

    const scrollRight = () => {
        if (slideRef.current) {
            slideRef.current.scrollBy({ left: scrollLength, behavior: 'smooth' })
        }
    }

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
                <a href="">
                    <div className="style-content card cover-card">
                        <h2>COBERTURA</h2>
                    </div>
                </a>
                <a href="https://www.instagram.com/p/C3v9zQHJ6Nr/?img_index=1">
                    <div className="style-content card realism-card">
                        <h2>REALISMO</h2>
                    </div>
                </a>
                <a href="">
                    <div className="style-content card piercing-card">
                        <h2>PIERCING</h2>
                    </div>
                </a>
            </div>
        </section>

        <section className='section products-section'>
            <div className='products-container'>
                <div className='product-text'>
                    <h1>Um pouco<br /> do nosso  trabalho</h1>
                    <a href="https://www.instagram.com/florence_tattoostudio/">Saiba mais</a>
                </div>

                <div className='product-content'>
                    <div className="slider" ref={slideRef}>
                        {slides.map((slide, index) => (
                            <a href={slidesUrl[index]} target='_blank'><img src={slide} alt={'slide' + index} key={index} /></a>
                        ))}
                    </div>
                    <div className="slider-control">
                        <button onClick={scrollLeft}>{'<'}</button>
                        <button onClick={scrollRight}>{'>'}</button>
                    </div>
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
        </section>
    </div>
}

export default Home;