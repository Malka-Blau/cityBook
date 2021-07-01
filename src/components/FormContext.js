import { useState, createContext } from "react";

export const FormContext = createContext();

/*export const FormProvider = FormContext.Provider;*/
export const FormProvider = (props) => {

const [userDataPro, setUserDataPro] = useState({ fname: '', lname: '', identity: '', HMO: '', bornDate: new Date(), gender: '', HMO: '', childrenNum:'' });
//const [errorsMsg, setErrorsMsg]= useState([{fname:'' }, {lname:''}, {identity:''},{childrenNum:''}, {date:''}]);
const [errorsMsgPro, setErrorsMsgPro]= useState({});
const [childrenPro, setChildrenPro]= useState([]);

  return (<FormContext.Provider  value={{ userDataPro: [userDataPro, setUserDataPro], errorsMsgPro: [errorsMsgPro, setErrorsMsgPro] , childrenPro: [childrenPro, setChildrenPro]}}>
  {props.children}
  {/* <h1>Provider Footer</h1> */}
  </FormContext.Provider>
  )
}



/*export function useFormContext() {
  const context = useContext(FormContext);
  if (!context) {
    throw new Error("useFormContext must be used within a FormProvider");
  }
  return context;
}
*/





/*


import React, { memo } from "react";
import { useForm, FormProvider, useFormContext } from "react-hook-form";

// we can use React.memo to prevent re-render except isDirty state changed
const NestedInput = memo(
  ({ register, formState: { isDirty } }) => (
    <div>
      <input {...register("test")} />
      {isDirty && <p>This field is dirty</p>}
    </div>
  ),
  (prevProps, nextProps) =>
    prevProps.formState.isDirty === nextProps.formState.isDirty
);

export const NestedInputContainer = ({ children }) => {
  const methods = useFormContext();

  return <NestedInput {...methods} />;
};

export default function App() {
  const methods = useForm();
  const onSubmit = data => console.log(data);
  console.log(methods.formState.isDirty); // make sure formState is read before render to enable the Proxy

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <NestedInputContainer />
        <input type="submit" />
      </form>
    </FormProvider>
  );
}
*/