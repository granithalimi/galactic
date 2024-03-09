export function binary(src, alt){
    let arr = []
    const image = src
    for(let i = 0; i < 250; i++){
        let randomN = Math.random()
        if(randomN > 0.5){
            arr.push(1)
        }else{
            arr.push(0)
        }
        if(i % 29 === 0){
            arr.push(image)
        }
    }
    return arr
}