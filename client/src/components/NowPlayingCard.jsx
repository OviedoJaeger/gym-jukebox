import { formatTime } from "../utils/formatTime"
import Panel from "./ui/Panel"


export default function NowPlaying({ track }) {

    return(
        <Panel className="min-h-90">
            
            <p className="text-sm uppercase tracking-widest text-zinc-400">
                Actualmente reproduciendo
            </p>

            <div className="mt-6 flex flex-col md:flex-row gap-6">
                <div className="h-52 w-full md:w-52 rounded-2xl bg-linear-to-br from-yellow-400 via-yellow-500 to-zinc-800 shadow-lg flex items-center justify-center">
                    <span className="text-sm font-semibold text-black">Portada</span>
                </div>

                <div className="flex-1 flex flex-col justify-center">
                    <h2 className="text-3xl md-text-4xl font-bold text-white leading-tight">
                        {track.title}
                    </h2>

                    <p className="mt-2 text-lg text-zinc-400">
                        {track.artist}
                    </p>

                    <div className="mt-6">
                        
                        <div className="h-2 w-full bg-zinc-800 overflow-hidden">
                            <div className="h-full rounded-full bg-yellow-400" style={{width: `${(track.progress / track.duration) * 100}%`}}></div>
                        </div>

                        <div className="mt-2 flex justify-between text-xs text-zinc-500">
                            <span>{formatTime(track.progress)}</span>
                            <span>{formatTime(track.duration)}</span>
                        </div>

                    </div>
                </div>
            </div>

        </Panel>
    )
}