import * as actionTypes from './constant'

export type PlayerState = {
    currentSong: object
}
export type CurrentSong = {
    name: string
    dt: number
    al: any
    ar: any
    id: number
}

export type PlayList = CurrentSong[]

export type Sequence = 0 | 1 | 2 // 0 循环 1 随机 2 单曲循环

export type LyricList = {time:number, content:string}[]

export type ChangeCurrentSongAction = {
    type: typeof actionTypes.CHANGE_CURRENT_SONG
    currentSong: CurrentSong
}

export type ChangePlayListAction = {
    type: typeof actionTypes.CHANGE_PLAY_LIST
    playList: PlayList
}

export type ChangeCurrentSongIndexAction = {
    type: typeof actionTypes.CHANGE_CURRENT_SONG_INDEX
    index: number
}


export type ChangeSequenceAction = {
    type: typeof actionTypes.CHANGE_SEQUENCE
    sequence: Sequence
}

export type ChangeLyricListAction = {
    type: typeof actionTypes.CHANGE_LYRIC_LIST
    lyricList: LyricList
}

export type ActionTypes = ChangeCurrentSongAction | ChangePlayListAction | ChangeCurrentSongIndexAction | ChangeSequenceAction | ChangeLyricListAction