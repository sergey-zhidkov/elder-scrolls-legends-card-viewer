import axios, { AxiosResponse } from "axios"
import { eslApiEndpoint } from "../appSettings"

export interface CardListInfoResponse {
    cards: CardInfo[]
    _links: { next?: string; prev?: string }
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
 * Helper class to make API http requests
 */
export class FetchClient {
    private readonly cardsApiUrl: string

    constructor(nextUrl: string | undefined) {
        this.cardsApiUrl = nextUrl || getCardsApiUrl()
    }

    fetchCards(): Promise<CardListInfoResponse> {
        return axios
            .get(this.cardsApiUrl, {
                params: {
                    pageSize: defaultPageSize,
                },
            })
            .then((response: AxiosResponse<CardListInfoResponse>) => {
                return response.data
            })
    }

    searchByName(name: string): Promise<CardListInfoResponse> {
        return axios
            .get(this.cardsApiUrl, {
                params: {
                    name: name,
                    pageSize: defaultPageSize,
                },
            })
            .then((response: AxiosResponse<CardListInfoResponse>) => {
                return response.data
            })
    }
}
