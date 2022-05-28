import React from 'react';
import { useState, useEffect, useRef } from 'react';
import MusicModal from '../Components/MusicModal';
import SingleCover from '../Components/SingleCover';
import './Music.css'
import { motion } from 'framer-motion';
  
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

  const [openModal, setOpenModal] = useState(false);
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
            updateModalProps('2020', '2020', '11/11/11')
          }}>
              <SingleCover cname='grid-item' cover='2020'/></a>
          
          <a onClick={() => { 
            setOpenModal(true); setOpenModal(true); 
            updateModalProps('Heatstroke', 'Heatstroke', '11/11/11')
          }}>
              <SingleCover cname='grid-item' cover='Heatstroke'/></a>
          
          <a onClick={() => { 
            setOpenModal(true); setOpenModal(true); 
            updateModalProps('Closer', 'Closer', '11/11/11')
          }}>
              <SingleCover cname='grid-item' cover='Closer'/></a>
          
          <a onClick={() => { 
            setOpenModal(true); setOpenModal(true); 
            updateModalProps('Water is Wet', 'WaterisWet', '11/11/11')
          }}>
              <SingleCover cname='grid-item' cover='WaterisWet'/></a>
          
          <a onClick={() => { 
            setOpenModal(true); setOpenModal(true); 
            updateModalProps('2 Basic', '2Basic', '11/11/11')
          }}>
              <SingleCover cname='grid-item' cover='2Basic'/></a>
          
          <a onClick={() => { 
            setOpenModal(true); setOpenModal(true); 
            updateModalProps('Fly', 'Fly', '11/11/11')
          }}>
              <SingleCover cname='grid-item' cover='Fly'/></a>
        </div>
        
        {/* Opens modal whenever art is clicked */}
        {openModal && 
          <div className='modal-container'>
            <div ref={domNode}>
              <MusicModal clickedCover={modalCover} title={modalTitle} released={modalReleased}/>
            </div>
          </div>
        }
      </motion.div>
    </>
  );
};
  
export default Music;