import Modal from "react-modal";

Modal.setAppElement("#root"); 

const ImageModal = ({ image, isOpen, onRequestClose }) => {
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      maxHeight: "90vh",
    },
    overlay: {
      backgroundColor: "rgba(0, 0, 0, 0.75)",
    },
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      style={customStyles}
      contentLabel="Image Modal"
      shouldCloseOnOverlayClick={true}
      shouldCloseOnEsc={true}
    >
      <img
        src={image.urls.full}
        alt={image.alt_description || ""}
        style={{ maxWidth: "100%", maxHeight: "80vh" }}
      />
    </Modal>
  );
};

export default ImageModal;
