
import './footer.css'
import logo from '../../../public/logo_branco.png'
import { useState, useEffect } from 'react'

const Footer = () => {

    const [isOpen, setIsOpen] = useState(false);
    const openMessage = isOpen ? 'Aberto' : 'Fechado'
    const openClassSpan = isOpen ? 'open' : 'close'


    useEffect(() => {
        const checkIfOpen = () => {
            const date = new Date();
            const currentDay = date.getDay();
            const currentHour = date.getHours();
            const currentMinutes = date.getMinutes();

            // Verificar se é de segunda (1) até sábado (6)
            const isWeekday = currentDay >= 1 && currentDay <= 6;

            // Verificar se está entre 10:00 e 18:00
            const isOpenHour = (currentHour > 10 || (currentHour === 10 && currentMinutes >= 0)) &&
                (currentHour < 20 || (currentHour === 20 && currentMinutes === 0));

            setIsOpen(isWeekday && isOpenHour);
        };

        checkIfOpen();
        const interval = setInterval(checkIfOpen, 60000);
        return () => clearInterval(interval)
    }, [])


    return <footer className='footer'>
        <div className='footer-content'>
            <img src={logo} alt="" className='logo-footer' />

            <div className='contacts'>
                <h4>Redes</h4>
                <p>@florence_tattoostudio</p>
                <p>+55 11 96870-5571</p><br />

                <h4>Localização</h4>
                <p>Av. Quinze de Novembro, 217 - Vila Romanopolis</p>
                <p>Ferraz de Vasconcelos - SP, 08500-405</p><br />

                <h4>Horário de funcionamento</h4>
                <p>Segunda a sábado - 10:00 às 18:00 <span className={openClassSpan}>{openMessage}</span></p>
            </div>
        </div>
        <p style={{ textAlign: 'center', color: 'white' }}>© 2024 Todos os direitos reservados.</p><br /><br />
    </footer>

}

export default Footer;