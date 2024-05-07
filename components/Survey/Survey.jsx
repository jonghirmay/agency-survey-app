import { useState } from 'react'
import styles from './Survey.module.scss'
import SurveyPage1 from './SurveyPage1/SurveyPage1'
import SurveyPage2 from './SurveyPage2/SurveyPage2'
import SurveyPage3 from './SurveyPage3/SurveyPage3'
import SurveyPage4 from './SurveyPage4/SurveyPage4'


export default function Survey() {
    const [page, setPage] = useState(1);
    const [email, setEmail] = useState('');
    const [emailIsValid, setEmailIsValid] = useState('');
    const [checkboxWarning, setCheckBoxWarning] = useState('')
    const [warning, setWarning] = useState(false);
    const [formData, setFormData] = useState({
        hourlyRate: 0,
        satisfaction: 10,
        duration: 15,
        measurableResults: 10,
    });
    const [services, setServices] = useState([]);

    const updateFormData = (name, value) => {
        setFormData((prev) => ({
            ...prev,
            [name]: parseInt(value, 10),
        }))
    }


    function decrementPage() {
        setPage(prevPage => prevPage -1);
    }

    function incrementPage() {
        if(page ===  1 && services.length === 0) {
            setCheckBoxWarning('Vänligen, välj minst en tjänst för att fortsätta.'); 
            return;
        }else if(page ===3) {
            validatEmail();
            if(!emailIsValid) {
                return
            }
        }else {
            setCheckBoxWarning('');
        }

        if (page === 3) {
            validatEmail();
            if(!emailIsValid) {
                return
            }
        }

        if (page !== 1 || services.length > 0) {
            setPage(page + 1);
        }
    }

    

    //Validates if input(email) is correctly formatted
    const validatEmail = () => {
		const emailRegex = /\S+@\S+\.\S+/;
        const isValid = emailRegex.test(email)
        setEmailIsValid(isValid);
        if(!isValid) {
            setWarning('Ange en godkänd e-post för att gå vidare')  
        }else {
            setWarning('')
        }
	}   


    return (
        <div className={styles.wrapper}>
            {page > 1 &&
            <button className={styles.prevButton} onClick={decrementPage}>
              <svg wid  th="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.9584 14.5H6.04169" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M14.5 22.9583L6.04169 14.5L14.5 6.04166" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </button>}
            {page === 1 && <SurveyPage1 incrementPage={incrementPage} updateFormData={updateFormData} formData={formData} services={services} checkBoxWarning={checkboxWarning} setServices={setServices}/>}
            {page === 2 && <SurveyPage2 formData={formData} incrementPage={incrementPage} updateFormData={updateFormData}/>}
            {page === 3 && <SurveyPage3 incrementPage={incrementPage} setEmail={setEmail} setEmailIsValid={setEmailIsValid} validatEmail={validatEmail} email={email} warning={warning}/>}
            {page === 4 && <SurveyPage4 formData={formData} services={services}/>}

        </div>
    )
}