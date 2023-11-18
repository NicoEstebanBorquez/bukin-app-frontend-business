import "./CreateBusinessPage.css";
import { useState } from 'react';
import { AddBusinessType } from './components/AddBusinessType';
import { AddBusinessInformation } from './components/AddBusinessInformation';
import { AddBusinessServices } from './components/AddBusinessServices';
import Business from "../../../api/business/business.service";


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
        break;

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
        break;

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
        break;
    }
  }
  //AddBusinessInformation -----------------------------------------------------------------------


  //AddBusinessServices (3) -----------------------------------------------------------------------
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
