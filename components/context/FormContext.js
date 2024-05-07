import { createContext, useContext, useState, useMemo } from "react";

const FormContext = createContext();

export const useFormContext = () => useContext(FormContext);

export const FormProvider = ({ children }) => {
    const [formData, setFormData] = useState({
        hourlyRate: 0,
        experience: 0,
        satisfaction: 0,
        duration: 0,
        measurableResults: 0,
    });

    const updateFormData = (name, value) => {
        setFormData((prev) => ({
            ...prev,
            [name]: parseInt(value, 10),
        }))
    }
    const contextValue = useMemo(() => ({formData, updateFormData}), [formData, updateFormData])

    return <FormContext.Provider value={contextValue}>{children}</FormContext.Provider>
}