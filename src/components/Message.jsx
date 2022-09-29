const Message = ({ children }) => {
  return (
    <div className=" text-red-700 font-bold mt-2 text-center ">
      <p>{children}</p>
    </div>
  );
};

export default Message;
