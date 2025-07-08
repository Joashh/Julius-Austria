import { motion } from "framer-motion";

export default function Modal({ showModal, setShowModal, imgsrc }) {
  if (!showModal) return null;

  return (
    <>

      {showModal && (
        <div
          className="fixed inset-0 bg-black/60 flex justify-center items-center z-50 h-screen p-5 "
          onClick={() => setShowModal(false)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3 }}
          >
          <div
            className="dark:bg-gray-800 bg-white p-3 rounded shadow-lg max-w-3xl  h-auto w-auto"
            onClick={(e) => e.stopPropagation()} // prevents closing when clicking inside
          >

            <img className="rounded-md  w-auto h-auto md:max-w-150" src={imgsrc} alt="" onClick={() => setShowModal(false)}/>
            
          
        </div>
          </motion.div>
        </div >
        
      )
}
      
    </>
  );
}
