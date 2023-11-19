
export const AddBusinessURL = ({ onInputChange, businessObject, URLValidState }) => {

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
                {
                    URLValidState ? <></> : <small style={{ color: "red" }}>
                        Caracter no válido.
                        <br />
                        Carácteres permitidos:
                        <br />
                        - Letras (excepto la <b>ñ</b>)<br />
                        - Números<br />
                        - Guiones ("-")
                        <br />
                        <b>Ejemplo "peluqueria-maribel"</b></small>
                }
                <br />
            </div>
            <br />

            <h5>Tu página será:</h5><h1>www.bukin.com/{url}</h1>

            <br />
            <br />
        </>
    )
}
