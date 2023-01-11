import 'tailwindcss/tailwind.css'
import HomeDisclosure from '../src/Component/HomeDisclosure'
import { AuthProvider } from '../src/Contexts/AuthContext'


function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  )
}

export default MyApp
