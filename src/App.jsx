import Banner from "./components/banner/banner";
import Featuredsection from "./components/featured/featuredsection";
import Footer from "./components/layout/footer";
import Wrapper from "./components/wrapper";

function App() {
  return (
    <>
      <Wrapper className="flex flex-col gap-y-8 lg:gap-y-[70px]">
        <Banner />
        <Featuredsection />
        <Footer />
      </Wrapper>
    </>
  );
}

export default App;
