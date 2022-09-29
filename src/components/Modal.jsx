import CloseModal from "../img/close1.svg";
import CloseModal2 from "../img/close2.svg";

const Modal = ({ setModal }) => {
  const closeModal = () => {
    setModal(false);
  };

  return (
    <div className="absolute bg-black bg-opacity-90 top-0 left-0 right-0 bottom-0 z-10">
      <div className="w-40  cursor-pointer top-8 absolute z-[50]">
        <img src={CloseModal} alt="Close Modal" onClick={closeModal} />
      </div>
    </div>
  );
};

export default Modal;
