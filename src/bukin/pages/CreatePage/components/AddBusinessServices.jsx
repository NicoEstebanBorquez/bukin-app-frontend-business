import { useState } from "react";

export const AddBusinessServices = ({ onInputChangeServices, onAddServices }) => {

    //TODO - Ver como hacer para que aparezca un nuevo formulario cuando se hace click en "Añadir otro servicio"

    const [counter, setCounter] = useState(1);

    const servicesCounter = (event) => {
        setCounter(counter + 1)
    }

    console.log("counter: ", counter)

    return (
        <>
            <div>AddBusinessServicesPage</div>

            <div>Añade los servicios que ofrece tu negocio</div>
            <br />

        {/* //JAVI - Se podría hacer esto con un bucle For?*/}
            {
                [...Array(counter).keys()].map((i) => (
                    <div key={i}>
                        <h3>servicio {i+1}</h3>
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
                ))
            }

            <br />
            {/* //JAVI - Se puede pasar más de 1 método a "onClick"? Hay alguna forma mejor?*/}
            <button className="btn btn-primary" onClick={event => [onAddServices(event), servicesCounter(event)]}>+ Añadir otro servicio</button>
            <button className="btn btn-primary m-2">Finalizar</button>
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