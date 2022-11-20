'use client'

import { useEffect, useRef, useState } from "react"
import {testAlbum}  from "../../../helpers/testVars"
import TrackTable from "../../components/tracktable"

export default function Album({params} : { params: {title:string}}) {
    const fetched = useRef<boolean>(false)
    const [album, setAlbum] = useState<any>(testAlbum)

    const fetchAlbum = (title:string) => {
            fetch(`/api/album/${title}`)
            .then((res) => res.json())
            .then((res) => {setAlbum(res)})
            .then(() => {fetched.current = true})
            .catch((err) => console.error(err))
    }

    const makeTable = (trackList:any) => {
        return (
            trackList.map((track:any) => {
                return (
                <tr>
                    <td>
                        <input type="checkbox"/>
                    </td>
                    <td>
                        {track.title}
                    </td>
                    <td>
                        <a href={track.links.download} download>Download</a>
                    </td>
                </tr>
                )
            })
        )
            
    }

    useEffect(() => {
        // if(!fetched.current)
        //     fetchAlbum(params.title)
    },[])
    
    console.log(testAlbum)
    return (
        <table className="">
        <thead className="">
            <tr>
            <th scope="col" className="p-4">
                    <div className="flex items-center">
                        Select
                    </div>
                </th>
                <th scope="col" className="py-3 px-6">Title</th>
                <th scope="col" className="py-3 px-6">Link</th>
            </tr>
        </thead>
        <tbody>
            {makeTable(testAlbum.tracks)}
        </tbody>
    </table>
    )
}