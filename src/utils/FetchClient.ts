import axios, { AxiosResponse, CancelTokenSource, AxiosRequestConfig } from "axios"
import { eslApiEndpoint } from "../appSettings"

export interface EslSearchResponse {
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
    private readonly cancelToken: CancelTokenSource

    constructor(nextUrl?: string) {
        this.cardsApiUrl = nextUrl || getCardsApiUrl()
        this.cancelToken = axios.CancelToken.source()
    }

    get token() {
        return this.cancelToken
    }

    fetchCards(namePattern?: string): Promise<EslSearchResponse> {
        const config: AxiosRequestConfig = {
            params: {
                pageSize: defaultPageSize,
                cancelToken: this.cancelToken,
            },
        }
        if (namePattern) {
            config.params.name = namePattern
        }

        return axios.get(this.cardsApiUrl, config).then((response: AxiosResponse<EslSearchResponse>) => {
            return response.data
        })
    }
}
