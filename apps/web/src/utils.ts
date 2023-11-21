export async function getArtists() {
  const artists: { name: string }[] = await fetch(
    "https://supersonic.software/music/.cal/meta/artists.json",
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  ).then((res) => res.json());
  return artists
    .filter((artist) => !artist.name.startsWith(".cal"))
    .sort((a, b) => (a.name > b.name ? 1 : -1))
    .map((artist) => artist.name);
}

export async function getAlbums(artist: string) {
  const albums: { name: string }[] = await fetch(
    `https://supersonic.software/music/.cal/albums/${artist}_albums.json`,
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  ).then((res) => res.json());
  return albums
    .filter((album) => !album.name.startsWith(".cal"))
    .sort((a, b) => (a.name > b.name ? 1 : -1))
    .map((album) => album.name);
}

export async function getSongs(artist: string, album: string) {
  const songs: { name: string; path: string }[] = await fetch(
    `https://supersonic.software/music/.cal/songs/${artist}_${album}_songs.json`,
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  ).then((res) => res.json());
  return songs
    .filter((song) => !song.path.startsWith(".cal"))
    .sort((a, b) => (a.name > b.name ? 1 : -1));
}

export async function getSong(artist: string, album: string, songPath: string) {
  return (await getSongs(artist, album)).find((song) => song.path === songPath);
}
