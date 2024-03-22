import { Step } from "../interfaces";
import { PATHS } from "./constants";

export const classNames = (...classes: string[]) => {
  return classes.filter(Boolean).join(" ");
};

export const getYears = (birthday: string) => {
  const today = new Date();
  const birthDate = new Date(birthday);

  return today.getFullYear() - birthDate.getFullYear();
};

export const getDataStep = (steps: Step[], pathname: string) => {
  let prevPath: string = PATHS.HOME;
  let index = 0;
  for (const step of steps) {
    if (pathname.includes(step.path)) break;
    index++;
  }

  if (index !== 0) prevPath = steps[index - 1].path;

  return {
    prevPath,
    currentStep: index + 1,
  };
};
