const x="hello";
const ValidationFunctions = {
    required(val, errMsg) {
        return !!val ? null : errMsg;
    },
    pattern(pattern, val, errMsg) {
        return val && (pattern.test(val) ? null : errMsg);
    },
    exactLength(length, val, errMsg) {
        return val && (val.length == length ? null : errMsg);
    },
    //checking israeli id validation (from github)
    /*if (
    /\d{9}/.test(id) && Array.from(id, Number).reduce((counter, digit, i) => {
        const step = digit * ((i % 2) + 1);
         counter + (step > 9 ? step - 9 : step);
    }) % 10 != 0 )
    return errMsg;
    else {return null;}*/
    rangeVal(min, max, val, errMsg) {
        return val && ((val >= min && val <= max) ? null : errMsg);
    }

    // date(val, errMsg){
    //     return val && (validator.isDate(val) ? null : errMsg);
    // }
};


const numbersPattern = /^\d+$/;
const stringPattern = /^[A-Za-z]+$/;

//list of all input type, whith the requirements of each one
const ValidationList = {
    fname: {
        required: (val) =>
            ValidationFunctions.required(val, "First Name is required!"),
        pattern: (val) =>
            ValidationFunctions.pattern(stringPattern, val, "Name must contains only letters!")
    },
    lname: {
        required: (val) =>
            ValidationFunctions.required(val, "Last Name is required!"),
        pattern: (val) =>
            ValidationFunctions.pattern(stringPattern, val, "Name must contains only letters!")
    },
    identity: {
        required: (val) =>
            ValidationFunctions.required(val, "Identity is required!"),
        pattern: (val) =>
            ValidationFunctions.pattern(numbersPattern, val, "Identity must contains only numbers!"),
        exactLength: (val) =>
            ValidationFunctions.exactLength(9, val, "Identity must have 9 digits")
    },
    bornDate:
    {
        required: (val) =>
            ValidationFunctions.required(val, "Born Date is required!")
    },
    childrenNum: {
        required: (val) =>
            ValidationFunctions.required(val, "Children number is required!"),
        rangeVal: (val) =>
            ValidationFunctions.rangeVal(0, 20, val, 'children Num must be between 0-20')
    }, 
    HMO: {
        required: (val) =>
            ValidationFunctions.required(val, "HMO is required!"),
        pattern: (val) =>
            ValidationFunctions.pattern(stringPattern, val, "HMO must contains only letters!")
    },

    // date: {
    //     pattern: (val)=>{
    //         ValidationFunctions.date(val, "Date is invalid!")
    //     }

    // }
};

export function validateInput(inputName, val) {
    const validations = ValidationList[inputName];
    if (validations) {
        for (const checkCondition of Object.values(validations)) {
            let errMsg = checkCondition(val);
            if (errMsg) {
                return errMsg;
            }
        }
    }
    return null;
}


export function validateForm(state) {
    let isFormValid = true;
      for (const key in state) {
      const value = state[key].value;
      const validaitons = ValidationList[key];
      if (validaitons) {
        const error = validateInput(key, value);
        if (error) {
          isFormValid = false;
        }
      }
    }
  
    return isFormValid;
  }
