"use server";

import AnimeCard from "@/components/AnimeCard";

export const fetchAnime = async (page) => {
  const res = await fetch(
    `https://api.themoviedb.org/3/trending/all/day?api_key=223667d1239871fc4b6eeef8d0d6def8&page=${page}`,
    
  );

  const results = await res.json();
  const data = results.results

  return data.map((item, index) => (
    <AnimeCard key={item.id} anime={item} index={index} />
  ));
};
