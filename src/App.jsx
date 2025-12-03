import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './Component/Nav/Nav'
import Header from './Component/Header/Header'
import Main from './Component/Main/Main'
import Section from './Component/Section/Section'
import Display from './Component/Display/Display'
import About from './Component/About/About'
import Testimonial from './Component/Testimonial/Testimonial'
import Footer from './Component/Footer/Footer'
import Contactpage from './Component/Contactpage/Contactpage'

function App() {

  return (
    <>
      <Router>
        

        <Routes>
          <Route path='/' element={
            <>
            <Nav />
              <Header />
              <Main />
              <Section />
              <Display />
              <About />
              <Testimonial />
              <Footer />
            </>
          } />

          <Route path='/contact' element={
            <>
            <Nav />
            <Contactpage />
            </>
          } />
        </Routes> 
      </Router>
    </>
  )
}

export default App