import 'tailwindcss/tailwind.css'
import HomeDisclosure from '../Component/HomeDisclosure'
import { AuthProvider } from '../Contexts/AuthContext'


function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  )
}

export default MyApp
