import { useEffect } from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import FormInformation from "./FormInformation";
import "./styles.scss";
import { getDataUser } from "../../slices/homeSlice";
import { useAppDispatch } from "../../app/hooks";

const Home = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getDataUser());
  }, []);

  return (
    <>
      <Header transparent />
      <div className="container-home">
        <div className="container container-home__content">
          <picture>
            <img width="480px" height="560px" src="./images/family.webp" />
          </picture>
          <FormInformation />
        </div>
        <picture>
          <source
            media="(min-width: 950px)"
            srcSet="./images/blur-left.webp"
            type="image/webp"
          />
          <img
            className="blur-left"
            src="./images/blur-left-mobile.webp"
            alt=""
          />
        </picture>
        <picture>
          <source
            media="(min-width: 950px)"
            srcSet="./images/blur-right.webp"
            type="image/webp"
          />
          <img
            className="blur-right"
            src="./images/blur-right-mobile.webp"
            alt=""
          />
        </picture>
      </div>
      <Footer />
    </>
  );
};

export default Home;
