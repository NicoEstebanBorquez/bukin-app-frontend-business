
export const AddBusinessInformation = ({ onInputChange, businessObject }) => {
    
    const { name, address, phoneNumber } = businessObject.basicInfo;

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
                    value={name}
                    onChange={onInputChange}
                />
            </div>

            <div className="form-group">
                <label>Dirección</label>
                <input
                    className="form-control"
                    type="text"
                    name="businessAddress"
                    value={address}
                    onChange={onInputChange}
                />
            </div>

            <div className="form-group">
                <label>Teléfono</label>
                <input
                    className="form-control"
                    type="text"
                    name="businessPhoneNumber"
                    value={phoneNumber}
                    onChange={onInputChange}
                />
            </div>
        </>
    )
}
