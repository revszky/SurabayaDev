import React from "react";

const Partner = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="flex flex-col items-center justify-center">
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
              <img src="/partner/jagoan.png" alt="jagoan hosting" />
              <img src="/partner/microsoft.png" alt="microsoft" />
            </div>
          </div>

          <div className="p-4 mt-4">
            <p className="text-center">Media Partner</p>
            <div className="flex items-center justify-center gap-10 p-2">
              <img src="/partner/cakap.png" alt="cakap" />
              <img src="/partner/daily.png" alt="daily social" />
            </div>
          </div>

          <div className="p-4 mt-4">
            <p className="text-center p-6">Community Partner</p>
            <div className="grid grid-cols-2 md:grid-cols-5 items-center justify-center gap-10 p-4">
              <img src="/partner/alibaba.png" alt="alibaba" />
              <img src="/partner/aws.png" alt="aws" />
              <img src="/partner/mozila.png" alt="mozila" />
              <img src="/partner/devcamp.png" alt="devcamp" />
              <img src="/partner/backend.png" alt="backend" />
              <img src="/partner/sbyjs.png" alt="surabaya js" />
              <img src="/partner/pasuruan.png" alt="pasuruan" />
              <img src="/partner/klas.png" alt="klas" />
              <img src="/partner/patria.png" alt="patria" />
              <img src="/partner/tulungagung.png" alt="tulungagung" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partner;
