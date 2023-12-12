import Link from "next/link";

const Menu = ({ activePages, open, setOpen }) => {
  return (
    <div
      className={`text-black flex flex-col absolute w-64 p-16 h-screen justify-evenly text-xl ease-in duration-300 font-semibold bg-white ${
        open ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      {activePages.map((page) => (
        <Link href={page.link} onClick={() => setOpen(!open)} key={page.id}>
          <div className="hover:text-2xl duration-100 ease-in-out py-2">
            {page.name}
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Menu;
