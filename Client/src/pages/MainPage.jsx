import React from 'react'
import SideBar from '../components/SideBar'
import TopBar from '../components/TopBar'
import FormNav from '../components/Forms/FormNav'
import GeneralDetails from '../components/Forms/GeneralDetails'
import EdDetails from '../components/Forms/EdDetails'
import ProfExp from '../components/Forms/ProfExp'
import Skills from '../components/Forms/skills'
import Contact from '../components/Forms/Contact'
import Additional from '../components/Forms/Additional'
import { useContext } from 'react'
import { PageContext } from '../context/pageContext'

const MainPage = () => {

  const { page } = useContext(PageContext)
  const c =page;

  return (
    <div>
      <TopBar />
      <div className='d-flex' style={{ margin: 0, padding: 0 }}>
        <SideBar />
        <div>
          <FormNav/>
          {(() => {
        switch (page) {
          case 1:
            return <GeneralDetails />
          case 2:
            return <EdDetails />
          case 3:
            return <ProfExp/>
          case 4:
            return <Skills />
          case 5:
            return <Additional />
          case 6:
            return <Contact />
          default:
            return null
        }
      })()}
        </div>
      </div>
    </div>
  )
}

export default MainPage