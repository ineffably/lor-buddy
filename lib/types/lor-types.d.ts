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
    type?: Type;
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
export declare enum FormatRef {
    ClientFormatsEternalName = "client_Formats_Eternal_name",
    ClientFormatsStandardName = "client_Formats_Standard_name"
}
export declare enum Format {
    Eternal = "Eternal",
    Standard = "Standard"
}
export declare enum Rarity {
    Champion = "Champion",
    Common = "COMMON",
    Epic = "EPIC",
    None = "None",
    Rare = "RARE"
}
export declare enum RarityRef {
    Champion = "Champion",
    Common = "Common",
    Epic = "Epic",
    None = "None",
    Rare = "Rare"
}
export declare enum RegionRef {
    BandleCity = "BandleCity",
    Bilgewater = "Bilgewater",
    Demacia = "Demacia",
    Freljord = "Freljord",
    Ionia = "Ionia",
    Noxus = "Noxus",
    PiltoverZaun = "PiltoverZaun",
    ShadowIsles = "ShadowIsles",
    Shurima = "Shurima",
    Targon = "Targon"
}
export declare enum Region {
    BandleCity = "Bandle City",
    Bilgewater = "Bilgewater",
    Demacia = "Demacia",
    Freljord = "Freljord",
    Ionia = "Ionia",
    Noxus = "Noxus",
    PiltoverZaun = "Piltover & Zaun",
    ShadowIsles = "Shadow Isles",
    Shurima = "Shurima",
    Targon = "Targon"
}
export declare enum Set {
    Set1 = "Set1",
    Set2 = "Set2",
    Set3 = "Set3",
    Set4 = "Set4"
}
export declare enum SpellSpeed {
    Burst = "Burst",
    Empty = "",
    Fast = "Fast",
    Slow = "Slow"
}
export declare enum Supertype {
    Champion = "Champion",
    Empty = ""
}
export declare enum Type {
    Ability = "Ability",
    Landmark = "Landmark",
    Spell = "Spell",
    Trap = "Trap",
    Unit = "Unit"
}
