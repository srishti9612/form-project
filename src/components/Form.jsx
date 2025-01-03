import { Box, FormControl, TextField } from "@mui/material";
import React, { useState } from "react";

const Form = () => {

    const [validationError, setValidationError] = useState({
        email: false,
        country: false,
    })

    const [formValues, setFormValues] = useState({
        firstName: "",
        lastName: "",
        fullName: "",
        address: "",
        phoneNumber: null,
        country: "",
        state: "",
        city: "",
        zip: "",
        about: "",
    })

    const validateEmail = (email) => {
        return String(email)
            .toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );
    };

    const handleEmailChange = (e) => {
        const isEmailValid = validateEmail(e.target.value);
        const updatedValidationError = {...validationError};
        if (!isEmailValid) {
            //setEmailError(true);
        } else {
            //setEmailError(false);
        }

    }

    const handleCountryLengthValidation = (e) => {
        const isValid = !e.target.length > 20;
        return isValid;
    }

    

    const handleInputChange = (e) => {
        const fieldName = e.target.name;
        const fieldValue = e.target.value;
        const updatedFormValue = { ...formValues };
        updatedFormValue[e.target.name] = fieldValue;

        setFormValues(updatedFormValues);

        switch (fieldName) {
            case 'email':
                handleEmailChange(fieldValue); break;
        }
    }

    return (
        <FormControl>
            <Box display={"flex"}>
                <TextField value={formValues.firstName} name="firstName" id="outlined-basic" label="First Name" variant="outlined" onChange={handleInputChange} />
                <TextField id="outlined-basic" label="Last Name" variant="outlined" />
            </Box>
            <Box display={"flex"}>
                <TextField id="outlined-basic" label="Name" variant="outlined" />
                <TextField error={emailError} helperText={emailError ? "Invalid Email" : ""} id="outlined-basic" label="email" variant="outlined" value={emailValue} onChange={handleInputChange} />
                <TextField id="outlined-basic" name="phoneNumber" type="number" label="Phone number" variant="outlined" onChange={handleInputChange}/>
                <TextField id="outlined-basic" label="Address" variant="outlined" onChange={handleInputChange}/>
                <TextField id="outlined-basic" label="Country" variant="outlined" onChange={handleInputChange}/>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    name="state"
                    value={formValues.state}
                    label="State"
                    onChange={handleChange}
                >
                    <MenuItem value={"State 1"}>State 1</MenuItem>
                    <MenuItem value={"State 2"}>State 2</MenuItem>
                    <MenuItem value={"State 3"}>State 3</MenuItem>
                </Select>
                <TextField id="outlined-basic" label="City" variant="outlined" onChange={handleInputChange}/>
                <TextField id="outlined-basic" label="Zip/pincode" variant="outlined" onChange={handleInputChange}/>
                <TextField id="outlined-basic" label="About" variant="outlined" multiline onChange={handleInputChange}/>
            </Box>
        </FormControl>
    )
}

export default Form;


// ("address 400 characters");
// ("state and country 20 chars ");
// dropdown;
// city - text;
// about - 600 chars
