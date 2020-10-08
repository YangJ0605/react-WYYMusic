import {Map} from 'immutable'

import * as actionTypes from './constant'
import {PlayerState, ActionTypes} from './types'

import playList from './playList'

interface PlayerStateMap<T> extends Map<string, any> {
    get<K extends keyof T>(key: K): T[K]
}

export type State = PlayerStateMap<PlayerState>

const initialState:State = Map({
    currentSong:{},
    playList: playList,
    currentSongIndex: 0,
    sequence: 0,
    lyricList: []
})

const reducer = (state = initialState, action:ActionTypes) => {
    switch(action.type) {
        case actionTypes.CHANGE_CURRENT_SONG:
            return state.set('currentSong', action.currentSong)
        case actionTypes.CHANGE_PLAY_LIST:
            return state.set('playList', action.playList)
        case actionTypes.CHANGE_CURRENT_SONG_INDEX:
            return state.set('currentSongIndex', action.index)
        case actionTypes.CHANGE_SEQUENCE:
            return state.set('sequence', action.sequence)
        case actionTypes.CHANGE_LYRIC_LIST:
            return state.set('lyricList', action.lyricList)
        default:
            return state
    }
}

export default reducer