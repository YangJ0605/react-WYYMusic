const parseReg = /\[(\d+):(\d+).(\d+)\]/

const parseLyric = (lyricStirng: string) => {
    const lineList = lyricStirng.split('\n')
    const lyricList:{time:number, content:string}[] = []
    for (let line of lineList) {
        const res = parseReg.exec(line) as any[]
        if(!res) continue
        const m = res[1] * 60 * 1000
        const s1 = res[2] * 1000
        const s2 = res[3].length === 3 ? res[3] * 1: res[3] * 10
        const allTime = m + s1 + s2
        const content = line.replace(parseReg, '').trim()
        lyricList.push({
            time: allTime,
            content
        })
    }
    return lyricList
}

export default parseLyric