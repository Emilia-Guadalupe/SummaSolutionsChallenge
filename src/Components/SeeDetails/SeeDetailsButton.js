import React, {useState, useEffect} from 'react';
import './buttonStyles.scss';

function SeeDetailsButton({id}) {

    const [isMobileScreen, setMobileScreen] = useState(false)

    useEffect(() => {

        // Determinar valor inicial, a partir del cuál va a ocurrir el cambio en el texto del botón
        const mediaWatcher = window.matchMedia("(max-width: 500px)")
        setMobileScreen(mediaWatcher.matches);
    
        // Actualizar ante cambios en la pantalla
        function updateIsNarrowScreen(e) {
            setMobileScreen(e.matches);
        }

        mediaWatcher.addEventListener('change', updateIsNarrowScreen)
    
        // Sacar los Event Listenerse después de ocurrido el cambio
        return function cleanup() {
            mediaWatcher.removeEventListener('change', updateIsNarrowScreen)
        }

    }, []) 
    

    return(
        <div className="button-container">
            {isMobileScreen ? <button className="details-button">COMPRAR</button> : <button className="details-button">VER DETALLES</button>}
        </div>
    )
}

export default SeeDetailsButton;