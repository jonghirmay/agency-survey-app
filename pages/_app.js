import '../styles/styles.global.scss'
import { FormProvider } from '../components/context/FormContext'



function MyApp({ Component, pageProps }) {


  return (
    <FormProvider>
        <Component {...pageProps} />
    </FormProvider>
  )
  

}

export default MyApp
