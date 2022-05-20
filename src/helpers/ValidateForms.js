// Regular expressions
const regEx4Names = /^[A-Za-z\s?]+$/;
const regEx4Selector = /^[A-Za-z\-\s?]+$/;
const regExp4Email = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
const regExp4Number = /^([0-9])*$/
const regExp4Pass =  /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{8,30}$/

export const validateNames = (campo) => {
  if (
    regEx4Names.test(campo) &&
    campo.trim().length < 23 &&
    campo.trim().length > 0 &&
    campo !== ""
  ) {
    return true;
  } else {
    return false;
  }
};

export const validateVet = (campo) => {
  if (
    regEx4Selector.test(campo) &&
    (campo === "Dra Marta Minujin" || campo === "Dr Jorge Ignacio")
  ) {
    return true;
  } else {
    return false;
  }
};



export const validateEmail = (campo)=>{
  if(regExp4Email.test(campo)){
    return true
  }else{
    return false
  }
}

export const validatePassword = (campo)=>{
  if(regExp4Pass.test(campo)){
    return true
  }else{
    return false
  }

}


// let date = new Date();
// let output = String( date.getFullYear() + '-' + String(date.getMonth() + 1).padStart(2, '0') + '-' +date.getDate()).padStart(2, '0');


// let date = new Date();
// let output = date.getDate()+'/'+(date.getMonth()+1)+'/'+date.getFullYear()

let date = new Date()
let output = date.getFullYear()+ '-'+ `${(date.getMonth()+1)}`.padStart(2,'0') + '-' + `${(date.getDate())}`.padStart(2,'0') 



export const validateDate =(campo)=>{
  if(campo > output){
  return true
  }else{
    return false
  }
}



export const validateNumber= (campo)=>{
  if(regExp4Number.test(campo)&& campo.length<13){
    return true
  }else{
    return false
  }
}

// Validacion Pacientes
export const validatePaciente = (field) => {
  if (regEx4Names.test(field) && field.trim() !== "") {
    return true;
  } else {
    return false;
  }
};






export const validateMesage = (campo)=>{
  if (campo.length < 300 && campo.length > 0){
    return true
  } else {
    return false
  }
}


