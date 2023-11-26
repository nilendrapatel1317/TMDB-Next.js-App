import Image from "next/image";
import React from "react";
import { MotionDiv } from "./MotionDiv";

const AnimeCard = ({ anime , index }) => {
  console.log(anime);

  const variants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
    },
  };

  return (
    <MotionDiv
      variants={variants}
      initial="hidden"
      animate="visible"
      transition={{ delay: index * 0.25, ease: "easeInOut", duration: 0.5 }}
      viewport={{ amount: 0 }}
      className="max-w-sm rounded relative w-full"
    >
      <div className="relative w-full h-[55vh]">
        <Image
          src={`https://image.tmdb.org/t/p/w500${anime.poster_path || anime.profile_path}`}
          alt={anime.title}
          fill
          className="rounded-xl w-full object-fill"
        />
      </div>
      <div className="py-4 flex flex-col gap-3">
        <div className="flex justify-between items-center gap-1">
          <h2 className="font-bold text-white text-xl line-clamp-1 w-full">
            {anime.title || anime.original_title || anime.name}
          </h2>
          <div className="py-1 px-2 bg-[#161921] rounded-sm">
            <p className="text-white text-sm font-bold capitalize">
              {anime.media_type}
            </p>
          </div>
        </div>
        <div className="flex gap-4 items-center justify-between">
          <div className="flex flex-row gap-2 items-center">
            <Image
              src="./episodes.svg"
              alt="episodes"
              width={20}
              height={20}
              className="object-contain"
            />
            <p className="text-base text-white font-bold">
              {anime.release_date || anime.first_air_date || 'Not Mentioned'}
            </p>
          </div>
          <div className="flex flex-row gap-2 items-center">
            <Image
              src="./star.svg"
              alt="star"
              width={18}
              height={18}
              className="object-contain"
            />
            <p className="text-base font-bold text-[#ff4949]">{anime.vote_count}</p>
          </div>
        </div>
      </div>
    </MotionDiv>
  );
};

export default AnimeCard;
