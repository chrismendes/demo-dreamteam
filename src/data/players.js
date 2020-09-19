import images from './images';

const players = [
	{
		"id": 1,
		"name": "Bernd Leno",
		"club": "Arsenal",
		"position": "GK",
		"photo": { 'large': images.players['1'].large, 'small': images.players['1'].small }
	},
	{
		"id": 2,
		"name": "Willian",
		"club": "Arsenal",
		"position": "MID",
		"photo": { 'large': images.players['2'].large, 'small': images.players['2'].small }
	},
	{
		"id": 3,
		"name": "Granit Xhaka",
		"club": "Arsenal",
		"position": "MID",
		"photo": { 'large': images.players['4'].large, 'small': images.players['4'].small }
	},
	{
		"id": 4,
		"name": "Héctor Bellerín",
		"club": "Arsenal",
		"position": "DEF",
		"photo": { 'large': images.players['5'].large, 'small': images.players['5'].small }
	},
	{
		"id": 5,
		"name": "Kieran Tierney",
		"club": "Arsenal",
		"position": "DEF",
		"photo": { 'large': images.players['6'].large, 'small': images.players['6'].small }
	},
	{
		"id": 6,
		"name": "Gabriel Magalhães",
		"club": "Arsenal",
		"position": "DEF",
		"photo": { 'large': images.players['3'].large, 'small': images.players['3'].small }
	},
	{
		"id": 7,
		"name": "Mesut Ozil",
		"club": "Arsenal",
		"position": "MID",
		"photo": { 'large': images.players['7'].large, 'small': images.players['7'].small }
	},
	{
		"id": 8,
		"name": "Pierre-Emerick Aubameyang",
		"club": "Arsenal",
		"position": "FWD",
		"photo": { 'large': images.players['8'].large, 'small': images.players['8'].small }
	},
	{
		"id": 9,
		"name": "Jack Grealish",
		"club": "Aston Villa",
		"position": "MID",
		"photo": { 'large': images.players['9'].large, 'small': images.players['9'].small }
	},
	{
		"id": 10,
		"name": "Christian Pulisic",
		"club": "Chelsea",
		"position": "MID",
		"photo": { 'large': images.players['10'].large, 'small': images.players['10'].small }
	},
	{
		"id": 11,
		"name": "César Azpilicueta",
		"club": "Chelsea",
		"position": "DEF",
		"photo": { 'large': images.players['11'].large, 'small': images.players['11'].small }
	},
	{
		"id": 12,
		"name": "Kepa Arrizabalaga",
		"club": "Chelsea",
		"position": "GK",
		"photo": { 'large': images.players['12'].large, 'small': images.players['12'].small }
	},
	{
		"id": 13,
		"name": "Thiago Silva",
		"club": "Chelsea",
		"position": "DEF",
		"photo": { 'large': images.players['13'].large, 'small': images.players['13'].small }
	},
	{
		"id": 14,
		"name": "N'Golo Kanté",
		"club": "Chelsea",
		"position": "MID",
		"photo": { 'large': images.players['14'].large, 'small': images.players['14'].small }
	},
	{
		"id": 15,
		"name": "Tammy Abraham",
		"club": "Chelsea",
		"position": "FWD",
		"photo": { 'large': images.players['15'].large, 'small': images.players['15'].small }
	},
	{
		"id": 16,
		"name": "Olivier Giroud",
		"club": "Chelsea",
		"position": "FWD",
		"photo": { 'large': images.players['45'].large, 'small': images.players['45'].small }
	},
	{
		"id": 17,
		"name": "Patrick van Aanholt",
		"club": "Crystal Palace",
		"position": "DEF",
		"photo": { 'large': images.players['16'].large, 'small': images.players['16'].small }
	},
	{
		"id": 18,
		"name": "Vicente Guaita",
		"club": "Crystal Palace",
		"position": "GK",
		"photo": { 'large': images.players['17'].large, 'small': images.players['17'].small }
	},
	{
		"id": 19,
		"name": "Wilfried Zaha",
		"club": "Crystal Palace",
		"position": "FWD",
		"photo": { 'large': images.players['18'].large, 'small': images.players['18'].small }
	},
	{
		"id": 20,
		"name": "André Gomes",
		"club": "Everton",
		"position": "MID",
		"photo": { 'large': images.players['19'].large, 'small': images.players['19'].small }
	},
	{
		"id": 21,
		"name": "Dominic Calvert-Lewin",
		"club": "Everton",
		"position": "FWD",
		"photo": { 'large': images.players['20'].large, 'small': images.players['20'].small }
	},
	{
		"id": 22,
		"name": "Gylfi Sigurdsson",
		"club": "Everton",
		"position": "MID",
		"photo": { 'large': images.players['21'].large, 'small': images.players['21'].small }
	},
	{
		"id": 23,
		"name": "Jordan Pickford",
		"club": "Everton",
		"position": "GK",
		"photo": { 'large': images.players['22'].large, 'small': images.players['22'].small }
	},
	{
		"id": 24,
		"name": "Lucas Digne",
		"club": "Everton",
		"position": "DEF",
		"photo": { 'large': images.players['23'].large, 'small': images.players['23'].small }
	},
	{
		"id": 25,
		"name": "James Maddison",
		"club": "Leicester City",
		"position": "MID",
		"photo": { 'large': images.players['25'].large, 'small': images.players['25'].small }
	},
	{
		"id": 26,
		"name": "Jamie Vardy",
		"club": "Leicester City",
		"position": "FWD",
		"photo": { 'large': images.players['26'].large, 'small': images.players['26'].small }
	},
	{
		"id": 27,
		"name": "Kasper Schmeichel",
		"club": "Leicester City",
		"position": "GK",
		"photo": { 'large': images.players['28'].large, 'small': images.players['28'].small }
	},
	{
		"id": 28,
		"name": "Çaglar Söyüncü",
		"club": "Leicester City",
		"position": "DEF",
		"photo": { 'large': images.players['29'].large, 'small': images.players['29'].small }
	},
	{
		"id": 29,
		"name": "Alisson",
		"club": "Liverpool",
		"position": "GK",
		"photo": { 'large': images.players['30'].large, 'small': images.players['30'].small }
	},
	{
		"id": 30,
		"name": "Andrew Robertson",
		"club": "Liverpool",
		"position": "DEF",
		"photo": { 'large': images.players['27'].large, 'small': images.players['27'].small }
	},
	{
		"id": 31,
		"name": "Fabinho",
		"club": "Liverpool",
		"position": "MID",
		"photo": { 'large': images.players['31'].large, 'small': images.players['31'].small }
	},
	{
		"id": 32,
		"name": "Jordan Henderson",
		"club": "Liverpool",
		"position": "MID",
		"photo": { 'large': images.players['33'].large, 'small': images.players['33'].small }
	},
	{
		"id": 33,
		"name": "Mohamed Salah",
		"club": "Liverpool",
		"position": "FWD",
		"photo": { 'large': images.players['34'].large, 'small': images.players['34'].small }
	},
	{
		"id": 34,
		"name": "Sadio Mané",
		"club": "Liverpool",
		"position": "FWD",
		"photo": { 'large': images.players['35'].large, 'small': images.players['35'].small }
	},
	{
		"id": 35,
		"name": "Trent Alexander-Arnold",
		"club": "Liverpool",
		"position": "DEF",
		"photo": { 'large': images.players['36'].large, 'small': images.players['36'].small }
	},
	{
		"id": 36,
		"name": "Virgil van Dijk",
		"club": "Liverpool",
		"position": "DEF",
		"photo": { 'large': images.players['37'].large, 'small': images.players['37'].small }
	},
	{
		"id": 37,
		"name": "Thiago Alcântara",
		"club": "Liverpool",
		"position": "MID",
		"photo": { 'large': images.players['38'].large, 'small': images.players['38'].small }
	},
	{
		"id": 38,
		"name": "Ederson",
		"club": "Manchester City",
		"position": "GK",
		"photo": { 'large': images.players['39'].large, 'small': images.players['39'].small }
	},
	{
		"id": 39,
		"name": "Gabriel Jesus",
		"club": "Manchester City",
		"position": "FWD",
		"photo": { 'large': images.players['40'].large, 'small': images.players['40'].small }
	},
	{
		"id": 40,
		"name": "Bernardo Silva",
		"club": "Manchester City",
		"position": "MID",
		"photo": { 'large': images.players['24'].large, 'small': images.players['24'].small }
	},
	{
		"id": 41,
		"name": "Fernandinho",
		"club": "Manchester City",
		"position": "MID",
		"photo": { 'large': images.players['32'].large, 'small': images.players['32'].small }
	},
	{
		"id": 42,
		"name": "Kevin De Bruyne",
		"club": "Manchester City",
		"position": "MID",
		"photo": { 'large': images.players['41'].large, 'small': images.players['41'].small }
	},
	{
		"id": 43,
		"name": "Kyle Walker",
		"club": "Manchester City",
		"position": "DEF",
		"photo": { 'large': images.players['42'].large, 'small': images.players['42'].small }
	},
	{
		"id": 44,
		"name": "Nicolás Otamendi",
		"club": "Manchester City",
		"position": "DEF",
		"photo": { 'large': images.players['43'].large, 'small': images.players['43'].small }
	},
	{
		"id": 45,
		"name": "Raheem Sterling",
		"club": "Manchester City",
		"position": "FWD",
		"photo": { 'large': images.players['44'].large, 'small': images.players['44'].small }
	},
	{
		"id": 46,
		"name": "Sergio Agüero",
		"club": "Manchester City",
		"position": "FWD",
		"photo": { 'large': images.players['46'].large, 'small': images.players['46'].small }
	},
	{
		"id": 47,
		"name": "Anthony Martial",
		"club": "Manchester United",
		"position": "FWD",
		"photo": { 'large': images.players['47'].large, 'small': images.players['47'].small }
	},
	{
		"id": 48,
		"name": "Bruno Fernandes",
		"club": "Manchester United",
		"position": "MID",
		"photo": { 'large': images.players['48'].large, 'small': images.players['48'].small }
	},
	{
		"id": 49,
		"name": "David de Gea",
		"club": "Manchester United",
		"position": "GK",
		"photo": { 'large': images.players['49'].large, 'small': images.players['49'].small }
	},
	{
		"id": 50,
		"name": "Harry Maguire",
		"club": "Manchester United",
		"position": "DEF",
		"photo": { 'large': images.players['50'].large, 'small': images.players['50'].small }
	},
	{
		"id": 51,
		"name": "Marcus Rashford",
		"club": "Manchester United",
		"position": "FWD",
		"photo": { 'large': images.players['51'].large, 'small': images.players['51'].small }
	},
	{
		"id": 52,
		"name": "Paul Pogba",
		"club": "Manchester United",
		"position": "MID",
		"photo": { 'large': images.players['52'].large, 'small': images.players['52'].small }
	},
	{
		"id": 53,
		"name": "Victor Lindelöf",
		"club": "Manchester United",
		"position": "DEF",
		"photo": { 'large': images.players['53'].large, 'small': images.players['53'].small }
	},
	{
		"id": 54,
		"name": "Martin Dubravka",
		"club": "Newcastle United",
		"position": "GK",
		"photo": { 'large': images.players['54'].large, 'small': images.players['54'].small }
	},
	{
		"id": 55,
		"name": "Danny Ings",
		"club": "Southampton",
		"position": "FWD",
		"photo": { 'large': images.players['55'].large, 'small': images.players['55'].small }
	},
	{
		"id": 56,
		"name": "Dele Alli",
		"club": "Tottenham Hotspur",
		"position": "MID",
		"photo": { 'large': images.players['56'].large, 'small': images.players['56'].small }
	},
	{
		"id": 57,
		"name": "Harry Kane",
		"club": "Tottenham Hotspur",
		"position": "FWD",
		"photo": { 'large': images.players['57'].large, 'small': images.players['57'].small }
	},
	{
		"id": 58,
		"name": "Hugo Lloris",
		"club": "Tottenham Hotspur",
		"position": "GK",
		"photo": { 'large': images.players['58'].large, 'small': images.players['58'].small }
	},
	{
		"id": 59,
		"name": "Serge Aurier",
		"club": "Tottenham Hotspur",
		"position": "DEF",
		"photo": { 'large': images.players['59'].large, 'small': images.players['59'].small }
	},
	{
		"id": 60,
		"name": "Son Heung-Min",
		"club": "Tottenham Hotspur",
		"position": "FWD",
		"photo": { 'large': images.players['60'].large, 'small': images.players['60'].small }
	},
	{
		"id": 61,
		"name": "Toby Alderweireld",
		"club": "Tottenham Hotspur",
		"position": "DEF",
		"photo": { 'large': images.players['61'].large, 'small': images.players['61'].small }
	},
	{
		"id": 62,
		"name": "Ben Foster",
		"club": "Watford",
		"position": "GK",
		"photo": { 'large': images.players['62'].large, 'small': images.players['62'].small }
	},
	{
		"id": 63,
		"name": "Troy Deeney",
		"club": "Watford",
		"position": "FWD",
		"photo": { 'large': images.players['63'].large, 'small': images.players['63'].small }
	},
	{
		"id": 64,
		"name": "Conor Coady",
		"club": "Wolverhampton Wanderers",
		"position": "DEF",
		"photo": { 'large': images.players['64'].large, 'small': images.players['64'].small }
	},
	{
		"id": 65,
		"name": "Raúl Jiménez",
		"club": "Wolverhampton Wanderers",
		"position": "FWD",
		"photo": { 'large': images.players['65'].large, 'small': images.players['65'].small }
	},
	{
		"id": 66,
		"name": "Rui Patrício",
		"club": "Wolverhampton Wanderers",
		"position": "GK",
		"photo": { 'large': images.players['66'].large, 'small': images.players['66'].small }
	}
];

export default players;
