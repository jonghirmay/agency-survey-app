import CheckBox from '../../utils/checkbox/checkbox';
import styles from './surveyPage1.module.scss'
import Link from 'next/link'
import CustomRangeSlider from './CustomRangeSlider/CustomRangeSlider';

export default function SurveyPage1({ incrementPage, formData, updateFormData, services, setServices, checkBoxWarning }) {

    const handleCheckboxChange = (name, checked) => {
      if(checked) {
        let newServices = [...services];
        newServices.push(name);
        setServices(newServices)
      }else {
        let newServices = [...services];
        const filtered = newServices.filter(element => element !== name);
        setServices(filtered)
      };
  };

  // console.log(services)

    const handleChange = (e) => {
      const { name, value } = e.target;
      updateFormData(name, value);
    };

    return (
      <div className={styles.wrapper}>
        <h3 className={styles.header}>Utvärdera er digitala byrå</h3> 
        <p>
          Svara på några enkla frågor och ta reda på om er byrå är rätt val för ert företag.
          Har du ingen byrå idag?
          <Link href="/skapa-uppdrag"><a>Hitta en byrå här</a></Link>
        </p>

        <div className={styles.grid}>

          <div className={styles.questionOne}>
            <h5> Vilka tjänster hjälper byrån med idag?</h5>
            <ul className={styles.questionOneList}>
              <div>
                <li><CheckBox blueVersion={true} name="webbutveckling" label={'Webbutveckling'} value={services.includes("webbutveckling")} handleChange={handleCheckboxChange}/></li>
                <li><CheckBox blueVersion={true} name="e-handel" label={'E-handel'} value={services.includes("e-handel")} handleChange={handleCheckboxChange}/></li>
                <li><CheckBox blueVersion={true} name="apputveckling" label={'Apputveckling'} value={services.includes("apputveckling")} handleChange={handleCheckboxChange}/></li>
                <li><CheckBox blueVersion={true} name="marknadsforing" label={'Digital Marknadsföring'} value={services.includes("marknadsforing")} handleChange={handleCheckboxChange}/></li>
                <li><CheckBox blueVersion={true} name="grafisk-design" label={'Grafisk Design'} value={services.includes("grafisk-design")} handleChange={handleCheckboxChange}/></li>
              </div>
              
              <div>
              <li><CheckBox blueVersion={true} name="videofotografering" label={'Video & Fotografering'} value={services.includes("videofotografering")} handleChange={handleCheckboxChange}/></li>
              <li><CheckBox blueVersion={true} name="branding" label={'Branding'} value={services.includes("branding")} handleChange={handleCheckboxChange}/></li>
              <li><CheckBox blueVersion={true} name="ux-design" label={'UX-Design'} value={services.includes("ux-design")} handleChange={handleCheckboxChange}/></li>
              <li><CheckBox blueVersion={true} name="it-support" label={'IT-Support'} value={services.includes("it-support")} handleChange={handleCheckboxChange}/></li>
              <li><CheckBox blueVersion={true} name="affärs-utveckling" label={'Affärsutveckling'} value={services.includes("affärs-utveckling")} handleChange={handleCheckboxChange}/></li>
              </div>
            </ul>
          </div>
          <div className={styles.warningDiv}>
            {checkBoxWarning && <p className={styles.warningMessage}>{checkBoxWarning}</p>}
          </div>



          <div className={styles.questions}>
            <CustomRangeSlider name="hourlyRate" onChange={updateFormData} value={formData.hourlyRate}/>
          </div>

        
          <div className={styles.questions}>
            <label>Har byrån jobbat med liknande projekt förut inom er bransch nisch</label>
            <ul className={styles.thirdQuestionlist}>
              <li>
                <div>
                  <input type="radio" id="experience1" name="experience" value={20} onChange={handleChange}></input>
                  <label htmlFor='experience'>Ja</label>
               </div>
              </li>

              <li>
                <div>
                  <input type="radio" id="experience2" name="experience" value={0} onChange={handleChange}></input>
                  <label htmlFor='experience'>Nej</label>
                </div>
              </li>
            </ul>
          </div>
          <div className={styles.nextButtonDiv}>
                <button className={styles.nextButton} onClick={incrementPage}>FORTSÄTT TILL STEG 2</button>
          </div>        </div>
      </div>  
    )
  }