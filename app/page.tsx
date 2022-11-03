'use client'

import { useEffect, useState } from "react";
import Card from "./components/card";

export default function HomePage() {
  const [search, setSearch] = useState<string>('')
  const [albums, setAlbums] = useState(null)
  
  useEffect(() => {
    console.log(search)
  }, [search])

  const handleChange = (e:any) => {
    setSearch(e.target.value)
  }

  const handleSubmit = (e:any) => {

  }

  return (
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
              className="border-2 border-slate-500 p-2 rounded-2xl"
            >
              Search
            </button>
            <button
              id="clear"
              type="button"
              onClick={() => setSearch('')}
              className="bg-sky-800 border-2 border-slate-500 p-2 rounded-2xl"
            >
              Clear
            </button>
          </form>
        </Card>
  );
}
