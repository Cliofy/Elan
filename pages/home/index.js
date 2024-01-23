import Header from "@/components/header";
import Layout from "../layout";
import Hero from "./hero";
export default function Index() {

  const options = [
    "Adverts",
    "Product designs",
    "Photoshoots",
    "Branding",
    "Album covers",
    "Many more"
  ]
  const cards = [
    "girl-1",
    "girl-2",
    "girl-3",
    "girl-2",
    "girl-3",
    "girl-2",
    "girl-3",
    "girl-2",
    "girl-3",
    "girl-2",
    "girl-3",
    "girl-2",
    "girl-3",
    "girl-2",
    "girl-3",
  ]
  return (
    <Layout>
      <Header />
      <Hero />
      <div className="h-screen w-full bg-zinc-950 py-8">
        <div className="flex flex-col items-center justify-center gap-y-2 sm:gap-y-4">
          <div className="text-center">
            <h1 className="text-white text-3xl sm:text-4xl font-bold font-sans tracking-tighter">
              Revolutionizing Creativity: Unveiling the Best Ever Gen AI-Powered Studio!
            </h1>
          </div>
          <div className="flex flex-col text-center">
            <h1 className="text-white text-xl sm:text-lg font-bold font-sans tracking-tighter">
              Any Industry. Unlimited Designs.
            </h1>
            <div className="flex flex-row space-x-4 mt-2">
              {options.map((option, index) => {
                return (
                  <p key={index} className="text-white/75 text-sm font-semibold tracking-tighter">{option}</p>
                )
              })}
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full max-w-screen-md  gap-6">
              {cards.map((card, index) => {
                return (
                  <div className="w-full h-40 bg-zinc-900 ring-2 ring-zinc-600 rounded-lg shadow-md">
                  </div>
                )
              })}
            </div>
        </div>

      </div>
    </Layout>
  );
}
