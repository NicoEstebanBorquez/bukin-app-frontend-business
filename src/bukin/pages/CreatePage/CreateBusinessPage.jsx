import "./CreateBusinessPage.css";
import { useState } from 'react';
import { AddBusinessType } from './components/AddBusinessType';
import { AddBusinessInformation } from './components/AddBusinessInformation';
import { AddBusinessServices } from './components/AddBusinessServices';


export const CreateBusinessPage = () => {

  //OBJETO BUSINESS
  const [business, setBusiness] = useState({
    type: "",
    basicInfo: {
      name: "",
      address: "",
      phoneNumber: ""
    },
    services: []
  })


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
  const handleOnInputChange = (event) => {
    if (event.target.name === "businessName") {
      setBusiness((prevState) => {
        return {
          ...prevState,
          basicInfo: {
            ...prevState.basicInfo,
            name: event.target.value
          }
        }
      })
    }

    if (event.target.name === "businessAddress") {
      setBusiness((prevState) => {
        return {
          ...prevState,
          basicInfo: {
            ...prevState.basicInfo,
            address: event.target.value
          }
        }
      })
    }

    if (event.target.name === "businessPhoneNumber") {
      setBusiness((prevState) => {
        return {
          ...prevState,
          basicInfo: {
            ...prevState.basicInfo,
            phoneNumber: event.target.value
          }
        }
      })
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

    setBusiness((prevState) => {
      return {
        ...prevState,
        services: [...prevState.services, servicesList]
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
