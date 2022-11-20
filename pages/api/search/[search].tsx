import { NextApiRequest, NextApiResponse } from "next";
import { searchAlbum } from "../../../helpers/simpleCrawler"

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    const {search} = req.query

    return new Promise((resolve) => {
        if(req.method !== 'GET') {
            res.status(404).json({})
            resolve({})
        }

        searchAlbum({query: search})
        .then((albums) => {
            res.status(200).json(albums)
            resolve(albums)
        })
    })
}