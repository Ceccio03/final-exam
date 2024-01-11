export interface Country {
    name: Name
    capital: string[]
    region: string
    subregion: string
    population: number
    flags: Flags
}
export interface Name {
    common: string
    official: string
}

export interface Flags {
    png: string
    svg: string
    alt?: string
  }