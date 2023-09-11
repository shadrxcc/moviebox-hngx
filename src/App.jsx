import Banner from "./components/banner/banner";
import Featuredsection from "./components/featured/featuredsection";
import Wrapper from "./components/wrapper";

function App() {
  return (
    <>
      <Wrapper className='flex flex-col gap-y-8 lg:gap-y-[70px]'>
        <Banner />
        <Featuredsection />
      </Wrapper>
    </>
  );
}

export default App;
