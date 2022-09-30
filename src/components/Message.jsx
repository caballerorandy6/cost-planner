const ModalMessage = ({ children }) => {
  return (
    <div className="bg-red-700 p-1 mt-4 text-white text-center w-full ">
      {children}
    </div>
  );
};

export default ModalMessage;
