import { BsInstagram, BsLinkedin, BsFacebook, BsYoutube } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="text-white mt-10 md:flex flex-col justify-center items-center p-10 relative">
      <div className="flex text-2xl gap-5 justify-center m-3">
        <a
          href="https://www.instagram.com/insees_nits_/"
          className="cursor-pointer"
        >
          <BsInstagram />
        </a>
        <a
          href="https://in.linkedin.com/company/insees-nits"
          className="cursor-pointer"
        >
          <BsLinkedin />
        </a>
        <a
          href="https://www.facebook.com/inseessociety/"
          className="cursor-pointer"
        >
          <BsFacebook />
        </a>
        <a
          href="https://www.youtube.com/channel/UCb-v9qdHKmOLFYNT1RAvaxg"
          className="cursor-pointer"
        >
          <BsYoutube />
        </a>
      </div>
      <div className="md:absolute right-10 flex text-center">
        <h2>Copyright Protected @2024 INSEES | All Rights Reserved</h2>
      </div>
    </div>
  );
};

export default Footer;
