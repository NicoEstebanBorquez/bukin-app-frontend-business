import "./CreateBusinessPage.css";
import { useState } from 'react';
import { AddBusinessType } from './components/AddBusinessType';
import { AddBusinessInformation } from './components/AddBusinessInformation';
import { AddBusinessServices } from './components/AddBusinessServices';


export const CreateBusinessPage = () => {

  //OBJETO BUSINESS
  const [business, setBusiness] = useState({
    type: "",
    name: "",
    address: "",
    phoneNumber: "",
    //JAVI - Quiero meter esta info dentro de un objeto, pero no consigo hacer la asignacion de
    //los valores en el metodo "handleOnInputChange" (basicInfo: {...prepState, etc)
    /*basicInfo: {
      name: "",
      address: "",
      phoneNumber: ""
    },*/
    services: []
  })




  //Metodo de AddBusinessType -----------------------------------------------------------------------
  const handleOnSelectBusinessType = (event) => {
    const businessType = event.target.innerText;
    //Una forma de hacerlo:
    /*setBusiness({
      ...business,
      type: businessType
    })*/
    //Una forma mejor:
    setBusiness((prepState) => {
      return {
        ...prepState,
        type: businessType
      }
    }
    )
  };
  //Metodo de AddBusinessType -----------------------------------------------------------------------


  //Metodo de AddBusinessInformation -----------------------------------------------------------------------
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
  //Metodo de AddBusinessInformation -----------------------------------------------------------------------


  //Metodo de AddBusinessServices -----------------------------------------------------------------------
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
  console.log(servicesList)
  const handleOnAddServices = () => {
    const newService = {
      description: serviceDescription,
      duration: serviceDuration,
      price: servicePrice
    }
    servicesList.push(newService)

    setBusiness((prepState) => {
      return {
        ...prepState,
        services: [...servicesList, servicesList]
      }
    }
    )

    //console.log(business)

  }
  //Metodo de AddBusinessServices -----------------------------------------------------------------------


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
