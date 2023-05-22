import Image from "next/image";
import tcglogo from "../../app/images/tcglogo.png";
import Link from "next/link";

const style = {
  wrapper: "flex justify-center gap-10 p-5 bg-[#FCC017]",
  container: "max-w-7xl flex-1 flex justify-between gap-10",
  logoContainer: "flex item-center flex-start",
  logo: "cursor-pointer object-contain",
  bannerNav: "flex cursor-pointer items-center space-x-5",
};

const Header = () => {
  return (
    <div>
      <div className={style.wrapper}>
        <div className={style.container}>
          <div className={style.logoContainer}>
            <Image
              className={style.logo}
              alt=" "
              src={tcglogo}
              height={40}
              width={200}
            />
          </div>
          <div className={style.bannerNav}>
            <div>Home</div>
            <div>
              <Link href="/dashboard">Tcg Mcube</Link>
            </div>
            <div>Offerings</div>
            <div>Industries</div>
            <div>Contact..</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
