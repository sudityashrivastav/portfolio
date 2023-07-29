import Link from "next/link";
import {BsGithub,BsTwitter,BsInstagram, BsLinkedin} from "react-icons/bs";

const Socials = () => {
  return (
    <div className="fixed left-0 top-[30vh] w-9 py-5 text-xl rounded-tr-xl gap-1 hidden md:block">
      <Link href={"https://github.com/sudityashrivastav"} target={"_blank"}  className="hover:bg-green-400 text-blue-950 grid place-items-center rounded-tr-full rounded-br-full py-1 hover:text-white">
        <BsGithub/>
      </Link>
      <Link href={"https://www.linkedin.com/in/suditya-kumar-b15163245/"} target="_blank" className="hover:bg-green-400 text-blue-950 grid place-items-center rounded-tr-full rounded-br-full py-1 hover:text-white">
        <BsLinkedin />
      </Link>
      <Link href={"https://"} target="_blank" className="hover:bg-green-400 text-blue-950 grid place-items-center rounded-tr-full rounded-br-full py-1 hover:text-white">
        <BsTwitter/>
      </Link>
      <Link href={"https://instagram.com/sudityashrivastav"} target="_blank" className="hover:bg-green-400 text-blue-950 grid place-items-center rounded-tr-full rounded-br-full py-1 hover:text-white">
        <BsInstagram/>
      </Link>
    </div>
  );
};

export default Socials;
