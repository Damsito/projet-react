import { screen, render } from "@testing-library/react";
import Statistique from "./Statistique";

describe("Statistique", () => {
    it("renders nothing without `stat`", () => {
        render(<Statistique />);
        const linkElement = screen.queryByTestId("statistique")
        expect(linkElement).not.toBeInTheDocument();
    });
    it("renders everything with `stat`", () => {
        let stat = {
            attacks: 3,
            corners: 4,
            fouls: 2,
            free_kick: 4,
            goal_attempts: 5,
            goal_kick: 10,
            goals: 10,
            offsides: 4,
            yellowcards: 10,
            redcards: 1
        }
        render(<Statistique stat={stat} />);

        Object.entries(stat).map((s) => {
             const linkElement = screen.queryByTestId(s[0])
             expect(linkElement).toBeInTheDocument();
             expect(linkElement).toHaveTextContent(s[1])
        })
    });
});