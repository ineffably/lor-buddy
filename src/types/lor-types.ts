export interface LorCard {
  associatedCards?:       any[];
  associatedCardRefs?:    string[];
  assets?:                Asset[];
  regions?:               Region[];
  regionRefs?:            RegionRef[];
  attack?:                number;
  cost?:                  number;
  health?:                number;
  description?:           string;
  descriptionRaw?:        string;
  levelupDescription?:    string;
  levelupDescriptionRaw?: string;
  flavorText?:            string;
  artistName?:            ArtistName;
  name?:                  string;
  cardCode?:              string;
  keywords?:              string[];
  keywordRefs?:           string[];
  spellSpeed?:            SpellSpeed;
  spellSpeedRef?:         SpellSpeed;
  rarity?:                Rarity;
  rarityRef?:             RarityRef;
  subtypes?:              string[];
  supertype?:             Supertype;
  type?:                  Type;
  collectible?:           boolean;
  set?:                   Set;
  formats?:               Format[];
  formatRefs?:            FormatRef[];
  setkey?:                string; // key dargondata generates for the set
}

export enum ArtistName {
  AlexHeath = "Alex Heath",
  AronElekes = "Aron Elekes",
  BenSkutt = "Ben Skutt",
  ChinLikHui = "Chin LikHui",
  DAOLE = "Dao Le",
  Empty = "",
  Eunice = "Eunice",
  GrafitStudio = "Grafit Studio",
  GregFaillace = "Greg Faillace",
  JiHunLee = "JiHun Lee",
  JihunLee = "Jihun Lee",
  KudosProduction = "Kudos Production",
  KudosProductions = "Kudos Productions",
  MARStudio = "MAR Studio",
  MaxGrecke = "Max Grecke",
  OliverChipping = "Oliver Chipping",
  OriginalForce = "Original Force",
  PolarEngine = "Polar Engine",
  PolarEngineStudio = "Polar Engine Studio",
  RafaelZanchetin = "Rafael Zanchetin",
  Sixmorevodka = "SIXMOREVODKA",
  SlawomirManiak = "Slawomir Maniak",
  WildBlue = "Wild Blue",
  WildBlueStudio = "Wild Blue Studio",
  WildBlueStudios = "Wild Blue Studios",
}

export interface Asset {
  gameAbsolutePath?: string;
  fullAbsolutePath?: string;
}

export enum FormatRef {
  ClientFormatsEternalName = "client_Formats_Eternal_name",
  ClientFormatsStandardName = "client_Formats_Standard_name",
}

export enum Format {
  Eternal = "Eternal",
  Standard = "Standard",
}

export enum Rarity {
  Champion = "Champion",
  Common = "COMMON",
  Epic = "EPIC",
  None = "None",
  Rare = "RARE",
}

export enum RarityRef {
  Champion = "Champion",
  Common = "Common",
  Epic = "Epic",
  None = "None",
  Rare = "Rare",
}

export enum RegionRef {
  BandleCity = "BandleCity",
  Bilgewater = "Bilgewater",
  Demacia = "Demacia",
  Freljord = "Freljord",
  Ionia = "Ionia",
  Noxus = "Noxus",
  PiltoverZaun = "PiltoverZaun",
  ShadowIsles = "ShadowIsles",
  Shurima = "Shurima",
  Targon = "Targon",
}

export enum Region {
  BandleCity = "Bandle City",
  Bilgewater = "Bilgewater",
  Demacia = "Demacia",
  Freljord = "Freljord",
  Ionia = "Ionia",
  Noxus = "Noxus",
  PiltoverZaun = "Piltover & Zaun",
  ShadowIsles = "Shadow Isles",
  Shurima = "Shurima",
  Targon = "Targon",
}

export enum Set {
  Set1 = "Set1",
  Set2 = "Set2",
  Set3 = "Set3",
  Set4 = "Set4",
}

export enum SpellSpeed {
  Burst = "Burst",
  Empty = "",
  Fast = "Fast",
  Slow = "Slow",
}

export enum Supertype {
  Champion = "Champion",
  Empty = "",
}

export enum Type {
  Ability = "Ability",
  Landmark = "Landmark",
  Spell = "Spell",
  Trap = "Trap",
  Unit = "Unit",
}
