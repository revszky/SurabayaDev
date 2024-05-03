import { IconArrowsUpDown } from "@tabler/icons-react";
import BgLeft from "../background/BgLeft";
import BgRight from "../background/BgRight";

const Partner = () => {
  const communityPartners = [
    "alibaba.png",
    "aws.png",
    "mozila.png",
    "devcamp.png",
    "backend.png",
    "sbyjs.png",
    "pasuruan.png",
    "klas.png",
    "patria.png",
    "tulungagung.png",
  ];

  const sponsor = ["jagoan.png", "microsoft.png"];

  const mediaPartner = ["cakap.png", "daily.png"];

  return (
    <div className="flex items-center justify-center">
      <div className="flex flex-col items-center justify-center relative">
        <div className="absolute -top-[90px]">
          <IconArrowsUpDown className="w-12 h-12 stroke-1 text-green-500" />
        </div>

        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl font-semibold">
            Terima kasih telah bekerja sama dengan SurabayaDev
          </h1>
          <p className="p-2 md:p-4">
            Kami sangat terbuka apabila kamu ingin berkolaborasi baik itu berupa
            pemateri, audience, maupun media partner
          </p>
        </div>

        <div className="flex flex-col items-center justify-center">
          <div className="p-4 my-4">
            <p className="text-center">Sponsor</p>
            <div className="flex items-center justify-center gap-10 p-2">
              {sponsor.map((sponsors, index) => (
                <img
                  key={index}
                  src={`/partner/${sponsors}`}
                  alt={sponsors.replace(".png", "")}
                />
              ))}
            </div>
          </div>

          <div className="p-4 mt-4">
            <p className="text-center">Media Partner</p>
            <div className="flex items-center justify-center gap-10 p-2">
              {mediaPartner.map((media, index) => (
                <img
                  key={index}
                  src={`/partner/${media}`}
                  alt={media.replace(".png", "")}
                />
              ))}
            </div>
          </div>

          <div className="p-4 mt-4">
            <p className="text-center p-6">Community Partner</p>
            <div className="grid grid-cols-2 md:grid-cols-5 items-center justify-center gap-10 p-4">
              {communityPartners.map((partner, index) => (
                <img
                  key={index}
                  src={`/partner/${partner}`}
                  alt={partner.replace(".png", "")}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="absolute bottom-[820px] right-10 md:bottom-[700px] md:right-28">
          <BgRight />
        </div>
      </div>
    </div>
  );
};

export default Partner;
