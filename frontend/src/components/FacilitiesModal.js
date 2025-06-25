// import React, { useState, useEffect } from "react";
// import { createPortal } from "react-dom";

// const FacilitiesModal = ({
//   isModalOpen,
//   closeModal,
//   currentMedia,
//   items,
//   handleTabClick,
// }) => {
//   // Store the scroll position in a ref to preserve it when modal is closed
//   const scrollYRef = React.useRef(0);

//   useEffect(() => {
//     if (isModalOpen) {
//       // Store the scroll position when the modal is opened
//       scrollYRef.current = window.scrollY;
//       document.body.style.position = "fixed";
//       document.body.style.top = `-${scrollYRef.current}px`;
//       document.body.style.width = "100%";
//     } else {
//       // Restore the scroll position when the modal is closed
//       document.body.style.position = "";
//       document.body.style.top = "";
//       document.body.style.width = "";
//       window.scrollTo(0, scrollYRef.current); // Scroll back to the saved position
//     }
//   }, [isModalOpen]); // Runs whenever `isModalOpen` changes

//   return (
//     isModalOpen &&
//     createPortal(
//       <div
//         className="modal fade show overflow-hidden facilities-modal"
//         tabIndex="-1"
//         aria-hidden="true"
//         data-bs-keyboard="false"
//         role="dialog"
//         style={{
//           display: "block",
//           backgroundColor: "rgba(0, 0, 0, 0.8)",
//           zIndex: 1050,
//         }}
//         onClick={closeModal}
//       >
//         <div
//           className="modal-dialog modal-xl modal-dialog-centered"
//           role="document"
//           onClick={(e) => e.stopPropagation()}
//         >
//           <div className="modal-content">
//             <div className="modal-header p-0">
//               <button
//                 type="button"
//                 onClick={(e) => {
//                   e.stopPropagation();
//                   closeModal();
//                 }}
//                 className="close-button"
//               >
//                 <i className="fa-solid fa-circle-xmark"></i>
//               </button>
//             </div>
//             <div className="modal-body text-center">
//               <div className="container">
//                 <div className="row facilities-row">
//                   <div className="col-lg-2 col-12">
//                     <ul className="nav nav-tabs">
//                       {items.map((item, index) => (
//                         <li className="nav-item" key={index}>
//                           <a
//                             className={`nav-link ${
//                               currentMedia === item ? "active" : ""
//                             }`}
//                             onClick={() => handleTabClick(item)}
//                           >
//                             {item.video ? (
//                               <img
//                                 src={item.modal_data.image}
//                                 alt={`Video Poster ${index}`}
//                                 className="w-100"
//                               />
//                             ) : (
//                               <img
//                                 src={item.modal_data.image}
//                                 alt={`Image ${index}`}
//                                 className="w-100"
//                               />
//                             )}
//                           </a>
//                         </li>
//                       ))}
//                     </ul>
//                   </div>
//                   <div className="col-lg-10 col-12">
//                     <div className="tab-content">
//                       <div className="tab-pane fade active show">
//                         <div className="col-lg-12">
//                           <div className="row align-items-center justify-content-center">
//                             <div className="facilities-slider">
//                               {currentMedia.video ? (
//                                 <video
//                                   src={currentMedia.modal_data.video}
//                                   controls
//                                   autoPlay
//                                   style={{ width: "100%", maxHeight: "80vh" }}
//                                 />
//                               ) : (
//                                 <img
//                                   src={currentMedia.modal_data.image}
//                                   alt="Selected Content"
//                                   style={{ width: "100%", maxHeight: "80vh" }}
//                                 />
//                               )}
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>,
//       document.body
//     )
//   );
// };

// export default FacilitiesModal;
