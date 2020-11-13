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
export const darksouls = new        ElementInfo('https://tinyurl.com/y5maupq2', 'Dark Souls', 'From Software', 'darksouls', 'Humanity Restored')



