
export const AddBusinessURL = ({ onInputChange, businessObject }) => {

    const { url } = businessObject;

    return (
        <>
            <br />
            <div className="form-group">
                <div>Elige la URL de tu página</div>
                <br />
                <label>www.bukin.com/</label>
                <input
                    type="text"
                    name="businessURL"
                    value={url}
                    onChange={onInputChange}
                />
                <br />
                <small>Ejemplo: www.bukin.com/peluqueria-francis</small>
            </div>
            <br />
            <br />
        </>
    )
}
