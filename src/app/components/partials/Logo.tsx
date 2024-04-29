import React from "react";
import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/">
      <Image src="/sbydev/sbydev.png" width={256} height={45} alt="Surabaya" />
    </Link>
  );
};

export default Logo;
