import { screen, render } from "@testing-library/react";
import Card from "./Card";
import {BrowserRouter} from "react-router-dom";

describe("Card", () => {
    it("renders nothing without `formation`", () => {
        render(<Card />);
        const linkElement = screen.queryByTestId("card")
        expect(linkElement).not.toBeInTheDocument();
    });
    it("renders the match", () => {
        let match = {
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
        render(<BrowserRouter><Card match={match} /></BrowserRouter>);
        const linkElement = screen.queryByTestId("card")
        expect(linkElement).toBeInTheDocument();
        let titreMatch =  match.home_team.name  + " VS " +  match.away_team.name
        expect(linkElement).toHaveTextContent(titreMatch)
    });
});