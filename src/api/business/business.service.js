
class Business {
    apiBaseUrl = import.meta.env.VITE_BASE_URL;

    static saveBusiness(business) {

        fetch(`${apiBaseUrl}api/businesses`, {

            method: "POST",
            body: JSON.stringify(business),
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((response) => {
                console.log("Respuesta de la API:", response);
            })
            .catch((error) => {
                console.log("Error:", error);
            });
    }

    //getBusiness()
    //getBusinesses()
    //updateBusiness()
    //(...)

}

export default Business;



