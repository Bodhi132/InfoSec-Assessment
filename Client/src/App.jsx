import MainPage from './pages/MainPage'
import { PageContextProvider } from './context/pageContext'
import { FormContextProvider } from './context/formContext'

function App() {

  return (
    <PageContextProvider>
      <FormContextProvider>
        <MainPage />
      </FormContextProvider>
    </PageContextProvider>
  )
}

export default App
