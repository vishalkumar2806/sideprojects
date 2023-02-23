import React from "react";
import clsx from "clsx";
import Link from "next/link";


const Card = (props: any) => {
  const { title, link , text } = props;
  return (
    <div>
      <div className={clsx("choose-gift-card", title )}>
          <div className="value position">
            <button
              className={`generate bck-${link}`}
            >
            <Link className="cursor-pointer" href={link} >{text}</Link>
            </button>
          </div>
      </div>
    </div>
  );
};

export default Card;
