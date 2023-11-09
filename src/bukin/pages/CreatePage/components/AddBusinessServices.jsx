
export const AddBusinessServices = ({ onInputChangeServices, onAddServices }) => {

    //TODO - Ver como hacer para que aparezca un nuevo formulario cuando se hace click en "Añadir otro servicio"

    return (
        <>
            <div>AddBusinessServicesPage</div>

            <div>Añade los servicios que ofrece tu negocio</div>
            <br />
            <div>
                <div className="form-group">
                    <label>Descripción</label>
                    <input
                        className="form-control"
                        type="text"
                        name="serviceDescription"
                        onChange={onInputChangeServices}
                    />
                </div>

                <div className="form-group">
                    <label>Duración</label>
                    <input
                        className="form-control"
                        type="text"
                        name="serviceDuration"
                        onChange={onInputChangeServices}
                    />
                </div>

                <div className="form-group">
                    <label>Precio</label>
                    <input
                        className="form-control"
                        type="text"
                        name="servicePrice"
                        onChange={onInputChangeServices}
                    />
                </div>
            </div>

            <br />
            <button className="btn btn-primary" onClick={event => onAddServices(event)}>+ Añadir otro servicio</button>
        </>
    )
}





//NOTE - POST del objeto
/*
fetch("http://127.0.0.1:5173/services", {
    method: "POST",
    body: JSON.stringify(newService),
    headers: {
    "Content-Type": "application/json",
    },
})
.then((response) => {
    // Procesar la respuesta de la API
    console.log("Respuesta de la API:", response);
})
.catch((error) => {
    // Manejar el error
    console.log("Error:", error);
});
*/

/*
//NOTE - Una forma más eficiente para sustituir el Switch:
    const onInputChange2 = ({ target: { name, value } }) => {
        const serviceList = {
            serviceDescription: () => serviceDescription = value,
            serviceDuration: () => serviceDuration = value,
            servicePrice: () => servicePrice = value
        }
        serviceList[name]();
    }
*/