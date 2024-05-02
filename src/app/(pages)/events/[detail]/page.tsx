import React from "react";
import events from "@/app/data/Events";

export interface detailType {
  detail: number;
}

const page = ({ params }: { params: detailType }) => {
  const eventDetail = events.find((i) => i.id == params.detail);

  return (
    <div>
      <h1>hai ini halaman dinamis event: {eventDetail?.title}</h1>
      {eventDetail?.description}
    </div>
  );
};

export default page;
