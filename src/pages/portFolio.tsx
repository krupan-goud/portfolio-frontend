import React from 'react'
import Header from './header'
import OverView from './overView'
import Education from './work'
import Skills from './skills'
import Contact from './contact'
import Experience from './experience'

const Main = () => {
    return (
        <div>
            <Header />
            <OverView />
            <Education />
            <Experience />
            <Skills />
            <Contact />
        </div>
    )
}

export default Main