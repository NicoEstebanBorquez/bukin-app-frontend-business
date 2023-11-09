import "./CreateBusinessPage.css";
import { useState } from 'react';
import { AddBusinessType } from './components/AddBusinessType';
import { AddBusinessInformation } from './components/AddBusinessInformation';
import { AddBusinessServices } from './components/AddBusinessServices';


export const CreateBusinessPage = () => {

  //OBJETO BUSINESS
  const [business, setBusiness] = useState({
    type: "",
    /* //JAVI - Quiero meter esta info dentro de un objeto, pero no consigo hacer la asignacion de
     los valores en el metodo "handleOnInputChange" (basicInfo: {...prepState, etc)*/
    name: "",
    address: "",
    phoneNumber: "",
    /*basicInfo: {
      name: "",
      address: "",
      phoneNumber: ""
    },*/
    services: []
  })


  //AddBusinessType (1) -----------------------------------------------------------------------
  const handleOnSelectBusinessType = (event) => {
    const businessType = event.target.innerText;
    setBusiness((prepState) => {
      return {
        ...prepState,
        type: businessType
      }
    }
    )
    //Otra forma de hacerlo:
    /*setBusiness({
      ...business,
      type: businessType
    })*/
  };
  //AddBusinessType -----------------------------------------------------------------------


  //AddBusinessInformation (2) -----------------------------------------------------------------------
  const handleOnInputChange = (event) => {
    if (event.target.name === "businessName") {
      setBusiness({
        ...business,
        name: event.target.value
      })
    }
    if (event.target.name === "businessAddress") {
      setBusiness((prepState) => {
        return {
          ...prepState,
          address: event.target.value
        }
      }
      )
    }
    if (event.target.name === "businessPhoneNumber") {
      setBusiness((prepState) => {
        return {
          ...prepState,
          phoneNumber: event.target.value
        }
      }
      )
    }
  }
  //AddBusinessInformation -----------------------------------------------------------------------


  //AddBusinessServices (3) -----------------------------------------------------------------------
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

  let servicesList = [];

  const handleOnAddServices = () => {
    const newService = {
      description: serviceDescription,
      duration: serviceDuration,
      price: servicePrice
    }
    servicesList.push(newService)

    //JAVI - No consigo actualizar el array "services" (linea 23) sin que se dupliquen los elementos anteriores
    setBusiness((prepState) => {
      return {
        ...prepState,
        services: [...servicesList, servicesList]
      }
    }
    )
  }
  //AddBusinessServices -----------------------------------------------------------------------


  //STEPS ---------------------------------------------------------------------------
  const stepComponents = [
    () => <AddBusinessType onSelectBusinessType={handleOnSelectBusinessType} />,
    () => <AddBusinessInformation onInputChange={handleOnInputChange} businessObject={business} />,
    () => <AddBusinessServices onInputChangeServices={handleOnInputChangeServices} onAddServices={handleOnAddServices} />
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
