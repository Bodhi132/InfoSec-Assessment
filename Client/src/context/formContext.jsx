import {createContext, useState} from "react";

export const FormContext = createContext({});

export function FormContextProvider({children}) {

    const [data, setData] = useState({
      name: '',
      email: '',
      title:'',
      dob:null,
      city:"",
      referalId:0,
      profilePic:'',
      resume:'',
      educationalDetails:[{}],
      org:[],
      resp:[],
      jDate:null,
      rDate:null,
      skills:[],
      exp:[],
      brief:[],
      
    })

  return (
    <FormContext.Provider value={{data, setData}}>
      {children}
    </FormContext.Provider>
  );
}