const Message = ({ children }) => {
  return (
    <p className=" text-red-700 font-bold mt-2 text-center ">
      <p>{children}</p>
    </p>
  );
};

export default Message;
