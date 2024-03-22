import { render } from "@testing-library/react";
import OptionCard from "./index";

test("Should render OptionCard", () => {
  render(<OptionCard title="Text" subTitle="SubText"></OptionCard>);
});

test("Should show Icon check, when prop is selected", () => {
  const { container } = render(
    <OptionCard title="Text" subTitle="SubText" selected></OptionCard>
  );

  const imgCheck = container.querySelector("img[alt='Icon check'");
  expect(imgCheck).toBeInTheDocument();
});
