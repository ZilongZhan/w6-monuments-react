import { render, screen } from "@testing-library/react";
import { myNeighborMariasHouse } from "../../fixtures";
import MonumentCard from "./MonumentCard";

describe("Given the MonumentCard component", () => {
  describe("When it receives my neighbor Maria's house", () => {
    test("Then it should show 'Maria's house' inside a heading", () => {
      render(<MonumentCard monument={myNeighborMariasHouse} />);

      const monumentName = screen.getByRole("heading", {
        name: myNeighborMariasHouse.name,
      });

      expect(monumentName).toBeVisible();
    });

    test("Then it should show iconic angle of Maria's house", () => {
      render(<MonumentCard monument={myNeighborMariasHouse} />);

      const monumentImage = screen.getByAltText(myNeighborMariasHouse.imageAlt);

      expect(monumentImage).toBeVisible();
    });
  });
});
