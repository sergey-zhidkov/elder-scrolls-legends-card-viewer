import axios, { AxiosResponse } from "axios"
import { eslApiEndpoint } from "../appSettings"

// axios
// .get("/user?ID=12345")
// .then(function(response) {
//     console.log(response)
// })
// .catch(function(error) {
//     console.log(error)
// })

export interface CardListInfoResponse {
    cards: CardInfo[]
    _links: { next: string }
    _pageSize: number
    _totalCount: number
}

export interface CardInfo {
    id: string
    attributes: string[]
    collectible: boolean
    cost: number
    imageUrl: string
    name: string
    rarity: string
    set: CardSet
    text: string
    type: string
    unique: boolean
}

export interface CardSet {
    id: string
    name: string
    _self: string
}

const defaultPageSize = 20

function getCardsApiUrl(): string {
    return `${eslApiEndpoint}/v1/cards`
}

/**
 * Helper class to make http requests to API
 */
export class FetchClient {
    private readonly cardsApiUrl: string

    constructor() {
        this.cardsApiUrl = getCardsApiUrl()
    }

    async fetchCards(): Promise<CardListInfoResponse> {
        return axios
            .get(this.cardsApiUrl, {
                params: {
                    pageSize: defaultPageSize,
                },
            })
            .then((response: AxiosResponse<CardListInfoResponse>) => {
                // console.log(response)
                return response.data
            })
        // .catch(function(error) {
        //     console.log(error)
        // })
    }
}