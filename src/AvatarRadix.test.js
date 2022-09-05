import { render, screen } from "@testing-library/react";
import AvatarRadix from "./AvatarRadix";

test("renders Avatar", () => {
  render(<AvatarRadix src="https://placekitten.com/400/400" alt="kitten" />);

  screen.debug();

  expect(screen.getByAltText("kitten")).toHaveAttribute(
    "src",
    "https://placekitten.com/400/400"
  );
});
