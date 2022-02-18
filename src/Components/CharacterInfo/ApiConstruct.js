
import Character from "./Characters";

    const SelectCharacter = ({name, image, voicedBy}) => {
        return (
            <div className= "receiptTicket">
                <h2>{name}</h2>
                <h4>{image}</h4>
                <ul>
                    <li>Protein: {voicedBy}</li>

                </ul>
            </div>
        )
}
 
export default SelectCharacter;