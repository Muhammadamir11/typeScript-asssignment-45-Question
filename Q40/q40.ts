/* function make_album(artistName:string, albumTitle:string){
    let music_album = {
        singerName : artistName,
        titleOfAlbum : albumTitle
    }
    return music_album;
} */

function make_album(artistName:string, albumTitle:string, albumTracks?:number){
    let music_album = {
        singerName : artistName,
        titleOfAlbum : albumTitle,
        noOfTracks : albumTracks
    }
    return music_album;
}

let album1 = make_album("abc","xyz");
console.log("album1: ",album1);
let album2 = make_album("def","qwe");
console.log("album2: ",album2);
let album3 = make_album("ghi","tyu",3);
console.log("album3: ",album3);