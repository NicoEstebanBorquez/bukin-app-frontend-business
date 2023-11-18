import { useState } from "react";

export const AddBusinessServices = ({ onInputChangeServices, onAddServices, onSendBusinessObject }) => {


    const [counter, setCounter] = useState(1);
    const servicesCounter = (event) => {
        setCounter(counter + 1)
    }
    console.log("counter: ", counter)

    const handleOnClickSendButton = () => {
        onSendBusinessObject();
        //NOTE - Si hubiera que realizar más acciones a la hora de enviar la petición, se haría aquí.
    }


    return (
        <>
            <div>AddBusinessServicesPage</div>

            <div>Añade los servicios que ofrece tu negocio</div>
            <br />

            {
                [...Array(counter).keys()].map((i) => (
                    <div key={i}>
                        <h3>servicio {i + 1}</h3>
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
            <button className="btn btn-primary" onClick={event => {
                onAddServices(event);
                servicesCounter(event);
            }}>+ Añadir otro servicio</button>
            <button className="btn btn-primary m-2" onClick={handleOnClickSendButton}>Finalizar</button>
        </>
    )
}


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