import { screen, render } from "@testing-library/react";
import Formation from "./Formation";

describe("Formation", () => {
    it("renders nothing without `formation`", () => {
        render(<Formation />);
        const linkElement = screen.queryByTestId("formation")
        expect(linkElement).not.toBeInTheDocument();
    });
    it("renders 'Test pour la formation' with `formation`", () => {
        render(<Formation formation={"Test pour la formation"} />);
        const linkElement = screen.getByText(/Test pour la formation/i);
        expect(linkElement).toBeInTheDocument();
    });
});