const Navbutton = ({ open, setOpen }) => {
  return (
    <div
      className={`flex flex-col absolute gap-2 z-10 p-10 cursor-pointer`}
      onClick={() => setOpen(!open)}
    >
      <div
        className={`w-9 h-1 bg-gradient-to-r from-purple-500 to-pink-500 ${
          open ? "rotate-45 translate-y-3" : ""
        } ease-in duration-200`}
      ></div>
      <div
        className={`w-9 h-1 bg-gradient-to-r from-purple-500 to-pink-500 ${
          open ? "scale-0" : ""
        } ease-in duration-200`}
      ></div>
      <div
        className={`w-9 h-1 bg-gradient-to-r from-purple-500 to-pink-500 ${
          open ? "-rotate-45 -translate-y-3" : ""
        } ease-in duration-200`}
      ></div>
    </div>
  );
};

export default Navbutton;
