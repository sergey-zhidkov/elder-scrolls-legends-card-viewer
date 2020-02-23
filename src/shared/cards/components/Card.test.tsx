import React from "react"
import { render } from "@testing-library/react"
import { Card } from "./Card"
import { CardInfo } from "../../../utils/FetchClient"

describe("Card component", () => {
    let card: CardInfo

    beforeEach(() => {
        card = {
            id: "mock_id",
            attributes: [],
            collectible: true,
            cost: 3,
            imageUrl: "fake_url",
            name: "Card name",
            rarity: "Legendary",
            set: {
                id: "fake_set",
                name: "Mock set",
                _self: "",
            },
            text: "Card text",
            type: "Card type",
            unique: false,
        }
    })

    test("rendered", () => {
        const { getByText } = render(<Card card={card} />)
        const cardNameElement = getByText(/Card name/)
        const cardSetElement = getByText(/Mock set/)
        const cardTextElement = getByText(/Card text/)
        expect(cardNameElement).toBeInTheDocument()
        expect(cardSetElement).toBeInTheDocument()
        expect(cardTextElement).toBeInTheDocument()
    })
})
