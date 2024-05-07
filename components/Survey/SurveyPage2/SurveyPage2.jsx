import styles from './surveyPage2.module.scss'

export default function SurveyPage2({ incrementPage ,updateFormData, formData }) {


    const handleChange = (e) => {
      const { name, value } = e.target;
        updateFormData(name, value);
    };



    return (
      <div className={styles.wrapper}>
        <h2 className={styles.header}>Utvärdera er digitala byrå</h2>

        <div className={styles.grid}>
          <div className={styles.questions}>
              <label>Hur nöjda är ni med er byrå idag?</label>
              <ul>
                  <li>
                    <input type="radio" id="satisfaction1" name="satisfaction" value={0} onChange={handleChange} checked={formData.satisfaction === 0}/>
                    <div>
                      <label for="satisfaction1">1</label>
                    </div>

                  </li>
                  

                  <li>
                    <input type="radio" id="satisfaction2" name="satisfaction" value={5} onChange={handleChange} checked={formData.satisfaction === 5}/>
                    <div>
                      <label for="satisfaction2">2</label>
                    </div>
                  </li>

                  <li>
                    <input type="radio" id="satisfaction3" name="satisfaction" value={10} onChange={handleChange} checked={formData.satisfaction === 10}/>
                    <div>
                      <label for="satisfaction3">3</label>
                    </div>
                  </li>

                  <li>
                    <input type="radio" id="satisfaction4" name="satisfaction" value={15} onChange={handleChange} checked={formData.satisfaction === 15}/>
                    <div>
                      <label for="satisfaction4">4</label>
                    </div>
                  </li>

                  <li>
                    <input type="radio" id="satisfaction5" name="satisfaction" value={20} onChange={handleChange} checked={formData.satisfaction === 20}/>
                    <div>
                      <label for="satisfaction5">5</label>
                    </div>
                  </li>

              </ul>
              <div className={styles.inputSubHeading}>
                    <div>
                      <label>Mycket bra</label>
                    </div>
                    
                    <div>
                      <label>Mycket Dåligt</label>
                    </div>
              </div>
            </div>

          <div className={styles.questions}>
              <label>Hur länge har ni jobbat med er byrå?</label>
              <ul className={styles.timeOfCooperation}>
                  <li> 
                    <input type="radio" id="duration1" name='duration' value={5} onChange={handleChange} checked={formData.duration === 5}/>
                    <div>
                      <label htmlFor='duration1'>1 år</label>
                    </div>                  </li>
                  <li>
                    <input type="radio" id="duration2" name='duration' value={10} onChange={handleChange} checked={formData.duration === 10}/>
                    <div>
                      <label htmlFor='duration2'>1-2 år</label>
                    </div>                  </li>
                  <li>
                    <input type="radio" id="duration3" name='duration' value={15} onChange={handleChange} checked={formData.duration === 15}/>
                    <div>
                      <label htmlFor='duration3'>3-4 år</label>
                    </div>                  </li>
                  <li>
                    <input type="radio" id="duration4" name='duration' value={20} onChange={handleChange} checked={formData.duration === 20}/>
                    <div>
                      <label htmlFor='duration4'>5+ år</label>
                    </div>
                  </li>
              </ul>
          </div>

          <div className={styles.questions}>
            <label>
              Hur bra är byrån på att skapa mätbara resultat:
              Hur väl rapporteras resultaten
            </label>
            <ul>
              <li>
                <input type='radio' id="measurableResults1" name='measurableResults' value={0} onChange={handleChange} checked={formData.measurableResults === 0}/>
                <div>
                  <label htmlFor="measurableResults1">1</label>
                </div>
              </li>
              <li>
                <input type='radio' id="measurableResults2" name='measurableResults' value={5} onChange={handleChange} checked={formData.measurableResults === 5}/>
                <div>
                  <label htmlFor="measurableResults2">2</label>
                </div>              </li>
              <li>
                <input type='radio' id="measurableResults3" name='measurableResults' value={10} onChange={handleChange} checked={formData.measurableResults === 10}/>
                <div>
                  <label htmlFor="measurableResults3">3</label>
                </div>              </li>
              <li>
                <input type='radio' id="measurableResults4" name='measurableResults' value={15} onChange={handleChange} checked={formData.measurableResults === 15}/>
                <div>
                  <label htmlFor="measurableResults4">4</label>
                </div>              </li>
              <li>
                <input type='radio' id="measurableResults5" name='measurableResults' value={20} onChange={handleChange} checked={formData.measurableResults === 20}/>
                <div>
                  <label htmlFor="measurableResults5">5</label>
                </div>              
              </li>
            </ul>

            <div className={styles.inputSubHeading}>
                    <div>
                      <label>Mycket bra</label>
                    </div>
                    
                    <div>
                      <label>Mycket Dåligt</label>
                    </div>
              </div>
            
          </div>
        </div>

        <div className={styles.nextButtonDiv}>
            <button className={styles.nextButton} onClick={incrementPage}>FORTSÄTT TILL SISTA STEGET</button>
        </div>
 </div>
    )
  }