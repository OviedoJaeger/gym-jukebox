import Panel from "./ui/Panel"

export default function QueuePreview({ queuedSongs }) {

    const visibleSongs = queuedSongs.slice(-3)
    const startIndex = queuedSongs.length - visibleSongs.length

    return(
        <Panel className="min-h-45">
            <div className="flex items-center justify-between gap-4">
                <div>
                    <p className="text-sm uppercase tracking-widest text-zinc-400">
                        En cola
                    </p>

                    <h3 className="mt-1 text-xl font-bold text-white">
                        {queuedSongs.length} canciones
                    </h3>
                </div>

                <span className="rounded-full bg-yellow-400/10 px-3 py-1 text-xs font-medium text-yellow-400">
                Próximas</span>
            </div>

            <div className="mt-5 space-y-3">
                {visibleSongs.map((song, index) =>(
                    <div key={song.id}
                    className="flex items-center justify-between rounded-xl border border-zinc-800 bg-zinc-800/60 px-4 py-3"
                    >
                        <div className="min-w-0">
                            <p className="text-sm text-zinc-500">#{startIndex + index + 1}</p>
                            <h4 className="truncate font-semibold text-white">{song.title}</h4>
                            <p className="truncate text-sm text-zinc-400">{song.artist}</p>
                        </div>
                    </div>
                ))}
            </div>
        </Panel>
    )
}