
import AlertBanner from "../components/AlertBanner";
import CategoryBadge from "../components/CategoryBadge";
import DogPrevList from "../components/DogPrevList";
import MixedBreedPrev from "../components/MixedBreedPrev";
import Footer from "../components/Footer";


function Home() {
  return (
  <>
  <AlertBanner />
  <CategoryBadge />
  <DogPrevList />
  <MixedBreedPrev />
  <Footer />
</>
  );
}

export default Home;