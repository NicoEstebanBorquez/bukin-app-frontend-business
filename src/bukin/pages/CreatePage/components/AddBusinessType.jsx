
export const AddBusinessType = ({ onSelectBusinessType }) => {

    return (
        <>
            <div>Elige el tipo de tu negocio:</div>
            <ul className="business-types-list">
                <button className="btn btn-secondary m-1" onClick={onSelectBusinessType}>Peluquería</button>
                <button className="btn btn-secondary m-1" onClick={onSelectBusinessType}>Barbería</button>
                <button className="btn btn-secondary m-1" onClick={onSelectBusinessType}>Salón de uñas</button>
                <button className="btn btn-secondary m-1" onClick={onSelectBusinessType}>Centro de estética</button>
                <button className="btn btn-secondary m-1" onClick={onSelectBusinessType}>Centro de masajes</button>
                <button className="btn btn-secondary m-1" onClick={onSelectBusinessType}>Otro</button>
            </ul>
        </>
    )
}
