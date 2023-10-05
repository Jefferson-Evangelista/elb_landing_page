import React from 'react'
import { Navbar, Hero, About, Services, Contacts, Footer } from './components'
import styles from './style.js'

const App = () => (
    <div className={` w-full overflow-hidden`}>
      <div className= {`bg-white ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      <div className= {`${styles.flexCenter} `}>
        <div className={`${styles.paddingX} ${styles.boxWidth} bg-darkBlue2 `}>
          <Hero />
        </div>
      </div>
      
      <div className= {`${styles.paddingX} ${styles.flexCenter} `}>
        <div className={`${styles.boxWidth} `}>
          <About />
        </div>
      </div>

      <div className= {`${styles.paddingX} ${styles.flexCenter} bg-darkBlue2`}>
        <div className={`${styles.boxWidth}`}>
          <Services />
        </div>
      </div>

      <div className= {`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Contacts />
        </div>
      </div>

      <div className= {`${styles.flexCenter} `}>
        <div className={`${styles.boxWidth} `}>
          <Footer />
        </div>
      </div>

    </div>
)


export default App