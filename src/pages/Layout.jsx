import { Outlet } from "react-router-dom";
import WeddingHeader from "../components/WeddingHeader";
import MayaFooter from "../components/MayaFooter";

const Layout = () => {
  return (
    <div className="relative min-h-screen flex flex-col ">
      <div className="absolute inset-0 z-0 h-[250px] md:h-[350px]">
        <img
          src="/hero-bg.png"
          alt="background"
          className="w-full h-[249px] md:h-[349px] object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/1 via-black/70 to-black"></div>
      </div>

      <div className="relative z-10 flex flex-col h-screen justify-between items-center pt-3">
        <div className="flex flex-col justify-center items-center gap-7">
          <img src="/logo.svg" alt="maya" className="w-28" />

          <div className="mt-5">
            <WeddingHeader />
          </div>
        </div>

        <main className="flex-1 flex flex-col items-center mt-2 mb-5 md:w-2/3 md:mt-12">
          <Outlet />
        </main>

        <MayaFooter />
      </div>
    </div>
  );
};

export default Layout;
