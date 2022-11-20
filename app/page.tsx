'use client'

import { useEffect, useState } from "react";
import Card from "./components/card";

export default function HomePage() {
  const [search, setSearch] = useState<string>('')
  const [albums, setAlbums] = useState<any>([])
  
  useEffect(() => {
  
  }, [search])

  const handleChange = (e:any) => {

    setSearch(e.target.value)
  }

  const handleSubmit = (e:any) => {
    e.preventDefault()
    fetch(`api/search/${search}`)
      .then((res) => res.json())
      .then((res) => setAlbums(res))
      .catch((err) => console.error(err));
  }

  const handleSelect = (e:any) => {
    console.log(e.target.attributes.id.value)
  }

  return (
    <div>
      <Card>
        <form onSubmit={handleSubmit}>
          <input
            id="albumSearch"
            type="text"
            value={search}
            onChange={handleChange}
            placeholder="Album/Track"
            className="border-2 border-cyan-800 p-2 px-8 rounded-2xl text-xl"
          />
          <button
            id="search"
            type="submit"
            className="border-2 p-2 rounded-2xl bg-sky-800 border-slate-500 hover:text-black hover:bg-slate-500 hover:border-transparent"
          >
            Search
          </button>
          <button
            id="clear"
            type="button"
            onClick={() => setSearch('')}
            
            className="border-2 p-2 rounded-2xl bg-sky-800 border-slate-500 hover:text-black hover:bg-slate-500 hover:border-transparent"
          >
            Clear
          </button>
        </form>
      </Card>
      {albums && (
        <div className="grid gap-4 grid-cols-3">
          {albums.map((album: any) => {  
            return (
              <div className="card flex grow justify-start max-w-4xl content-end space-x-4" key={album.vtName}>
                <img src={album.thumbnail} width="128" height="128" />
                <div className="md:container"> 
                    <div className="place-self-start">
                      <h1>{album.title}</h1>
                      <h3>{album.year}</h3>
                      <h6>{album.platforms.join(", ")}</h6>
                    </div>
                    <div className="pt-5">
                      <button 
                        id={album.vtName} 
                        type="button" 
                        onClick={handleSelect}  
                        className="px-4 py-1 text-sm font-semibold rounded-full border bg-sky-800 border-slate-500 hover:text-black hover:bg-slate-500 hover:border-transparent"
                        >
                          Browse
                      </button>
                    </div>
                </div>
              </div>
            )      
          })}
        </div>
      )}
    </div>
      
  );
}
