import React from 'react';
import './Plazma.css';
import '../BrickbyBrick/BrickbyBrick.css';
import plazma from '../../Site_Assets/Spinning_Brick.webm';
import plazmaFisheye from '../../Site_Assets/PNGS/plazma-fisheye.png';
import SingleCover from '../../Components/SingleCover/SingleCover';
import MusicModal from '../../Components/MusicModal/MusicModal';
import { motion, AnimatePresence } from 'framer-motion';
import { useMediaQuery } from 'react-responsive'
import { useState, useEffect, useRef } from 'react';

// Handler that detects when mouse clicks outside a target
let useClickOutside = (handler) => {
  let domNode = useRef();

  useEffect(() => {
    let maybeHandler = (event) => {
      if (!domNode.current.contains(event.target)) {
        handler();
      }
    };

    document.addEventListener("mousedown", maybeHandler);

    return () => {
      document.removeEventListener("mousedown", maybeHandler);
    };
  });

  return domNode;
};


const Plazma = () => {

  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

  const videoRef = useRef(null);
  const [openModal, setOpenModal] = useState(false);
  const [blackBackdrop, showBlackBackdrop] = useState(false);
  const [modalTitle, setTitle] = useState('');
  const [modalCover, setCover] = useState('');
  const [modalReleased, setReleased] = useState('');

  const updateModalProps = (title, cover, released) => {
    setTitle(title);
    setCover(cover);
    setReleased(released);
  }

  let domNode = useClickOutside(() => {
    setOpenModal(false);
  });



  return (
    <motion.div
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      exit={{opacity: 0}}
    >
      <div className='video-wrapper-mv'>
        <div className='plazma-fisheye'>
          <img src={plazmaFisheye} />
        </div> 
      </div>
      <div className='video-wrapper'>
        <div className='plazma-ep-video-contianer video-container'>
          <iframe src="https://www.youtube.com/embed/YKxEl6Dfqvg?rel=0" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
      </div>
      
      <div className='grid-bbb'>
        <a onClick={() => { 
          setOpenModal(true); 
          updateModalProps('Plazma', 'Plazma', '05/05/23')
        }}>
            <SingleCover cname='grid-item-bbb' cover='Plazma'/></a>
      </div>

      {/* Opens modal whenever art is clicked on desktop*/}
      {(openModal && !isMobile) && 
        <AnimatePresence exitBeforeEnter>
        <motion.div 
          animate={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 20 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.2 }}
          className='modal-container'>
            <div ref={domNode}>
              <MusicModal clickedCover={modalCover} title={modalTitle} released={modalReleased}/>
            </div>
        </motion.div>
        </AnimatePresence>
      }
    </motion.div>
  );
};
  
export default Plazma;