import { screen, render } from "@testing-library/react";
import LogoEquipe from "./LogoEquipe";

describe("LogoEquipe", () => {
    it("renders nothing without `url`", () => {
        render(<LogoEquipe />);
        const linkElement = screen.queryByTestId("logo")
        expect(linkElement).not.toBeInTheDocument();
    });
    it("renders logo without width", () => {
        render(<LogoEquipe url={"dazeadez"} name={"name"} />);
        const linkElement = screen.queryByTestId("logo")
        expect(linkElement).toBeInTheDocument();
        expect(linkElement).toHaveClass("block" ,"object-cover" ,"object-center" ,"rounded-lg", "mx-auto", "w-24", "md:w-48" ,"lg:w-64")
    });
    it("renders logo with width", () => {
        render(<LogoEquipe url={"dazeadez"} name={"name"} width={"w-12 md:w-36 lg:w-48"} />);
        const linkElement = screen.queryByTestId("logo")
        expect(linkElement).toBeInTheDocument();
        expect(linkElement).toHaveClass("block" ,"object-cover" ,"object-center" ,"rounded-lg", "mx-auto", "w-12", "md:w-36" ,"lg:w-48")
    });
});