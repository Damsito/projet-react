import { screen, render } from "@testing-library/react";
import VerticalList from "./VerticalList";
import {BrowserRouter} from "react-router-dom";

describe("VerticalList", () => {
    it("renders nothing without `matches`", () => {
        render(<VerticalList />);
        const linkElement = screen.getByText("Aucun match ne correspond à votre recherche.")
        expect(linkElement).toBeInTheDocument();
    });
    it("renders matches", () => {
        let matches = [
            {
                match_id: 1,
                home_team: {
                    name: "madrid",
                    logo: "daedeazdze"
                },
                away_team: {
                    name: "barca",
                    logo: "daedeazdze"
                }
            }
        ]
        render( <BrowserRouter><VerticalList matches={matches} /></BrowserRouter>);
        const linkElement = screen.queryByTestId("verticalList")
        expect(linkElement).toBeInTheDocument();
    });
});