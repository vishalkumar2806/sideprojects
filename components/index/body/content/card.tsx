'use client';
import React from "react";
import clsx from "clsx";
import Link from "next/link";

const Card = (props: any) => {
  const { title, link } = props;
  return (
    <div>
      <div className={clsx("choose-gift-card", title)}>
          <div className="value">
            <button
              className="bg-sky-500 hover:bg-sky-700 rounded-full font-bold text-center px-7 py-1 hover:ring-2 ring-blue-300"
              onClick={(e) => e.preventDefault()}
            >
              <Link className="cursor-pointer" href="/generate">Generate</Link>
            </button>
          </div>
      </div>
    </div>
  );
};

export default Card;
