/* eslint-disable @typescript-eslint/no-explicit-any */
import { SwiperSlide, Swiper } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { useState, useRef, FC } from "react";
// import Swiper and modules styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import PlanCard from "../../components/PlanCard";
import "./styles.scss";
import { ArrowLeftIcon, ArrowRightIcon } from "../../components/Icons";
import { classNames } from "../../utils/util";
import { Plan, TypesOptionsValues } from "../../interfaces";
import { updateSelectedPlan } from "../../slices/plansSlice";
import { useNavigate } from "react-router-dom";
import { PATHS } from "../../utils/constants";
import { useAppDispatch } from "../../app/hooks";

interface Props {
  plans: Plan[];
  typeOption: TypesOptionsValues;
}

const SliderPlans: FC<Props> = ({ plans, typeOption }) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [sliderBegOrNot, handleSliderByState] = useState({
    isFirst: true,
    isLast: false,
  });
  const sliderRef = useRef<any>();

  const handleNext = () => {
    sliderRef.current.swiper.slideNext();
  };

  const handlePrev = () => {
    sliderRef.current.swiper.slidePrev();
  };

  const onSlideChange = (swiper: any) => {
    handleSliderByState({
      isFirst: swiper.isBeginning,
      isLast: swiper.isEnd,
    });
  };

  const handleClickPlan = (plan: Plan) => {
    dispatch(updateSelectedPlan(plan));
    navigate(PATHS.SUMMARY);
  };

  return (
    <>
      <Swiper
        ref={sliderRef}
        slidesPerView={1}
        spaceBetween={10}
        navigation={false}
        className="mySwiper"
        onSlideChange={onSlideChange}
        modules={[Pagination, Navigation]}
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 50,
          },
          601: {
            slidesPerView: 2,
            spaceBetween: 80,
          },
          900: {
            slidesPerView: 3,
            spaceBetween: 55,
          },
        }}
        pagination={{
          el: ".swiper-paginations",
          type: "fraction",
        }}
      >
        {plans.map((plan, i) => (
          <SwiperSlide key={i} className="container-slide">
            <PlanCard
              plan={plan}
              typeOption={typeOption}
              onClick={(plan) => {
                handleClickPlan(plan);
              }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="container-pagination">
        <div
          onClick={handlePrev}
          className={classNames(
            "circle",
            sliderBegOrNot.isFirst ? "" : "circle--active"
          )}
        >
          <ArrowLeftIcon />
        </div>
        <div className="swiper-paginations"></div>
        <div
          onClick={handleNext}
          className={classNames(
            "circle",
            sliderBegOrNot.isLast ? "" : "circle--active"
          )}
        >
          <ArrowRightIcon />
        </div>
      </div>
    </>
  );
};

export default SliderPlans;
