export function validateSongToQueue(queuedSongs, song, maxQueueLength) {
    const lastSong = queuedSongs[queuedSongs.length - 1]

    if (
        lastSong &&
        lastSong.title === song.title &&
        lastSong.artist === song.artist
    ) {
        return {
        canAdd: false,
        message: "Esa canción ya está al final de la cola",
        }
    }

    const songAlreadyQueued = queuedSongs.some(
        (queuedSong) =>
        queuedSong.title === song.title &&
        queuedSong.artist === song.artist
    )

    if (songAlreadyQueued) {
        return {
        canAdd: false,
        message: "Esa canción ya está en la cola",
        }
    }

    if (queuedSongs.length >= maxQueueLength) {
        return {
        canAdd: false,
        message: "La cola está llena",
        }
    }

    return {
        canAdd: true,
        message: "Canción agregada a la cola",
    }
}