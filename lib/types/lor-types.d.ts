export interface LorCard {
    associatedCards?: any[];
    associatedCardRefs?: string[];
    assets?: Asset[];
    regions?: Region[];
    regionRefs?: RegionRef[];
    attack?: number;
    cost?: number;
    health?: number;
    description?: string;
    descriptionRaw?: string;
    levelupDescription?: string;
    levelupDescriptionRaw?: string;
    flavorText?: string;
    artistName?: ArtistName;
    name?: string;
    cardCode?: string;
    keywords?: string[];
    keywordRefs?: string[];
    spellSpeed?: SpellSpeed;
    spellSpeedRef?: SpellSpeed;
    rarity?: Rarity;
    rarityRef?: RarityRef;
    subtypes?: string[];
    supertype?: Supertype;
    type?: CardType;
    collectible?: boolean;
    set?: Set;
    formats?: Format[];
    formatRefs?: FormatRef[];
    setkey?: string;
}
export declare enum ArtistName {
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
    WildBlueStudios = "Wild Blue Studios"
}
export interface Asset {
    gameAbsolutePath?: string;
    fullAbsolutePath?: string;
}
export type FormatRef = "client_Formats_Eternal_name" | "client_Formats_Standard_name";
export type Format = "Eternal" | "Standard";
export type Rarity = "Champion" | "COMMON" | "EPIC" | "None" | "RARE";
export type RarityRef = "Champion" | "Common" | "Epic" | "None" | "Rare";
export type RegionRef = "BandleCity" | "Bilgewater" | "Demacia" | "Freljord" | "Ionia" | "Noxus" | "PiltoverZaun" | "ShadowIsles" | "Shurima" | "Targon";
export type Region = "Bandle City" | "Bilgewater" | "Demacia" | "Freljord" | "Ionia" | "Noxus" | "Piltover & Zaun" | "Shadow Isles" | "Shurima" | "Targon";
export type Set = "Set1" | "Set2" | "Set3" | "Set4";
export type SpellSpeed = "Burst" | "Fast" | "Slow" | "";
export type Supertype = "Champion" | "Landmark" | "Spell" | "Trap" | "Unit" | "";
export type CardType = "Ability" | "Landmark" | "Spell" | "Trap" | "Unit";
