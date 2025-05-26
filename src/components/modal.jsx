import { motion } from "framer-motion";

export default function Modal({ showModal, setShowModal, imgsrc }) {
  if (!showModal) return null;

  return (
    <>

      {showModal && (
        <div
          className="fixed inset-0 bg-black/60 flex justify-center items-center z-50"
          onClick={() => setShowModal(false)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3 }}
          >
          <div
            className="bg-gray-800  p-3  rounded shadow-lg max-w-3xl w-full"
            onClick={(e) => e.stopPropagation()} // prevents closing when clicking inside
          >

            <img className="rounded-md h-full w-full" src={imgsrc} alt="" />
            
          
        </div>
          </motion.div>
        </div >
        
      )
}
      
    </>
  );
}
