import Link from "next/link";

const Menu = ({ activePages, open, setOpen }) => {
  return (
    <div
      className={`text-black flex flex-col absolute p-16 h-screen justify-evenly text-xl ease-in duration-300 font-semibold bg-white ${
        open ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      {activePages.map((page) => (
        <div className="hover:text-2xl duration-100 ease-in-out py-2">
          <Link href={page.link} onClick={() => setOpen(false)} key={page.id}>
            {page.name}
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Menu;
