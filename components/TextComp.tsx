import React from "react";
import Image from "next/image";

const TextComp = ({ topHeading, heading, description, image }: any) => {
  return (
    <div className="grid grid-cols-2">
      <div className="step-text-box col-span-1">
        <p className="step-number">{topHeading}</p>
        <h3 className="heading-tertiary">{heading}</h3>
        <p className="step-description">{description}</p>
      </div>
      <div className="step-img-box col-span-1">
        <Image
          src={image || "./img/app/app-screen-1.png"}
          alt="iPhone app preferences selection screen"
          className="step-img"
          width={50}
          height={50}
        />
      </div>
    </div>
  );
};

export default TextComp;
