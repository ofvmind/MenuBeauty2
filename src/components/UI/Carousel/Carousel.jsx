import Flickity from "react-flickity-component";
import "./flickity.css";
import cl from "./Carousel.module.css";
import plate1 from "../../../assets/images/Carousel/1.webp";
import plate2 from "../../../assets/images/Carousel/2.webp";
import plate3 from "../../../assets/images/Carousel/3.webp";
import plate4 from "../../../assets/images/Carousel/4.webp";
import plate5 from "../../../assets/images/Carousel/5.webp";
import { useContext, useEffect } from "react";
import { App_Context } from "../../../App_Context/App_Context";

const plates = {
  id: [1, 2, 3, 4, 5],
  image: [plate1, plate2, plate3, plate4, plate5],
};

const flickityOptions = {
  initialIndex: 2,
  wrapAround: true,
  autoPlay: true,
  prevNextButtons: false,
};

export const Carousel = ({ searchQuery }) => {

  const {hideSlider, setHideSlider} = useContext(App_Context);

  useEffect(() => {
    setTimeout(() => {
      if (searchQuery)
     document.querySelector('.flickity-enabled').style.top = "-1000px";
    }, 100);
  }, [searchQuery])

  return (
    <div className={cl.div} style={{overflow: "hidden"}}>

    <Flickity
      className="slider"
      elementType="div"
      disableImagesLoaded={false}
      options={flickityOptions}
      reloadOnUpdate
      static
    >
      {plates["id"].map((index) => {
        return (
          <div className={cl.div}>
            <div
              className={cl.plate}
              style={{ backgroundImage: `url(${plates["image"][index - 1]})` }}
            />
          </div>
        );
      })}
    </Flickity>
    </div>
  );
};
