import fs from 'fs'

export const createSrcFolder = ({base})=>{
    fs.mkdirSync(`${base}/src`)
}