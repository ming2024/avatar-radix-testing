import { render, screen } from "@testing-library/react";
import Avatar from "./Avatar";

test("renders Avatar", () => {
  render(<Avatar src="https://placekitten.com/400/400" alt="kitten" />);

  expect(screen.getByAltText("kitten")).toHaveAttribute(
    "src",
    "https://placekitten.com/400/400"
  );
});
