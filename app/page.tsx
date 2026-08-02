import { metaData } from "./config";

export default function Page() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url(/images/sunset.jpeg)" }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/10 to-black/40" />
      </div>
      <div className="relative z-10 px-4 text-center">
        <h1 className="text-5xl md:text-7xl text-white mb-4 drop-shadow-lg">
          {metaData.title}
        </h1>
        <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto drop-shadow">
          Ingénieur, rêveur.
        </p>
      </div>
    </section>
  );
}


