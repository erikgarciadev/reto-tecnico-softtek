import { Link, Navigate } from "react-router-dom";
import ButtonBack from "../../components/ButtonBack";
import { PATHS } from "../../utils/constants";
import { useEffect } from "react";
import "./styles.scss";
import OptionCard from "../../components/OptionCard";
import { options } from "../../utils/data";
import SliderPlans from "./SliderPlans";
import { getPlans, updateSelectedOption } from "../../slices/plansSlice";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { getYears } from "../../utils/util";
import { TypesOptionsValues } from "../../interfaces";
import StepsLayout from "../../layouts/StepsLayout";

const Plans = () => {
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.home.user);
  const plans = useAppSelector((state) => state.plans.plans);
  const selectedOption = useAppSelector((state) => state.plans.selectedOption);

  useEffect(() => {
    dispatch(getPlans());
  }, []);

  if (!user) {
    return <Navigate to={PATHS.HOME} />;
  }

  const handleSelectOption = (typeOption: TypesOptionsValues) => {
    dispatch(updateSelectedOption(typeOption));
  };

  const years = getYears(user.birthDay);
  const filterPlansByYears = plans.filter((plan) => plan.age >= years);

  return (
    <StepsLayout>
      <div className="container container-plans">
        <div className="container-button-back">
          <Link to={PATHS.HOME}>
            <ButtonBack />
          </Link>
        </div>
        <div className=" container-plans__instructions">
          <h1>{user.name} ¿Para quién deseas cotizar?</h1>
          <p>Selecciona la opción que se ajuste más a tus necesidades.</p>
        </div>
        <div className="container-plans__options">
          {options.map((option, i) => (
            <OptionCard
              onClick={() => {
                handleSelectOption(option.type);
              }}
              key={i}
              selected={option.type === selectedOption}
              {...option}
            />
          ))}
        </div>
        {selectedOption ? (
          <div className="container-plans__list-plans">
            {filterPlansByYears.length === 0 ? (
              <h3>No hay planes disponibles</h3>
            ) : (
              <SliderPlans
                typeOption={selectedOption}
                plans={filterPlansByYears}
              />
            )}
          </div>
        ) : null}
      </div>
    </StepsLayout>
  );
};

export default Plans;
