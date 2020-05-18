import Teoria from 'teoria';

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

export const INTERVAL_INFO = {
    m2: {
        friendlyName: 'Minor 2nd',
        layoutClassName: 'minor2',
    },
    M2: {
        friendlyName: 'Major 2nd',
        layoutClassName: 'major2',
    },
    m3: {
        friendlyName: 'Minor 3rd',
        layoutClassName: 'minor3',
    },
    M3: {
        friendlyName: 'Major 3rd',
        layoutClassName: 'major3',
    },
    P4: {
        friendlyName: 'Perfect 4th',
        layoutClassName: 'perfect4',
    },
    d5: {
        friendlyName: 'Diminished 5th',
        layoutClassName: 'diminished5',
    },
    P5: {
        friendlyName: 'Perfect 5th',
        layoutClassName: 'perfect5',
    },
    m6: {
        friendlyName: 'Minor 6th',
        layoutClassName: 'minor6',
    },
    M6: {
        friendlyName: 'Major 6th',
        layoutClassName: 'major6',
    },
    m7: {
        friendlyName: 'Minor 7th',
        layoutClassName: 'minor7',
    },
    M7: {
        friendlyName: 'Major 7th',
        layoutClassName: 'major7',
    },
}

export const POSSIBLE_INTERVALS = Object.keys(INTERVAL_INFO)

export function getRandomInterval() {
    return POSSIBLE_INTERVALS[getRandomInt(POSSIBLE_INTERVALS.length)]
}

/* Returns a random note name between C4 and C5 inclusive
*/
export function getRandomNoteInOctaveAbove(bottomNoteName) {
    // Doing this a silly way:  choose bottom note and add a random interval to it
    const topNote = Teoria.interval(
        Teoria.note(bottomNoteName), Teoria.interval(getRandomInterval()),
    )
    return topNote.name() + topNote.accidental() + topNote.octave()
}
