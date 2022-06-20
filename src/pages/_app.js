import '../styles/globals.css'
import GlassOrderProvider from '../context/GlassOrderContext'

function MyApp({ Component, pageProps }) {
  return (
    <GlassOrderProvider>
      <Component {...pageProps} />
    </GlassOrderProvider>
  )
}

export default MyApp
