import React from 'react';

function EventHandler() {
    const handleButton = (event) => {
        if (event) {
            alert("Event has been triggered ");
        }
    }

    return (
        <>
            {/* This is called inline event handling */}
            <button onClick={handleButton}>Handle Me</button>

        
        </>
    );
}

export default EventHandler;
