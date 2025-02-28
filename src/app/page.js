import Hero from "@/components/Hero";
import PopularMovie from "@/components/PopularMovie";

export default async function Home() {
  const server = "https://api.themoviedb.org/3/";
  const url = `${server}movie/popular?api_key=${process.env.API_KEY}&language=en-US&page=1`;

  const res = await fetch(url);

  const data = await res.json();
  console.log(data);

  return (
    <div className=" bg-slate-700">
      <Hero />
      <PopularMovie movies= {data.results} />
    </div>
  );
}
