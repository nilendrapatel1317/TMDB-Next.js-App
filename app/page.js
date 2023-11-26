import LoadMore from "../components/LoadMore";
import React from "react";
// import { data } from "../contents/data";
import AnimeCard from "../components/AnimeCard";
import { fetchAnime } from "./action";

const page = async () => {

  const data = await fetchAnime(1);

  return (
    <main className="sm:p-16 py-16 px-8 flex flex-col gap-10">
      <h2 className="text-3xl text-white font-bold">Trending</h2>

      <section className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10">
        {data}
      </section>
      <LoadMore />
    </main>
  );
};

export default page;
