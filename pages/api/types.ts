import { type } from "os";

export type DraftPick = {
    round: number,
    pick: number,
    year: number,
    traded: boolean,
    trades: DraftPickTrade[],
    team: Team
}

export type Team = {
    id: number,
    city: String,
    name: String,
    color: String,
    code: String,
    slug: String,
    needs: TeamNeeds
}

export type TeamNeeds = {
    displayed: String[],
    all: String[],
    selected: String[]
}

export type DraftPickTrade = {
    prevTeam: Team
}

export type DraftPlayer = {
    rank: number,
    name: String,
    position: String,
    slug: String,
    grade: String,
    blurb: "",
    college: College,
    team: Team
}

export type College = {
    city: String,
    name: String,
    logo: String,
    slug: String,
    color: String
}

export type TradeValue = {
    round: number,
    pick: number,
    value: number
}

export type DraftData = {
    order: DraftPick[],
    players: DraftPlayer[],
    trade: TradeValue[],
    next: DraftPick[]
}