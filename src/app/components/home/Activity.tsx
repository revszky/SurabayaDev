import { IconChevronsRight } from "@tabler/icons-react";
import React from "react";

const Activity = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-2xl md:text-3xl font-semibold">
          Kegiatan di <span>SurabayaDev</span>
        </h1>

        <p className="p-2 md:p-4">
          Kami telah mengadakan lebih dari 50+ kegiatan di Kota Surabaya
        </p>
      </div>

      <div className="flex items-start justify-between py-6">
        <div className="max-w-xl">
          <div className="pr-16">
            <h1 className="text-2xl font-semibold">Kolaborasi</h1>

            <p className="py-2">
              adalah salah satu core values dari komunitas kami. Dimana setiap
              kegiatan kami selalu melibatkan berbagai pihak mulai dari
              komunitas lain, pemerintah Kota Surabaya, sponsor dan lainnya.
            </p>
          </div>

          <div className="py-8">
            <div className="space-y-4">
              <div className="max-w-lg border p-2">
                <div className="flex items-center">
                  <div className="p-2">
                    <h1 className="text-xl font-semibold">
                      Workshop & Pelatihan IT
                    </h1>

                    <p className="py-2 pr-2">
                      Belajar bersama dengan para programmer, designer, product
                      manager, maupun QA Engineer.
                    </p>
                  </div>

                  <div className="p-2">
                    <IconChevronsRight />
                  </div>
                </div>
              </div>

              <div className="max-w-lg border p-2">
                <div className="flex items-center">
                  <div className="p-2">
                    <h1 className="text-xl font-semibold">Gathering</h1>

                    <p className="py-2 pr-2">
                      Ngopi bareng dan WFC (Work From Cafe) bersama dengan
                      sesama anggota & pengurus Surabayadev.
                    </p>
                  </div>

                  <div className="p-2">
                    <IconChevronsRight />
                  </div>
                </div>
              </div>

              <div className="max-w-lg border p-2">
                <div className="flex items-center">
                  <div className="p-2">
                    <h1 className="text-xl font-semibold">Pengabdian Sosial</h1>

                    <p className="py-2 pr-2">
                      Berbagi bersama dengan yang lebih membutuhkan ketika di
                      momen bulan Ramadhan seperti berbagi takjil.
                    </p>
                  </div>

                  <div className="p-2">
                    <IconChevronsRight />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <img
            src="/community/pict2.jpeg"
            alt="community"
            className="rounded-2xl"
          />
        </div>
      </div>
    </div>
  );
};

export default Activity;
