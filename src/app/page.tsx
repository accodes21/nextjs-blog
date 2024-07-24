import TransitionLink from "@/components/TransitionLink";

export default function Home() {
  return (
    <main className="text-center pt-32 px-5">
      <h1 className="text-5xl md:text-6xl font-bold mb-5 title">
        Welcome to Blogger&apos;s Hub!
      </h1>
      <p className="max-w-[750px] mx-auto leading-8">
        Browse, create and read blog posts for free!
        <br />
        Pour your thoughts into words for all to read, enjoy the writings of
        others to refresh your thoughts.
      </p>
      <TransitionLink href={"/create-post"} className="">
        <button className="bg-white text-black border border-black p-3 rounded-full title text-xl mt-4 hover:scale-95 hover:bg-black hover:text-white transition-all">
          Start Writing
        </button>
      </TransitionLink>
    </main>
  );
}
