import Header from "@/components/header";
import Layout from "../layout";
import { Button } from "../../components/button";
import Link from "next/link";

export default function Index() {
  return (
    <Layout>
      <section className="hero h-screen w-full bg-cover bg-[url('/banner.png')]">
        <Header />
        <div className="h-screen w-full #bg-slate-900/30 backdrop-brightness-50 absolute top-0 right-0 left-0" />
        <div className="h-screen w-full flex flex-1 items-center justify-center brightness-100">
          <div className="flex flex-col items-center justify-center gap-y-4">
            <h1 className="text-white text-4xl font-bold font-sans tracking-tighter">Your Online Photoshoot Studio.</h1>
            <p className="text-white/95 text-xl font-semibold tracking-tighter">Your ideas. Our Execution.</p>
            <p className="text-white/95 text-xl font-semibold tracking-tighter">Premiering as the world's best AI studio.</p>
            <div className="flex space-x-2">
              <Button size={"md"} variant={"secondary"}>
                <Link href="/">
                  Discover more
                </Link>
              </Button>
              <Button size={"md"}>
                <Link href="/">
                  Book a call
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
