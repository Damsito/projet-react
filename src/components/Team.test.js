import { screen, render } from "@testing-library/react";
import Team from "./Team";

describe("Team", () => {
    it("renders nothing without `team`", () => {
        render(<Team />);
        const linkElement = screen.queryByTestId("team")
        expect(linkElement).not.toBeInTheDocument();
    });
    it("renders the team`", () => {
        let team = {
            logo: "adzeaezd",
            name: "name"
        }
        render(<Team team={team} />);
        const linkElement = screen.queryByTestId("team")
        expect(linkElement).toBeInTheDocument();
        expect(linkElement).toHaveTextContent(team.name);
    });
});