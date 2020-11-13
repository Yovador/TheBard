class ElementInfo {
  constructor(imgPath, elementName, elementSub, viewId, elementDesc, list){
    this.imgPath = imgPath;
    this.elementName = elementName;
    this.elementSub = elementSub;
    this.viewId = viewId;
    this.elementDesc = elementDesc;
    this.list = list;
  }
}

export default ElementInfo

/*////////////GAME////////////*/

export const persona3 = new         ElementInfo('https://tinyurl.com/yyb8cyov', 'Persona 3', '2006', 'persona3', 'BABYBABYBABYBABY')
export const persona4 = new         ElementInfo('https://tinyurl.com/yy5rp2yr', 'Persona 4', '2008', 'persona4', 'The yellow one')
export const persona5 = new         ElementInfo('https://tinyurl.com/y6detf92', 'Persona 5', '2016', 'persona5', 'WOW LOOKING COOL JOKER')
export const celeste = new          ElementInfo('https://tinyurl.com/y5lwbemf', 'Celeste', '2018', 'celeste', '410ème Forsaken City BABY')
export const supermarioworld = new  ElementInfo('https://tinyurl.com/y47s2y95', 'Super Mario World', '1990', 'supermarioworld', 'HERE WE GOOOOOOOOO')
export const hotlinemiami = new     ElementInfo('https://tinyurl.com/y3zmkdyb', 'Hotline Miami', '2012', 'hotlinemiami', 'The pew pew one')

////////////////////////////////
/*///////////LICENSE//////////*/

const personaGameList= [persona3, persona4, persona5, persona3, persona4, persona5, persona3, persona4, persona5, persona3, persona4, persona5]

export const persona = new          ElementInfo('https://tinyurl.com/yyad2c6c', 'Persona', 'Atlus', 'persona', 'I am thou... Thou art I...', personaGameList)
export const yakuza = new           ElementInfo('https://tinyurl.com/y22rrkxa', 'Yakuza', 'Ryu Ga Gotoku Studio', 'yakuza', 'Dame da ne')
export const darksouls = new        ElementInfo('https://tinyurl.com/y3syzu7y', 'Dark Souls', 'From Software', 'darksouls', 'Humanity Restored')

export const atlus = new            ElementInfo('https://tinyurl.com/yy7ngz2l', 'Atlus','Dev' ,'atlus', 'Megami Tensei, Shin Megami Tensei, Shin Megami Tensei Persona, etc', personaGameList)
export const ryuga = new            ElementInfo('https://tinyurl.com/y3anv7fv', 'Ryu ga gotoku Studio','Dev', 'ryuga', 'The Yakuza way')
export const fromsoftware = new     ElementInfo('https://tinyurl.com/y5maupq2', 'From Software','Dev', 'fromsoftware', 'You gonna die')

export const sega = new             ElementInfo('https://tinyurl.com/yynth8aw', 'SEGA', 'Editeur', 'sega', "C'est plus fort que toi", personaGameList)
export const sony = new             ElementInfo('https://tinyurl.com/y3uorww4', 'Sony', 'Editeur', 'sony', "Playstation and stuff")
export const nintendo = new         ElementInfo('https://tinyurl.com/y4u7qt8g', 'Nintendo', 'Editeur','nintendo', 'Mama mia')

export const ps2 = new              ElementInfo('https://tinyurl.com/hxe22pv', 'Playstation 2', '2000', 'ps2', "Dualshock go brrrr", personaGameList)
export const nswitch = new          ElementInfo('https://tinyurl.com/y2cuupe7', 'Switch', '2017', 'switch', "Joycon drift baby")
export const ps3 = new              ElementInfo('https://tinyurl.com/y5s2q2n2', 'Playstation 3', '2006','ps3', 'Dualshock, le retour')

export const smeguro = new          ElementInfo('https://tinyurl.com/y47x23lj', 'Shoji Meguro', 'Compositeur', 'smeguro', "The persona music guy", personaGameList)
export const hshoji = new           ElementInfo('https://tinyurl.com/yyhdytfc', 'Hidenori Shoji', 'Compositeur', 'hshoji', "Yakuza composer")
export const linaizumi = new        ElementInfo('https://tinyurl.com/yywzoy39', 'Lyn Inaizumi', 'Chanteuse','linaizumi', 'YOU NEVER SEE IT COMING')