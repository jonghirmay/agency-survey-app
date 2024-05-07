import styles from './surveyPage3.module.scss'


export default function SurveyPage3({ incrementPage ,email, warning, setEmail}) {

	const handleEmailChange = (e) => {
		setEmail(e.target.value);
	}

    return (
			<div className={styles.wrapper}>
			<h2 className={styles.header}>Sista steget</h2>	
				<div className={styles.grid}>
					<p>Ange din e-post för att ta del av resultat och hur passande er byrå är för ert företag.</p>

					<div className={styles.sendEmail}>
						<label>Ange din e-post</label>
						<div>
							<input className={'textInput'} type="email" placeholder={'Ange din e-post'} value={email} onChange={handleEmailChange}/>
							{warning && <p className={styles.emailWarningMessage}>{warning}</p>}
						</div>
					</div>	
				</div>
				<div className={styles.nextButtonDiv}>
                	<button className={styles.nextButton} onClick={incrementPage}>SE RESULTAT</button>
            	</div>
			</div>	
    )
  }