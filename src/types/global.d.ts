export {};

declare global{
   module '*.png'
   module '*.jpg'
//    forca qualquer celular rodar o png

type PokemonType = {
    type:{
        name: string,
        url: string
    }
}
type Pokemon = {
        id?: number,
        name: string,
        url:string,
        types?: PokemonType[]
    
}

}
