import { announcementsData } from "../data/announcements";
import Panel from "./ui/Panel";

export default function Announcements() {
    return (
        <Panel className="min-h-80">
            <div className="flex items-center justify-between gap-3">
                <p className="text-sm uppercase tracking-widest text-zinc-400">
                Anuncios
                </p>

                <span className="rounded-full bg-yellow-400/10 px-3 py-1 text-xs font-medium text-yellow-400">
                    Gym Info
                </span>
            </div>

            <div className="mt-5 space-y-4">
                {announcementsData.map((item) => (
                    <div
                        key={item.id}
                        className="rounded-2xl border border-zinc-800 bg-zinc-800/50 p-4 transition hover:border-zinc-700"
                    >
                        <h3 className="text-base font-semibold text-yellow-400">
                            {item.title}
                        </h3>
                        <p className="mt-2 text-sm leading-relaxed text-zinc-300">
                            {item.message}
                        </p>
                    </div>
                ))}
            </div>
        </Panel>
    );
}
