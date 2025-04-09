import { render, screen } from "@testing-library/react";
import { myNeighborIgnaciosHouse, myNeighborMariasHouse } from "../../fixtures";
import MonumentCardsList from "./MonumentCardsList";

describe("Given the MonumentCardsList component", () => {
  describe("When it receives my neighbor Maria's house and my neighbor Ignacio's house", () => {
    test("Then it should show 'Maria's house' and 'Ignacio's house' inside a heading", () => {
      const monuments = [myNeighborMariasHouse, myNeighborIgnaciosHouse];

      render(<MonumentCardsList monuments={monuments} />);

      const mariasHouseName = screen.getByRole("heading", {
        name: myNeighborMariasHouse.name,
      });
      const ignaciosHouseName = screen.getByRole("heading", {
        name: myNeighborIgnaciosHouse.name,
      });

      expect(mariasHouseName).toBeVisible();
      expect(ignaciosHouseName).toBeVisible();
    });
  });
});
