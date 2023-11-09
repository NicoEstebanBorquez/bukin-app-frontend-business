import { NavLink } from 'react-router-dom';


export const AddBusinessServices = ({ onInputChangeServices, onAddServices }) => {


    //ver si se puede refactorizar a un único metodo ONINPUTCHANGE y pasar el metodo a "createBusinessPage"
    //Ver como hacer para que aparezca un nuevo formulario cuando se pulsa "añadir otro"

    /*let serviceDescription = "";
    let serviceDuration = "";
    let servicePrice = "";

    const onInputChange = ({ target: { name, value } }) => {
        switch (name) {
            case "serviceDescription":
                serviceDescription = value;
                break;
            case "serviceDuration":
                serviceDuration = value;
                break;
            case "servicePrice":
                servicePrice = value;
                break;
        }
    };

      const onAddServices = () => {
        const newService = {
            description: serviceDescription,
            duration: serviceDuration,
            price: servicePrice
        }
        servicesList.push(newService)
    }*/



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
            <br /><br />
            {/*<NavLink className="btn btn-primary" to="/home">Finalizar</NavLink>*/}


            <br /><br /><br /><br />
            <small>(Cada vez que se clicke "+" debería aparecer un nuevo formulario)</small>
        </>
    )
}





//JAVI - POST del objeto
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
Una forma más eficiente para sustituir el Switch:
    const onInputChange2 = ({ target: { name, value } }) => {
        const serviceList = {
            serviceDescription: () => serviceDescription = value,
            serviceDuration: () => serviceDuration = value,
            servicePrice: () => servicePrice = value
        }
        serviceList[name]();
    }
*/