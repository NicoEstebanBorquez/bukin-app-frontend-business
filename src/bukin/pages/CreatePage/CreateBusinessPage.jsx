import "./CreateBusinessPage.css";
import { useState } from 'react';
import { AddBusinessType } from './components/AddBusinessType';
import { AddBusinessInformation } from './components/AddBusinessInformation';
import { AddBusinessServices } from './components/AddBusinessServices';
import Business from "../../../api/business/business.service";
import { AddBusinessURL } from "./components/AddBusinessURL";


export const CreateBusinessPage = () => {

  //OBJETO BUSINESS
  const [business, setBusiness] = useState({
    type: "",
    basicInfo: {
      name: "",
      address: "",
      phoneNumber: ""
    },
    url: "",
    services: []
  })

  console.log(business);

  //TODO - Todos estos métodos y lógica (que tienen la finalidad de gestionar el estado de "business") debe ir en un custom hook.
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
            basicInfo: {
              ...prevState.basicInfo,
              name: value
            }
          }
        });
        break;

      case "businessAddress":
        setBusiness((prevState) => {
          return {
            ...prevState,
            basicInfo: {
              ...prevState.basicInfo,
              address: value
            }
          }
        });
        break;

      case "businessPhoneNumber":
        setBusiness((prevState) => {
          return {
            ...prevState,
            basicInfo: {
              ...prevState.basicInfo,
              phoneNumber: value
            }
          }
        });
        break;
    }
  }
  //AddBusinessInformation -----------------------------------------------------------------------

  //AddBusinessURL (3) -----------------------------------------------------------------------
  const handleOnInputChangeURL = ({ target: { value } }) => {
    setBusiness((prevState) => {
      return {
        ...prevState,
        url: value
      }
    });
  }
  //AddBusinessURL -----------------------------------------------------------------------


  //AddBusinessServices (4) -----------------------------------------------------------------------
  const [service, setService] = useState({
    description: "",
    duration: "",
    price: ""
  })

  const handleOnInputChangeServices = ({ target: { name, value } }) => {
    switch (name) {
      case "serviceDescription":
        setService((prevState) => {
          return {
            ...prevState,
            description: value
          }
        })
        break;
      case "serviceDuration":
        setService((prevState) => {
          return {
            ...prevState,
            duration: value
          }
        })
        break;
      case "servicePrice":
        setService((prevState) => {
          return {
            ...prevState,
            price: value
          }
        })
        break;
    }
  };

  const handleOnAddServices = () => {
    setBusiness((prevState) => {
      return {
        ...prevState,
        services: [...prevState.services, service]
      }
    }
    )
  }

  const handleOnSendBusinessObject = () => {
    console.log(business)
    Business.saveBusiness(business)
  }
  //AddBusinessServices -----------------------------------------------------------------------


  //STEPS ---------------------------------------------------------------------------
  const stepComponents = [
    () => <AddBusinessType onSelectBusinessType={handleOnSelectBusinessType} />,
    () => <AddBusinessInformation onInputChange={handleOnInputChange} businessObject={business} />,
    () => <AddBusinessURL onInputChange={handleOnInputChangeURL} businessObject={business} />,
    () => <AddBusinessServices onInputChangeServices={handleOnInputChangeServices} onAddServices={handleOnAddServices} onSendBusinessObject={handleOnSendBusinessObject} />
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
