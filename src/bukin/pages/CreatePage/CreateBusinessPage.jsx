import "./CreateBusinessPage.css";
import { useState } from 'react';
import { AddBusinessType } from './components/AddBusinessType';
import { AddBusinessInformation } from './components/AddBusinessInformation';
import { AddBusinessServices } from './components/AddBusinessServices';


export const CreateBusinessPage = () => {

  //OBJETO BUSINESS
  const [business, setBusiness] = useState({
    type: "",
    businessBasicInfo: {
      name: "",
      address: "",
      phoneNumber: ""
    },
    services: []
  })


  //JAVI - Ordenar estos métodos en sus respectivos ficheros
  //AddBusinessType (1) -----------------------------------------------------------------------
  const handleOnSelectBusinessType = (event) => {
    const businessType = event.target.innerText;
    setBusiness((prevState) => {
      return {
        ...prevState,
        type: businessType
      }
    }
    )
    //NOTE - Otra forma de hacerlo:
    /*setBusiness({
      ...business,
      type: businessType
    })*/
  };
  //AddBusinessType -----------------------------------------------------------------------


  //AddBusinessInformation (2) -----------------------------------------------------------------------
  const handleOnInputChange = ({ target: { name, value } }) => {
    switch (name) {
      case "businessName":
        setBusiness((prevState) => {
          return {
            ...prevState,
            businessBasicInfo: {
              ...prevState.businessBasicInfo,
              name: value
            }
          }
        });

      case "businessAddress":
        setBusiness((prevState) => {
          return {
            ...prevState,
            businessBasicInfo: {
              ...prevState.businessBasicInfo,
              address: value
            }
          }
        });

      case "businessPhoneNumber":
        setBusiness((prevState) => {
          return {
            ...prevState,
            businessBasicInfo: {
              ...prevState.businessBasicInfo,
              phoneNumber: value
            }
          }
        });
    }
  }
  //AddBusinessInformation -----------------------------------------------------------------------


  //AddBusinessServices (3) -----------------------------------------------------------------------
  //TODO - Refactorizar esto, se puede mejorar:
  let serviceDescription = "";
  let serviceDuration = "";
  let servicePrice = "";

  const handleOnInputChangeServices = ({ target: { name, value } }) => {
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

  //let servicesList = [];

  const handleOnAddServices = () => {
    const newService = {
      description: serviceDescription,
      duration: serviceDuration,
      price: servicePrice
    }
    //servicesList.push(newService)
    //JAVI - Hay un error aquí. Se está creando un array de arrays.
    setBusiness((prevState) => {
      return {
        ...prevState,
        services: [...prevState.services, newService]
      }
    }
    )
  }

  const handleSendBusinessObject = () => {
    /*const fakeBusiness = {
      type: "peluqueria",
      businessBasicInfo: {
        name: "Peluqueria Francisco",
        address: "Calle La Luz",
        phoneNumber: "611222333"
      },
      services: [
        {
          description: "servicio 2",
          duration: "20",
          price: "10"
        },
        {
          description: "servicio 1",
          duration: "30",
          price: "12"
        }
      ]
    }*/

   
    console.log(business)

      //JAVI - Sacar esto fuera?
    fetch("http://localhost:7777/api/businesses", {
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
  //AddBusinessServices -----------------------------------------------------------------------


  //STEPS ---------------------------------------------------------------------------
  const stepComponents = [
    () => <AddBusinessType onSelectBusinessType={handleOnSelectBusinessType} />,
    () => <AddBusinessInformation onInputChange={handleOnInputChange} businessObject={business} />,
    () => <AddBusinessServices onInputChangeServices={handleOnInputChangeServices} onAddServices={handleOnAddServices} sendBusinessObject={handleSendBusinessObject} />
  ];

  const [currentStep, setCurrentStep] = useState(0);

  const onNextStep = () => {
    setCurrentStep(currentStep + 1)
  }

  const onPreviousStep = () => {
    setCurrentStep(currentStep - 1)
  }
  //STEPS ---------------------------------------------------------------------------


  return (
    <>
      <div>CreateBusinessPage</div>

      {
        stepComponents[currentStep]()
      }

      {
        (currentStep < stepComponents.length - 1) ? <button className="btn btn-primary m-1" onClick={onNextStep}>Siguiente</button> : <></>
      }

      {
        (currentStep > 0) ? <button className="btn btn-secondary m-1" onClick={onPreviousStep}>Atrás</button> : <></>
      }
    </>
  )
}
