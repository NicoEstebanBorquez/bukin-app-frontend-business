
export const AddBusinessInformation = ({ onInputChange, businessObject }) => {

    return (
        <>
            <div>AddBusinessInformationPage</div>
            <div>Añade la información de tu negocio:</div>

            <div className="form-group">
                <label>Nombre</label>
                <input
                    className="form-control"
                    type="text"
                    name="businessName"
                    value={businessObject.name}
                    onChange={event => onInputChange(event)}
                />
            </div>

            <div className="form-group">
                <label>Dirección</label>
                <input
                    className="form-control"
                    type="text"
                    name="businessAddress"
                    value={businessObject.address}
                    onChange={event => onInputChange(event)}
                />
            </div>

            <div className="form-group">
                <label>Teléfono</label>
                <input
                    className="form-control"
                    type="text"
                    name="businessPhoneNumber"
                    value={businessObject.phoneNumber}
                    onChange={event => onInputChange(event)}
                />
            </div>
        </>
    )
}
