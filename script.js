/* DECLARE VARIABLES - selectors, object, working values */

//selectors
const contentArea = document.getElementById("content-area");
const randomizeButton = document.getElementById("randomize-button");
const gnButton = document.getElementById("gn-button");

//objects
const prefix = {
  1: {
  female: "Akor",
  male: "Alak",
  gn: "",
  meaning: "Beloved, best, first"
  },
  2: {
  female: "Alaun",
  male: "Alton",
  gn: "",
  meaning: "Lightning, powerful"
  },
  3: {
  female: "Aly",
  male: "Kel",
  gn: "",
  meaning: "Legendary, singing, song"
  },
  4: {
  female: "Ang",
  male: "Adin",
  gn: "",
  meaning: "Beast, monstrous, savage"
  },
  5: {
  female: "Ardul",
  male: "Amal",
  gn: "",
  meaning: "Blessed, divine, godly"
  },
  6: {
  female: "Aun",
  male: "Ant",
  gn: "",
  meaning: "Crypt, dead, deadly, death"
  },
  7: {
  female: "Bae",
  male: "Bar",
  gn: "",
  meaning: "Fate, fated, luck, lucky"
  },
  8: {
  female: "Bal",
  male: "Bel",
  gn: "",
  meaning: "Burned, burning, fire, flame"
  },
  9: {
  female: "Belar",
  male: "Bruh",
  gn: "",
  meaning: "Arrow, lance, pierced"
  },
  10: {
  female: "Briz",
  male: "Berg",
  gn: "",
  meaning: "Graceful, fluid, water, wet"
  },
  11: {
  female: "Bur",
  male: "Bhin",
  gn: "",
  meaning: "Craft, crafty, sly"
  },
  12: {
  female: "Chal",
  male: "Chasz",
  gn: "",
  meaning: "Earth, stable"
  },
  13: {
  female: "Char",
  male: "Kron",
  gn: "",
  meaning: "Sick, venom, venomed"
  },
  14: {
  female: "Chess",
  male: "Cal",
  gn: "",
  meaning: "Noble, lady/lord"
  },
  15: {
  female: "",
  male: "",
  gn: "Dhaun",
  meaning: "Infested, plague"
  },
  16: {
  female: "Dil",
  male: "Dur",
  gn: "",
  meaning: "Cold, ice, still"
  },
  17: {
  female: "Dirz",
  male: "Div",
  gn: "",
  meaning: "Dream, dreaming, fantasy"
  },
  18: {
  female: "Dris",
  male: "Riz",
  gn: "",
  meaning: "Ash, dawn, east, eastern"
  },
  19: {
  female: "Eclave",
  male: "Elk",
  gn: "",
  meaning: "Chaos, mad, madness"
  },
  20: {
  female: "Elvan",
  male: "Kalan",
  gn: "",
  meaning: "Elf, elven, far, lost"
  },
  21: {
  female: "Elv",
  male: "Elaug",
  gn: "",
  meaning: "Drow, mage, power"
  },
  22: {
  female: "Erel",
  male: "Rhyl",
  gn: "",
  meaning: "Eye, moon, spy"
  },
  23: {
  female: "Ethe",
  male: "Erth",
  gn: "",
  meaning: "Mithril, resolute"
  },
  24: {
  female: "Faer",
  male: "Selds",
  gn: "",
  meaning: "Oath, sworn, vow"
  },
  25: {
  female: "Felyn",
  male: "Fil",
  gn: "",
  meaning: "Pale, thin, weak, white"
  },
  26: {
  female: "Filf",
  male: "Phar",
  gn: "",
  meaning: "Dwarf, Dwarven, treacherous"
  },
  27: {
  female: "Gauss",
  male: "Orgoll",
  gn: "",
  meaning: "Dread, fear, feared, vile"
  },
  28: {
  female: "",
  male: "",
  gn: "G’eld",
  meaning: "Friend, spider"
  },
  29: {
  female: "",
  male: "",
  gn: "Ghaun",
  meaning: "Accursed, curse, unlucky"
  },
  30: {
  female: "Gin",
  male: "Din",
  gn: "",
  meaning: "Berserk, berserker, orc, wild"
  },
  31: {
  female: "Grey",
  male: "Gul",
  gn: "",
  meaning: "Ghost, pale, unloving"
  },
  32: {
  female: "Hael",
  male: "Hatch",
  gn: "",
  meaning: "Marked, trail, way"
  },
  33: {
  female: "Hal",
  male: "Sol",
  gn: "",
  meaning: "Deft, nimble, spider"
  },
  34: {
  female: "Houn",
  male: "Rik",
  gn: "",
  meaning: "Magic, trail, way"
  },
  35: {
  female: "Iliv",
  male: "Dip",
  gn: "",
  meaning: "Liege, war, warrior"
  },
  36: {
  female: "",
  male: "",
  gn: "Ilm",
  meaning: "Life, living, spirit, soul"
  },
  37: {
  female: "Illiam",
  male: "Im",
  gn: "",
  meaning: "Devoted, heart, love"
  },
  38: {
  female: "In",
  male: "Sorn",
  gn: "",
  meaning: "Enchanted, spell"
  },
  39: {
  female: "",
  male: "",
  gn: "Ilph",
  meaning: "Emerald, green, lush, tree"
  },
  40: {
  female: "Irae",
  male: "Ilzt",
  gn: "",
  meaning: "Arcane, mystic, wizard"
  },
  41: {
  female: "Irr",
  male: "Izz",
  gn: "",
  meaning: "Hidden, mask, masked"
  },
  42: {
  female: "Iym",
  male: "Ist",
  gn: "",
  meaning: "Endless, immortal"
  },
  43: {
  female: "Jhan",
  male: "Duag",
  gn: "",
  meaning: "Shield, warded"
  },
  44: {
  female: "Jhael",
  male: "Gel",
  gn: "",
  meaning: "Ambitious, clan, kin, family"
  },
  45: {
  female: "Jhul",
  male: "Jar",
  gn: "",
  meaning: "Charmed, rune, symbol"
  },
  46: {
  female: "Jys",
  male: "Driz",
  gn: "",
  meaning: "Hard, steel, unyielding"
  },
  47: {
  female: "Lael",
  male: "Llt",
  gn: "",
  meaning: "Iron, west, western"
  },
  48: {
  female: "Lar",
  male: "Les",
  gn: "",
  meaning: "Binding, bound, law, lawful"
  },
  49: {
  female: "LiNeeer",
  male: "Mourn",
  gn: "",
  meaning: "Legend, legendary, mythical"
  },
  50: {
  female: "Lird",
  male: "Ryld",
  gn: "",
  meaning: "Brand, branded, owned, slave"
  },
  51: {
  female: "Lua",
  male: "Lyme",
  gn: "",
  meaning: "Bright, crystal, light"
  },
  52: {
  female: "Mal",
  male: "Malag",
  gn: "",
  meaning: "Mystery, secret"
  },
  53: {
  female: "May",
  male: "Mas",
  gn: "",
  meaning: "Beautiful, beauty, silver"
  },
  54: {
  female: "",
  male: "",
  gn: "Micar",
  meaning: "Lost, poison, widow"
  },
  55: {
  female: "Min",
  male: "Ran",
  gn: "",
  meaning: "Lesser, minor, second"
  },
  56: {
  female: "Mol",
  male: "Go",
  gn: "",
  meaning: "Blue, storm, thunder, wind"
  },
  57: {
  female: "Myr",
  male: "Nym",
  gn: "",
  meaning: "Lost, skeleton, skull"
  },
  58: {
  female: "Nath",
  male: "Mer",
  gn: "",
  meaning: "Doom, doomed, fate"
  },
  59: {
  female: "Ned",
  male: "Nad",
  gn: "",
  meaning: "Cunning, genius, mind, thought"
  },
  60: {
  female: "Nhil",
  male: "Nal",
  gn: "",
  meaning: "Fear, horrible, horror, outraged"
  },
  61: {
  female: "",
  male: "",
  gn: "Neer",
  meaning: "Core, root, strong"
  },
  62: {
  female: "Null",
  male: "Nil",
  gn: "",
  meaning: "Sad, tear, weeping"
  },
  63: {
  female: "Olor",
  male: "Omar",
  gn: "",
  meaning: "Skin, tattoo, tattooed"
  },
  64: {
  female: "Pellan",
  male: "Relon",
  gn: "",
  meaning: "North, platinum, wind"
  },
  65: {
  female: "Phaer",
  male: "Vorn",
  gn: "",
  meaning: "Honour, honoured"
  },
  66: {
  female: "Phyr",
  male: "Phyx",
  gn: "",
  meaning: "Bless, blessed, blessing"
  },
  67: {
  female: "Qualn",
  male: "Quil",
  gn: "",
  meaning: "Mighty, ocean, sea"
  },
  68: {
  female: "",
  male: "",
  gn: "Quar",
  meaning: "Aged, eternal, time"
  },
  69: {
  female: "Quav",
  male: "Quev",
  gn: "",
  meaning: "Charmed, docile, friend"
  },
  70: {
  female: "Qil",
  male: "Quil",
  gn: "",
  meaning: "Foe, goblin, slave"
  },
  71: {
  female: "Rauv",
  male: "Welv",
  gn: "",
  meaning: "Cave, rock, stone"
  },
  72: {
  female: "Ril",
  male: "Ryl",
  gn: "",
  meaning: "Foretold, omen"
  },
  73: {
  female: "Sabal",
  male: "Szor",
  gn: "",
  meaning: "Amber, yellow"
  },
  74: {
  female: "Sab",
  male: "Tsab",
  gn: "",
  meaning: "Abyss, empty, void"
  },
  75: {
  female: "Shi`n",
  male: "Kren",
  gn: "",
  meaning: "Fool, foolish, young"
  },
  76: {
  female: "Shri",
  male: "Ssz",
  gn: "",
  meaning: "Silk, silent"
  },
  77: {
  female: "Shur",
  male: "Shar",
  gn: "",
  meaning: "Dagger, edge, stiletto"
  },
  78: {
  female: "",
  male: "",
  gn: "Shynt",
  meaning: "Invisible, skilled, unseen"
  },
  79: {
  female: "Sin",
  male: "Szin",
  gn: "",
  meaning: "Festival, joy, pleasure"
  },
  80: {
  female: "Ssap",
  male: "That",
  gn: "",
  meaning: "Blue, midnight, night"
  },
  81: {
  female: "Susp",
  male: "Spir",
  gn: "",
  meaning: "Learned, skilled, wise"
  },
  82: {
  female: "Talab",
  male: "Tluth",
  gn: "",
  meaning: "Burn, burning, fire"
  },
  83: {
  female: "Tal",
  male: "Tar",
  gn: "",
  meaning: "Love, pain, wound, wounded"
  },
  84: {
  female: "Triel",
  male: "Taz",
  gn: "",
  meaning: "Bat, winged"
  },
  85: {
  female: "T’riss",
  male: "Teb",
  gn: "",
  meaning: "Blade, sharp, sword"
  },
  86: {
  female: "Ulviir",
  male: "Uhls",
  gn: "",
  meaning: "Gold, golden, treasure"
  },
  87: {
  female: "Umrae",
  male: "Hurz",
  gn: "",
  meaning: "Faith, faithful, true"
  },
  88: {
  female: "Vas",
  male: "Vesz",
  gn: "",
  meaning: "Blood, body, flesh"
  },
  89: {
  female: "",
  male: "",
  gn: "Vic",
  meaning: "Abyss, deep, profound"
  },
  90: {
  female: "Vier",
  male: "Val",
  gn: "",
  meaning: "Black, dark, darkness"
  },
  91: {
  female: "Vlon",
  male: "Wod",
  gn: "",
  meaning: "Bold, hero, heroic"
  },
  92: {
  female: "Waer",
  male: "Wehl",
  gn: "",
  meaning: "Deep, hidden, south, southern"
  },
  93: {
  female: "Wuyon",
  male: "Wruz",
  gn: "",
  meaning: "Humble, third, trivial"
  },
  94: {
  female: "Xull",
  male: "Url",
  gn: "",
  meaning: "Blooded, crimson, ruby"
  },
  95: {
  female: "",
  male: "",
  gn: "Xun",
  meaning: "Demon, fiend, fiendish"
  },
  96: {
  female: "Yas",
  male: "Yaz",
  gn: "",
  meaning: "Riddle, spinning, thread, web"
  },
  97: {
  female: "Zar",
  male: "Zakn",
  gn: "",
  meaning: "Dusk, haunted, shadow"
  },
  98: {
  female: "Zebey",
  male: "Zek",
  gn: "",
  meaning: "Dragon, lithe, rage, wyrm"
  },
  99: {
  female: "Zes",
  male: "Zez",
  gn: "",
  meaning: "Ancient, elder, respected"
  },
  100: {
  female: "Zilv",
  male: "Vuz",
  gn: "",
  meaning: "Forgotten, old, unknown"
  },
}

const suffix = {
  1: {
  female: "a",
  male: "agh",
  gn: "",
  meaning: "Breaker, destruction, end, omega"
  },
  2: {
  female: "ace",
  male: "as",
  gn: "",
  meaning: "Savant, scholar, wizard"
  },
  3: {
  female: "ae",
  male: "aun",
  gn: "",
  meaning: "Dance, dancer, life, player"
  },
  4: {
  female: "aere",
  male: "d",
  gn: "",
  meaning: "Blood, blood of, heir"
  },
  5: {
  female: "afae",
  male: "afein",
  gn: "",
  meaning: "Bane, executioner, slayer"
  },
  6: {
  female: "afay",
  male: "aufein",
  gn: "",
  meaning: "Eyes, eyes of, seeress}seer"
  },
  7: {
  female: "ala",
  male: "launim",
  gn: "",
  meaning: "Healer, priestess}priest"
  },
  8: {
  female: "anna",
  male: "erin",
  gn: "",
  meaning: "Advisor, counsellor to"
  },
  9: {
  female: "arra",
  male: "atar",
  gn: "",
  meaning: "Queen}prince, queen of}prince of"
  },
  10: {
  female: "",
  male: "",
  gn: "aste",
  meaning: "Bearer, keeper, slaver"
  },
  11: {
  female: "avin",
  male: "aonar",
  gn: "",
  meaning: "Guardian, guard, shield"
  },
  12: {
  female: "ayne",
  male: "al",
  gn: "",
  meaning: "Lunatic, maniac, manic, rage"
  },
  13: {
  female: "baste",
  male: "gloth",
  gn: "",
  meaning: "Path, walker"
  },
  14: {
  female: "breena",
  male: "antar",
  gn: "",
  meaning: "Matriarch}patriarch, ruler"
  },
  15: {
  female: "bryn",
  male: "lyn",
  gn: "",
  meaning: "Agent, assassin, killer"
  },
  16: {
  female: "cice",
  male: "roos",
  gn: "",
  meaning: "Born of, Child, young"
  },
  17: {
  female: "cyrl",
  male: "axle",
  gn: "",
  meaning: "Ally, companion, friend"
  },
  18: {
  female: "da",
  male: "daer",
  gn: "",
  meaning: "Illusionist, trickster"
  },
  19: {
  female: "dia",
  male: "drin",
  gn: "",
  meaning: "Rogue, stealer"
  },
  20: {
  female: "diira",
  male: "diirn",
  gn: "",
  meaning: "Initiate, sister}brother"
  },
  21: {
  female: "dra",
  male: "zar",
  gn: "",
  meaning: "Lover, match, mate"
  },
  22: {
  female: "driira",
  male: "driirn",
  gn: "",
  meaning: "Mother}father, teacher"
  },
  23: {
  female: "dril",
  male: "dorl",
  gn: "",
  meaning: "Knight, sword, warrior"
  },
  24: {
  female: "",
  male: "",
  gn: "e",
  meaning: "Servant, slave, vassal"
  },
  25: {
  female: "eari",
  male: "erd",
  gn: "",
  meaning: "Giver, god, patron"
  },
  26: {
  female: "",
  male: "",
  gn: "eyl",
  meaning: "Archer, arrow, flight, flyer"
  },
  27: {
  female: "ffyn",
  male: "fein",
  gn: "",
  meaning: "Minstrel, singer, song"
  },
  28: {
  female: "",
  male: "",
  gn: "fryn",
  meaning: "Champion, victor, weapon, weapon of"
  },
  29: {
  female: "iara",
  male: "ica",
  gn: "",
  meaning: "Baron, duke, lady}lord"
  },
  30: {
  female: "ice",
  male: "eth",
  gn: "",
  meaning: "Obsession, taker, taken"
  },
  31: {
  female: "idil",
  male: "imar",
  gn: "",
  meaning: "Alpha, beginning, creator of, maker"
  },
  32: {
  female: "iira",
  male: "inid",
  gn: "",
  meaning: "Harbinger, herald"
  },
  33: {
  female: "",
  male: "",
  gn: "inidia",
  meaning: "Secret, wall, warder"
  },
  34: {
  female: "inil",
  male: "in",
  gn: "",
  meaning: "Lady}lord, rider, steed"
  },
  35: {
  female: "",
  male: "",
  gn: "intra",
  meaning: "Envoy, messenger, prophet"
  },
  36: {
  female: "isstra",
  male: "atlab",
  gn: "",
  meaning: "Acolyte, apprentice, student"
  },
  37: {
  female: "ithra",
  male: "irahc",
  gn: "",
  meaning: "Dragon, serpent, wyrm"
  },
  38: {
  female: "jra",
  male: "gos",
  gn: "",
  meaning: "Beast, biter, stinger"
  },
  39: {
  female: "",
  male: "",
  gn: "jss",
  meaning: "Scout, stalker"
  },
  40: {
  female: "kacha",
  male: "kah",
  gn: "",
  meaning: "Beauty, hair, style"
  },
  41: {
  female: "kiira",
  male: "raen",
  gn: "",
  meaning: "Apostle, disciple"
  },
  42: {
  female: "lay",
  male: "dyn",
  gn: "",
  meaning: "Flight, flyer, wing, wings"
  },
  43: {
  female: "lara",
  male: "aghar",
  gn: "",
  meaning: "Cynic, death, end, victim"
  },
  44: {
  female: "",
  male: "",
  gn: "lin",
  meaning: "Arm, armour, commander"
  },
  45: {
  female: "",
  male: "",
  gn: "lochar",
  meaning: "Messenger, spider"
  },
  46: {
  female: "mice",
  male: "myr",
  gn: "",
  meaning: "Bone, bones, necromancer, witch"
  },
  47: {
  female: "",
  male: "",
  gn: "mur’ss",
  meaning: "Shadow, spy, witness"
  },
  48: {
  female: "na",
  male: "nar",
  gn: "",
  meaning: "Adept, ghost, spirit"
  },
  49: {
  female: "nilee",
  male: "olil",
  gn: "",
  meaning: "Corpse, disease, ravager"
  },
  50: {
  female: "niss",
  male: "nozz",
  gn: "",
  meaning: "Chance, gambler, game"
  },
  51: {
  female: "nitra",
  male: "net",
  gn: "",
  meaning: "Kicker, returned, risen"
  },
  52: {
  female: "",
  male: "",
  gn: "nolu",
  meaning: "Art, artist, expert, treasure"
  },
  53: {
  female: "",
  male: "",
  gn: "olin",
  meaning: "Ascension, love, lover, lust"
  },
  54: {
  female: "onia",
  male: "onim",
  gn: "",
  meaning: "Rod, staff, token, wand"
  },
  55: {
  female: "oyss",
  male: "omph",
  gn: "",
  meaning: "Binder, judge, law, prison"
  },
  56: {
  female: "",
  male: "",
  gn: "qualyn",
  meaning: "Ally, caller, kin"
  },
  57: {
  female: "quarra",
  male: "net",
  gn: "",
  meaning: "Horde, host, legion"
  },
  58: {
  female: "quiri",
  male: "oj",
  gn: "",
  meaning: "Aura, cloak, hide, skin"
  },
  59: {
  female: "ra",
  male: "or",
  gn: "",
  meaning: "Fool, game, prey, quarry"
  },
  60: {
  female: "rae",
  male: "rar",
  gn: "",
  meaning: "Secret, seeker, quest"
  },
  61: {
  female: "raema",
  male: "orvir",
  gn: "",
  meaning: "Crafter, fist, hand"
  },
  62: {
  female: "raena",
  male: "olvir",
  gn: "",
  meaning: "Center, haven, home"
  },
  63: {
  female: "riia",
  male: "rak",
  gn: "",
  meaning: "Chaos, storm, tempest"
  },
  64: {
  female: "",
  male: "",
  gn: "ril",
  meaning: "Bandit, enemy, raider, outlaw"
  },
  65: {
  female: "riina",
  male: "ree",
  gn: "",
  meaning: "Enchanter, mage, spellcaster"
  },
  66: {
  female: "ryna",
  male: "oyn",
  gn: "",
  meaning: "Follower, hired, mercenary"
  },
  67: {
  female: "ryne",
  male: "ryn",
  gn: "",
  meaning: "Blooded, elder, experienced"
  },
  68: {
  female: "shalee",
  male: "ral",
  gn: "",
  meaning: "Abjurer, gaze, watch, watcher"
  },
  69: {
  female: "ssysn",
  male: "rysn",
  gn: "",
  meaning: "Artifact, sorcerer, spell"
  },
  70: {
  female: "stin",
  male: "trin",
  gn: "",
  meaning: "Clan, house, merchant, of the house"
  },
  71: {
  female: "stra",
  male: "tran",
  gn: "",
  meaning: "Spider, spinner, weaver"
  },
  72: {
  female: "tana",
  male: "ton",
  gn: "",
  meaning: "Darkness, lurker, prowler"
  },
  73: {
  female: "thara",
  male: "tar",
  gn: "",
  meaning: "Glyph, marker, rune"
  },
  74: {
  female: "thrae",
  male: "olg",
  gn: "",
  meaning: "Charmer, leader, seducer"
  },
  75: {
  female: "tree",
  male: "tel",
  gn: "",
  meaning: "Exile, loner, outcast, pariah"
  },
  76: {
  female: "",
  male: "",
  gn: "tyrr",
  meaning: "Dagger, poison, poisoner, scorpion"
  },
  77: {
  female: "ual",
  male: "dan",
  gn: "",
  meaning: "Speed, strider"
  },
  78: {
  female: "ue",
  male: "dor",
  gn: "",
  meaning: "Arm, artisan, fingers"
  },
  79: {
  female: "uit",
  male: "dar",
  gn: "",
  meaning: "Breath, voice, word"
  },
  80: {
  female: "une",
  male: "dinn",
  gn: "",
  meaning: "Diviner, fate, future, oracle"
  },
  81: {
  female: "",
  male: "",
  gn: "uque",
  meaning: "Cavern, digger, mole, tunnel"
  },
  82: {
  female: "urra",
  male: "dax",
  gn: "",
  meaning: "Nomad, renegade, wanderer"
  },
  83: {
  female: "va",
  male: "ven",
  gn: "",
  meaning: "Comrade, honour, honoured"
  },
  84: {
  female: "",
  male: "",
  gn: "vayas",
  meaning: "Forge, forger, hammer, smith"
  },
  85: {
  female: "",
  male: "",
  gn: "vyll",
  meaning: "Punishment, scourge, whip, zealot"
  },
  86: {
  female: "vrae",
  male: "vyr",
  gn: "",
  meaning: "Mistress/master, overseer"
  },
  87: {
  female: "wae",
  male: "hrae",
  gn: "",
  meaning: "Heir, inheritor, princess"
  },
  88: {
  female: "wiira",
  male: "hriir",
  gn: "",
  meaning: "Seneschal of steward"
  },
  89: {
  female: "wyss",
  male: "hrys",
  gn: "",
  meaning: "Best, creator, starter"
  },
  90: {
  female: "xae",
  male: "zaer",
  gn: "",
  meaning: "Orb, rank, ruler, sceptre"
  },
  91: {
  female: "xena",
  male: "zen",
  gn: "",
  meaning: "Cutter, gem, jewel, jeweller"
  },
  92: {
  female: "xyra",
  male: "zyr",
  gn: "",
  meaning: "Sage, teller"
  },
  93: {
  female: "",
  male: "",
  gn: "yl",
  meaning: "Drow, woman/man"
  },
  94: {
  female: "ylene",
  male: "yln",
  gn: "",
  meaning: "Handmaiden/squire, maiden/youth"
  },
  95: {
  female: "ymma",
  male: "inyon",
  gn: "",
  meaning: "Drider, feet, foot, runner"
  },
  96: {
  female: "ynda",
  male: "yrd",
  gn: "",
  meaning: "Captain, custodian, marshal, ranger"
  },
  97: {
  female: "ynrae",
  male: "yraen",
  gn: "",
  meaning: "Heretic, reel, riot, void"
  },
  98: {
  female: "",
  male: "",
  gn: "vrae",
  meaning: "Architect, founder, mason"
  },
  99: {
  female: "",
  male: "",
  gn: "yrr",
  meaning: "Protector, rival, wielder"
  },
  100: {
  female: "zyne",
  male: "zt",
  gn: "",
  meaning: "Finder, hunter  "
  }
}

const gnPrefix = []
for (const prop in prefix) {
  if (prefix[prop].female === "") gnPrefix.push(prefix[prop]);
}

const gnSuffix = []
for (const prop in suffix) {
  if (suffix[prop].female === "") gnSuffix.push(suffix[prop]);
}


//working values
let numberOfNames = document.getElementById("number").value;

/* DECLARE FUNCTIONS */
function createTable(pre, suf) {
  let femaleName = getFemaleName(pre, suf);
  let maleName = getMaleName(pre, suf);

  let table = document.createElement("table");
  let caption = document.createElement("caption");
  let thead = document.createElement("thead");
  let tbody = document.createElement("tbody");

  if (!gnButton.classList.contains("selected")) {
    caption.textContent = `Female: ${femaleName} \u00A0 \u00A0|\u00A0 \u00A0 Male: ${maleName}`
  } else {
    caption.textContent = `Gender-neutral: ${pre.gn}${suf.gn}`
  }

  contentArea.appendChild(table);
  table.appendChild(caption);
  table.appendChild(thead);
  table.appendChild(tbody);

  let tableHeadings = document.createElement("tr");
  let fName = document.createElement("th");
  fName.textContent = "Female";
  let mName = document.createElement("th");
  mName.textContent = "Male";
  let gnName = document.createElement("th");
  gnName.textContent = "Gender-neutral";
  let meaning = document.createElement("th");
  meaning.textContent = "Meaning";

  thead.appendChild(tableHeadings);
  tableHeadings.appendChild(fName);
  tableHeadings.appendChild(mName);
  tableHeadings.appendChild(gnName);
  tableHeadings.appendChild(meaning);

  let prefixRow = document.createElement("tr");
  let preFName = document.createElement("td");
  preFName.textContent = pre.female;
  let preMName = document.createElement("td");
  preMName.textContent = pre.male;
  let preGnName = document.createElement("td");
  preGnName.textContent = pre.gn;
  let preMeaning = document.createElement("td");
  preMeaning.textContent = pre.meaning;

  tbody.appendChild(prefixRow);
  prefixRow.appendChild(preFName);
  prefixRow.appendChild(preMName);
  prefixRow.appendChild(preGnName);
  prefixRow.appendChild(preMeaning);

  let suffixRow = document.createElement("tr");
  let sufFName = document.createElement("td");
  sufFName.textContent = suf.female;
  let sufMName = document.createElement("td");
  sufMName.textContent = suf.male;
  let sufGnName = document.createElement("td");
  sufGnName.textContent = suf.gn;
  let sufMeaning = document.createElement("td");
  sufMeaning.textContent = suf.meaning;

  tbody.appendChild(suffixRow);
  suffixRow.appendChild(sufFName);
  suffixRow.appendChild(sufMName);
  suffixRow.appendChild(sufGnName);
  suffixRow.appendChild(sufMeaning);
}

function randomizeNames() {
  contentArea.textContent = "";
  numberOfNames = document.getElementById("number").value;

  for (let i = 0; i < numberOfNames; i++) {
    if (!gnButton.classList.contains("selected")) {
      createTable(prefix[getNumber(100) + 1], suffix[getNumber(100) + 1]);
    } else {
      createTable(gnPrefix[getNumber(11)], gnSuffix[getNumber(21)]);
    }
  }
}

function getFemaleName(pre, suf) {
  let first = "";
  let last = "";

  if (pre.female !== "") {
    first = pre.female;
  } else {
    first = pre.gn;
  }

  if (suf.female !== "") {
    last = suf.female;
  } else {
    last = suf.gn;
  }

  return `${first}${last}`
}

function getMaleName(pre, suf) {
  let first = "";
  let last = "";

  if (pre.male !== "") {
    first = pre.male;
  } else {
    first = pre.gn;
  }

  if (suf.male !== "") {
    last = suf.male;
  } else {
    last = suf.gn;
  }

  return `${first}${last}`
}

function getNumber(num) {
  return Math.floor(Math.random() * num);
}

/* DECLARE EVENT HANDLERS */
randomizeButton.addEventListener("click", function () {
  randomizeNames();
})

gnButton.addEventListener("click", function() {
  if (!this.classList.contains("selected")) {
    this.classList.add("selected");
  } else {
    this.classList.remove("selected");
  }
})

/* DECLARE NAMESPACES */

/* SCRIPT */
randomizeNames();