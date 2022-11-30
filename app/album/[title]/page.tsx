"use client";

import { useEffect, useRef, useState } from "react";
import { testAlbum } from "../../../helpers/testVars";
import { ITrack } from "../../components/types";
import TrackTable from "../../components/tracktable";
import Card from "../../components/card";

export default function Album({ params }: { params: { title: string } }) {
  const fetched = useRef<boolean>(false);
  const [album, setAlbum] = useState<any>(testAlbum);

  // function forceDownload(blob:any, filename:any) {
  //   let a = document.createElement('a');
  //   a.download = filename;
  //   a.href = blob;
  //   // For Firefox https://stackoverflow.com/a/32226068
  //   document.body.appendChild(a);
  //   a.click();
  //   a.remove();
  // }

  // const downloadTrack = (track:ITrack) => {
  //   const encodedName:any = track.links.download?.split('/')
  //   const filename:string = decodeURI(encodedName[encodedName?.length - 1])

  //   fetch(`${track.links.download}`, {
  //     headers: {
  //       'Origin': location.origin
  //     },
  //     mode: 'no-cors'
  //   })
  //   .then(res => res.blob())
  //   .then(blob => {
  //     // let blobURL = window.URL.createObjectURL(blob)
  //     return blob
  //   })
  //   .catch((err) => console.error(err))
  // }
  // // downloadTrack(testAlbum.tracks[0])

  const fetchAlbum = (title: string) => {
    fetch(`/api/album/${title}`)
      .then((res) => res.json())
      .then((res) => {
        setAlbum(res);
      })
      .then(() => {
        fetched.current = true;
      })
      .catch((err) => console.error(err));
  };

  const makeTable = (trackList: any) => {
    return trackList.map((track: any) => {
      return (
        <tr>
          <td>
            <input type="checkbox" />
          </td>
          <td>{track.title}</td>
          <td>
            <button type="button" onClick={downloadTrack(track)}>
              Download
            </button>
            {/* <a href={downloadTrack(track)}>
            
              Download
            </a> */}
          </td>
        </tr>
      );
    });
  };

  useEffect(() => {
    // if(!fetched.current)
    //     fetchAlbum(params.title)
  }, []);

  return (
    <div className="card flex grow justify-start max-w-4xl content-end space-x-4">
        <div className="sm:container pt-5">
            <img
                className="place-self-start"
                src={testAlbum.albumArt[0]}
                width="256"
                height="256"
            />
        </div>
      <div className="lg:container">
        <table className="table-auto">
          <thead>
            <tr>
              <th>Select</th>
              <th>Title</th>
              <th>Link</th>
            </tr>
          </thead>
          <tbody>{makeTable(testAlbum.tracks)}</tbody>
        </table>
      </div>
    </div>
  );
}
