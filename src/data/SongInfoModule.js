
class SongInfo {
    constructor(number ,name, artist, length){
        this.number = number;
        this.name = name;
        this.artist = artist;
        this.length = length;
    }
  }
  
  export default SongInfo
  
  const massdestruction = new SongInfo(1, 'Mass Destruction', 'Lotus Juice, Yumi Kawamura, Shoji Meguro', '3:29')
  const iwatodaidorm = new SongInfo(2, 'Iwatodai Dorm', 'Lotus Juice, Yumi Kawamura, Shoji Meguro', '2:31')
  const ariaofthesoul = new SongInfo(3 ,'Aria of the Soul', 'Lotus Juice, Yumi Kawamura, Shoji Meguro', '5:38')
  const burnmydread = new SongInfo(4, 'Burn My Dread', 'Lotus Juice, Yumi Kawamura, Shoji Meguro', '1:36')
  const whenthemoon = new SongInfo(5, 'When the Moon Reaches for the Stars', 'Lotus Juice, Yumi Kawamura, Shoji Meguro', '2:36')

  export const p3OST = [massdestruction, iwatodaidorm, ariaofthesoul, burnmydread, whenthemoon]