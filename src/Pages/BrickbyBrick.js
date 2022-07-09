import React from 'react';
import './BrickbyBrick.css';
import SingleCover from '../Components/SingleCover';
import MusicModal from '../Components/MusicModal';
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

const BrickbyBrick = () => {

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
    <motion.div
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      exit={{opacity: 0}}
    >

      <div className='video-wrapper-mv'>
        <div className='video-container-mv'>
          <iframe src="https://www.youtube.com/embed/xF6HeArOrjA?rel=0" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
      </div>
      <div className='video-wrapper'>
        <div className='video-container'>
          <iframe src="https://www.youtube.com/embed/2NK76pAxopc?rel=0" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
      </div>
      
      <div className='gridBBB'>
        <a onClick={() => { 
          setOpenModal(true); 
          updateModalProps('Brick By Brick', 'BBB', '06/03/22')
        }}>
            <SingleCover cname='grid-itemBBB' cover='BBB'/></a>
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
  
export default BrickbyBrick;