export type NoteProps = {
    text: string,
    priority? : 'high' | 'medium' | 'low'
}

export type NoteType = {
    id: string,
    text: string,
    priority : 'high' | 'medium' | 'low'
}