export const getSizeImage = (url:string, size:number) => {
    return `${url}?param=${size}x${size}`
}

export function getPlaySong(id:number) {
    return `https://music.163.com/song/media/outer/url?id=${id}.mp3`;
  }
  

export const getRandomNum = (length:number) => {
    return Math.floor(Math.random() * length)
}