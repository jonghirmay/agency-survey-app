import styles from './surveyPage4.module.scss'
import OfferButton from './OfferButton'
import ResultsGraphics from './ResultsGraphics/ResultsGraphics'

export default function SurveyPage4({formData, services}) {


    const totalScore = Object.values(formData).reduce((total, value) => total + value, 0)

    const resultsMessage = (score) => {
        if(score > 85) {
            return (
                <div style={{color: '#2DABE3'}}>
                    <p>
                        Ditt byråsamarbete får ett högt betyg, grattis!
                        Det kan dock vara värt att jämföra erbjudanden från andra byråer för att få en mer träffssäker bild av samarbetet.     
                    </p>
                </div>
 
            )
        }else if(score > 50 && score <= 85) {
            return (
                <div style={{color: '#D88D36'}}>
                    <p>
                        Ditt byråsamarbete får ett genomsnittligt betyg.
                        Det finns dock en stor chans att du kan hitta en byrå som presterar bättre.
                    </p>
                </div>
            )
        }else {
            return (
                <div style={{color: '#D83636'}}>
                    <p>
                        Ditt byråsamarbete får ett beyg under genomsnittet.
                        Det finns dock en mycket stor chans att du kan hitta en byrå som presterar bättre.
                    </p>
                </div>
            )
        }
    }

    const results = resultsMessage(totalScore);

    return (
        <div className={styles.wrapper}>

            <h2 className={styles.header}>Här kommer ditt resultat</h2>
            <div className={styles.grid}>
                <div className={styles.resultsGrade}>
                    <h5>Betyg</h5>
                    <div className={styles.resultsCircle}>
                        <ResultsGraphics totalScore={totalScore}/>
                    </div>
                   
                </div>
                <div className={styles.resultsMotivation}>
                    <h4>Motivering</h4>
                    <p>{results}</p>
                </div>
            </div>
            <div className={styles.bottomGrid}>
                <div className={styles.lastPhrase}>
                    <p className={styles.endPhrase}>Vill du jämföra flera byråer inom t.ex apputveckling</p>
                </div>
                <div className={styles.offerButtonDiv}>
                    <OfferButton services={undefined}/>
                </div>
            </div>
        </div>
    )
}