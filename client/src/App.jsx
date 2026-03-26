import { useState } from "react";
import Header from "./components/Header";
import NowPlaying from "./components/NowPlayingCard";
import SearchSection from "./components/SearchSection";
import Announcements from "./components/AnnouncementsPanel";
import SurveyCard from "./components/SurveyCard";
import QueuePreview from "./components/QueuePreview";
import { initialQueue } from "./data/initialQueue";
import { currentTrackData } from "./data/currentTrack";
import { validateSongToQueue } from "./helpers/queueHelpers";
import MainLayout from "./layout/MainLayout";


export function App () {
    
    const [queuedSongs, setQueuedSongs] = useState(initialQueue)
    const [queueMessage, setQueueMessage] = useState("")

    const currentTrack = currentTrackData
    const MAX_QUEUE_LENGTH = 10

    function addSongToQueue(song) {
        const validation = validateSongToQueue(
            queuedSongs,
            song,
            MAX_QUEUE_LENGTH
        )

        setQueueMessage(validation.message)

        if(!validation.canAdd){
            return
        }

        const newSong = {
            ...song,
            id: Date.now(),
        }

        setQueuedSongs((prevSongs) => [...prevSongs, newSong])

    }

    function clearQueueMessage() {
        setQueueMessage("")
    }


    return (
        <MainLayout header={<Header/>}>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg: col-span-2 flex flex-col gap-6">
                    <NowPlaying track={currentTrack} />

                    <SearchSection
                        onAddSong={addSongToQueue}
                        queueMessage={queueMessage}
                        clearQueueMessage={clearQueueMessage} 
                    />

                    <QueuePreview queuedSongs={queuedSongs} />
                </div>

                <div className="flex flex-col gap-6">
                    <Announcements />
                    <SurveyCard />
                </div>
            </div>
        </MainLayout>
    );
}