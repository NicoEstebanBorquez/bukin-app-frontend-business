
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
                    value={businessObject.businessBasicInfo.name}
                    onChange={onInputChange}
                />
            </div>

            <div className="form-group">
                <label>Dirección</label>
                <input
                    className="form-control"
                    type="text"
                    name="businessAddress"
                    value={businessObject.businessBasicInfo.address}
                    onChange={onInputChange}
                />
            </div>

            <div className="form-group">
                <label>Teléfono</label>
                <input
                    className="form-control"
                    type="text"
                    name="businessPhoneNumber"
                    value={businessObject.businessBasicInfo.phoneNumber}
                    onChange={onInputChange}
                />
            </div>
        </>
    )
}
