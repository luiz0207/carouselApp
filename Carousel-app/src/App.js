import { useState, useEffect, useRef } from 'react'
import './App.css';
import {motion} from 'framer-motion'

import image1 from '../src/images/1.png'
import image2 from '../src/images/1.png'
import image3 from '../src/images/1.png'
import image4 from '../src/images/1.png'

const images = [image1, image2, image3, image4]

function App() {
  const carousel = useRef();
  const [width, setWidth] = useState(0)

  useEffect(() => {
    console.log(carousel.current?.scrollWidth, carousel?.offsetWidth)
    setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth)
  }, []) // cada interrogação tem sua quantidade de largura e subtraindo tiro a largura ultrapassada
         // pega cada largura e subtrai que daram


  return (
    <div className="App">
      <motion.div ref={carousel} className="carousel" whileTap={{ cursor: "grabbing"}}>
        <motion.div
         className="getImage"
         drag="x"
         dragConstraints={{ right: 0, left: -width}} // da direita pra esquerda nao ultrapassar a largura quando deslizar o slide
         >

        {images.map(image =>(
          <motion.div className="item" key={image}>
            <img src={image} alt="Texto alt"/>
            </motion.div>
          ))}

        </motion.div>
      </motion.div>
    </div>
  );
}

export default App;