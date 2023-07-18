import { useState } from "react"

export default function StarShipCard({ starship, onClick }) {
    const [isSelected, setIsSelected] = useState(false);

    function handleClick() {
        setIsSelected(!isSelected);
        onClick();
    }
    return (
        <div className="shipCard" onClick={handleClick}>
        {!isSelected && <h2>{starship.name}</h2>}
        
        {isSelected && (
            <div>
            <p>Model: <b>{starship.model}</b></p>
            <p>Manufacturer: <b>{starship.manufacturer}</b></p>
            <p>Hyperdrive Rating: <b>{starship.hyperdrive_rating}</b></p>
            <p>Class: <b>{starship.starship_class}</b></p>
            </div>
        )}
        </div>
    )
}