import CarouselBanner from "@/app/components/CarouselBanner";
import CarouselBanner2 from "@/app/components/CarouselBanner2";
import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import Options from "@/app/components/Options";
import ReferComponent from "@/app/components/Sharerefferal";
import SocialMedia from "@/app/components/SocialMedia";
const Home = () => {
  return (
    <>
      <main className="relative flex justify-center w-full items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
        <div className="w-full">
          <Header />
          <Options />
          <CarouselBanner />
          <SocialMedia />
          <CarouselBanner2 />
          <ReferComponent />
        </div>
      </main>
      <div className="w-full">
        <Footer />
      </div>
    </>
  );
};

export default Home;
