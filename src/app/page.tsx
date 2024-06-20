import { MainStyle } from "./style";
import SearchBox from "./components/common/searchBox";
import Image from "next/image";
import YETI from "../../public/yeti.png";

const Main = () => {
  return (
    <MainStyle>
      <h1>YETI.GG</h1>
      <Image src={YETI} alt="yeti" className="yeti" />
      <SearchBox />
    </MainStyle>
  );
};

export default Main;
