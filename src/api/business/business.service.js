
class Business {

    static apiBaseUrl = import.meta.env.VITE_BASE_URL;

    static async saveBusiness(business) {
        try {
            const response = await fetch(`${this.apiBaseUrl}api/businesses`, {
                method: "POST",
                body: JSON.stringify(business),
                headers: {
                    "Content-Type": "application/json",
                },
            });
            console.log("Respuesta de la API:", response);

        } catch (error) {
            console.log("Error:", error);
        }
    }

    //getBusiness()
    //getBusinesses()
    //updateBusiness()
    //(...)

}

export default Business;



