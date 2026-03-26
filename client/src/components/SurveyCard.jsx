export default function SurveyCard() {
    return (
        <aside className="rounded-2xl border border-yellow-400/30 bg-yellow-500 text-black p-6 min-h-40 flex flex-col justify-between shadow-lg">
            <div>
                <p className="text-sm uppercase tracking-widest text-black/70">
                    Encuesta
                </p>

                <h3 className="mt-2 text-xl font-bold text-black">
                    Queremos conocer tu opinión
                </h3>

                <p className="mt-2 text-sm leading-relaxed text-black/80">
                    Responde una encuesta rápida y ayúdanos a mejorar la experiencia en el gimnasio.
                </p>
            </div>

            <button className="mt-4 w-fit rounded-xl bg-black px-5 py-2.5 text-sm font-semibold text-yellow-400 transition hover:bg-zinc-900">
                Responder encuesta
            </button>
        </aside>
    )
}