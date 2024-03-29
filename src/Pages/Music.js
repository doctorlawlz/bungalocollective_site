import React from 'react';
import { useState, useEffect, useRef } from 'react';
import MusicModal from '../Components/MusicModal';
import SingleCover from '../Components/SingleCover';
import './Music.css'
import { motion, AnimatePresence } from 'framer-motion';
import { useMediaQuery } from 'react-responsive'
  
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

const Music = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

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
    <>
      <motion.div
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      exit={{opacity: 0}}
      >
        
        <div className='grid'>
        <a onClick={() => { 
            setOpenModal(true); 
            updateModalProps('Plazma', 'Plazma', '05/05/23')
          }}>
              <SingleCover cname='grid-item' cover='Plazma'/></a>
        <a onClick={() => { 
            setOpenModal(true); 
            updateModalProps('Greener', 'Greener', '03/03/23')
          }}>
              <SingleCover cname='grid-item' cover='Greener'/></a>
        <a onClick={() => { 
            setOpenModal(true); 
            updateModalProps('SPICE', 'SPICE', '08/12/22')
          }}>
              <SingleCover cname='grid-item' cover='SPICE'/></a>
          <a onClick={() => { 
            setOpenModal(true); 
            updateModalProps('Brick By Brick', 'BBB', '06/03/22')
          }}>
              <SingleCover cname='grid-item' cover='BBB'/></a>
          <a onClick={() => { 
            setOpenModal(true);
            updateModalProps('Fly', 'Fly', '02/14/21')
          }}>
              <SingleCover cname='grid-item' cover='Fly'/></a>
          <a onClick={() => { 
            setOpenModal(true);
            updateModalProps('2 Basic', '2Basic', '01/31/21')
          }}>
              <SingleCover cname='grid-item' cover='2Basic'/></a>
          <a onClick={() => { 
            setOpenModal(true);
            updateModalProps('Water is Wet', 'WaterisWet', '12/21/20')
          }}>
              <SingleCover cname='grid-item' cover='WaterisWet'/></a>
          <a onClick={() => { 
            setOpenModal(true);
            updateModalProps('Heatstroke', 'Heatstroke', '12/21/20')
          }}>
              <SingleCover cname='grid-item' cover='Heatstroke'/></a>
          <a onClick={() => { 
            setOpenModal(true);
            updateModalProps('Closer', 'Closer', '09/18/20')
          }}>
              <SingleCover cname='grid-item' cover='Closer'/></a>
          <a onClick={() => { 
            setOpenModal(true); 
            updateModalProps('2020', '2020', '05/01/20')
          }}>
              <SingleCover cname='grid-item' cover='2020'/></a>
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
    </>
  );
};
  
export default Music;