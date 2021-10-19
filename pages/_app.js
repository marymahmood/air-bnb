import 'tailwindcss/tailwind.css'
import '../styles/global.css'
import ProgressBar from "@badrap/bar-of-progress";
import Router from "next/router"
import {ThemeProvider} from 'next-themes'
const progress = new ProgressBar({
  size: 4,
  color: '#FD5B61',
  className: "z-50",
  delay: 100
})

Router.events.on('routeChangeStart', progress.start)
Router.events.on('routeChangeComplete', progress.finish)
Router.events.on('routeChangeError', progress.finish)

function MyApp({ Component, pageProps }) {
  return (<ThemeProvider enableSystem={true} attribute='class'>
  
  <Component {...pageProps} />
  </ThemeProvider>)
}

export default MyApp
