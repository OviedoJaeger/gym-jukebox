import { useEffect, useState } from "react";
import { mockSongs } from "../data/mockSongs";
import Panel from "./ui/Panel";

export default function SearchSection({ 
    onAddSong, 
    queueMessage,
    clearQueueMessage,
}) {
    const [search, setSearch] = useState("")

    const filteredSongs = search
        ? mockSongs.filter((song) =>
        song.title.toLowerCase().includes(search.toLowerCase()) ||
        song.artist.toLowerCase().includes(search.toLowerCase())
    ) : []

    useEffect(() => {
        if(!queueMessage) return

        const timeoutId = setTimeout(() => {
            clearQueueMessage()
        }, 3000)

        return () => clearTimeout(timeoutId)
    }, [queueMessage, clearQueueMessage])

    return(
        <Panel className="min-h-50">
            <div className="flex items-center justify-between gap-4">
                <p className="text-sm uppercase tracking-widest text-zinc-400">
                    Buscar canción
                </p>
                <span className="text-xs text-zinc-500">
                    Elige una canción para agregar
                </span>
            </div>

            {queueMessage && (
                <p className="mt-3 text-sm font-medium text-yellow-400">
                    {queueMessage}
                </p>
            )}

            <div className="mt-4">
                <input type="text" placeholder="Busca por cancion o artista..."
                value={search} onChange={(event) => setSearch(event.target.value)}
                className="w-full rounded-2xl border border-zinc-700 bg-zinc-800 px-4 py-3 text-white placeholder-zinc-500 outline-none transition focus:border-yellow-400"/>
            </div>
            
            <div className="mt-6 space-y-3">
                {filteredSongs.length > 0 ? (
                    filteredSongs.map((song) => (
                        <div
                            key={song.id}
                            className="flex items-center justify-between gap-4 rounded-2xl border border-zinc-800 bg-zinc-800/70 px-4 py-3"
                        >
                            <div className="min-w-0">
                                <h3 className="truncate font-semibold text-white">
                                    {song.title}
                                </h3>
                                <p className="truncate text-sm text-zinc-400">
                                    {song.artist}
                                </p>
                            </div>

                            <button 
                                onClick={() => onAddSong(song)}
                                className="shrink-0 rounded-xl bg-yellow-400 px-4 py-2 text-sm font-semibold text-black transition hover:bg-yellow-300"
                                >
                                Agregar
                            </button>
                        </div>
                        
                    ))
                ) : (
                    <p className="text-sm text-zinc-400">
                        No se encontraron resultados.
                    </p>
                )}
            </div>
        </Panel>
    )
}