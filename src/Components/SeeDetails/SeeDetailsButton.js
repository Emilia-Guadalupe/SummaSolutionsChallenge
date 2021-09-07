import React, {useState, useEffect} from 'react';
import './buttonStyles.scss';

function SeeDetailsButton({id}) {

    const [isMobileScreen, setMobileScreen] = useState(false)

    useEffect(() => {

        // set initial value to determine the screen size when the change happens
        const mediaWatcher = window.matchMedia("(max-width: 500px)")
        setMobileScreen(mediaWatcher.matches);
    
        //watch for updates in the screen size
        function updateIsNarrowScreen(e) {
            setMobileScreen(e.matches);
        }

        mediaWatcher.addEventListener('change', updateIsNarrowScreen)
    
        // remove event listener after changes
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