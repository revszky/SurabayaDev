import React from "react";
import Image from "next/image";
import Link from "next/link";

interface CloseLogoProps {
  closeDrawer: () => void;
}

const Logo = ({ closeDrawer }: CloseLogoProps) => {
  const closeSlidebar = () => {
    closeDrawer();
  };
  return (
    <Link href="/" onClick={closeSlidebar}>
      <Image src="/sbydev/sbydev.png" width={256} height={45} alt="Surabaya" />
    </Link>
  );
};

export default Logo;
