type Line = { time: number, content: string }

const parseReg = /\[(\d+):(\d+).(\d+)\]/

const parseTime = (line: string) => {
    const res = parseReg.exec(line) as any[]
    if (!res) return 0
    const m = res[1] * 60 * 1000
    const s1 = res[2] * 1000
    const s2 = res[3].length === 3 ? res[3] * 1 : res[3] * 10
    const allTime = m + s1 + s2
    return allTime
}

const parseContent = (content: string) => {
    const lyricList: Line[] = []
    const timeList: number[] = []
    while (content.match(parseReg)) {
        timeList.push(parseTime(content))
        content = content.replace(parseReg, '').trim()
    }
    timeList.forEach(time => {
        if (time) {
            lyricList.push({
                time,
                content
            })
        }
    })
    return lyricList
}


const parseLyric = (lyricStirng: string) => {
    // console.log(lyricStirng)
    const lineList = lyricStirng.split('\n')
    const lyricList: Line[] = []
    for (let line of lineList) {
        // const allTime = parseTime(line)
        // const content = line.replace(parseReg, '').trim()
        // lyricList.push({
        //     time: allTime,
        //     content
        // })
        lyricList.push(...parseContent(line))
    }
    // console.log(lyricList.sort((a,b) => a.time - b.time).filter(item => !!item.content))
    return lyricList.sort((a,b) => a.time - b.time).filter(item => !!item.content)
}

export default parseLyric