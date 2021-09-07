import React, {useState, useEffect} from 'react';
import './buttonStyles.scss';

function SeeDetailsButton() {

    const [isNarrowScreen, setIsNarrowScreen] = useState(false)

    useEffect(() => {

        // set initial value to determine the screen size when the change happens
        const mediaWatcher = window.matchMedia("(max-width: 500px)")
        setIsNarrowScreen(mediaWatcher.matches);
    
        //watch for updates in the screen size
        function updateIsNarrowScreen(e) {
            setIsNarrowScreen(e.matches);
        }

        mediaWatcher.addEventListener('change', updateIsNarrowScreen)
    
        // remove event listener after changes
        return function cleanup() {
            mediaWatcher.removeEventListener('change', updateIsNarrowScreen)
        }

    }, []) 
    

    return(
        <div className="button-container">
            {isNarrowScreen ? <button className="details-button">Comprar</button> : <button className="details-button">Ver Detalles</button>}
        </div>
    )
}

export default SeeDetailsButton;