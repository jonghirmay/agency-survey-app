import styles from './surveyPage4.module.scss'
import Link from 'next/link'
export default function OfferButton({ services }) {


    const url = () => {
        const validProjectTypes = ['apputveckling','marknadsforing','design','e-handel','videofotografering','webbutveckling'];
        const filteredServices = services?.filter(service => validProjectTypes.includes(service));

        if(filteredServices?.length > 0) {
            return `/skapa-uppdrag?byra=${filteredServices[0]}`;
        }else {
            return '/skapa-uppdrag'
        }
    }
    console.log(services)
    

    return (
        <div>
            <button className={styles.offerButton}><Link href={url()}><a>FÅ OFFERTFÖRSLAG</a></Link> </button>
        </div>
    )

}