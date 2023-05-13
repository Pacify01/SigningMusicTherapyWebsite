import React from "react";
import { HiArrowLongLeft } from "react-icons/Hi2";

type Props = {};

function ServiceCard3({}: Props) {
  return (
    <article
      className="flex w-fit flex-shrink-0 cursor-pointer snap-center flex-col items-center space-y-7 overflow-hidden rounded-lg 
      bg-[rgb(248,248,223)] p-10 opacity-80 transition-opacity 
     duration-200 hover:opacity-100 md:w-[600px] xl:w-[900px]"
    >
      <div className="px-20 md:px-28 md:space-y-12">
        <br />
        <br />
        <h4 className="text-4xl font-light">
          There are openings on all available services.
        </h4>
        <br />
        <br />
        <br />
        <p className="mt-1 text-2xl font-bold">
          If you have any queries, please do not hesitate to contact us. We
          would be happy to help you choose the service that suits your needs.
        </p>
        <br></br>
        <div className="md:opacity-0 ml-24 text-lg"><HiArrowLongLeft size={100}/></div>
      </div>
    </article>
  );
}

export default ServiceCard3;
