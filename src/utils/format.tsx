export const getSizeImage = (url:string, size:number) => {
    return `${url}?param=${size}x${size}`
}