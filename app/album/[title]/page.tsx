"use client";

import { useEffect, useRef, useState } from "react";
import { testAlbum } from "../../../helpers/testVars";
import TrackTable from "../../components/tracktable";
import Card from "../../components/card";

export default function Album({ params }: { params: { title: string } }) {
  const fetched = useRef<boolean>(false);
  const [album, setAlbum] = useState<any>(testAlbum);

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
            <a href={track.links.download} download>
              Download
            </a>
          </td>
        </tr>
      );
    });
  };

  useEffect(() => {
    // if(!fetched.current)
    //     fetchAlbum(params.title)
  }, []);

  console.log(testAlbum);
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
