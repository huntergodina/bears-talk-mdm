import { DraftPick, DraftPlayer, Team, TeamNeeds } from "./types"

const WORST_RANK = 14;

export function startDraft() {

}

export function autoAdvancePick(currentTeam: Team, players: DraftPlayer[]) {

}

export function bestFitForTeam(team: Team, players: DraftPlayer[]) {
    return players.sort((a,b) => {
        return playerValue(team.needs, b) - playerValue(team.needs, a)
    })[0];
}

function playerValue(needs: TeamNeeds, player: DraftPlayer) {
    let needIndex = needs.selected.includes(player.position) ? needs.displayed.indexOf(player.position) : WORST_RANK;
    return 1 / (needIndex);
}

export function selectPlayer(team: Team, player: DraftPlayer) {

}

export function tradePicks(firstTeam: Team, secondTeam: Team, picks: DraftPick[]) {

}