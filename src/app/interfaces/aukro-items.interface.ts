export interface IAukro
{
    introPart: never;
    mainPart: IAukroCategories[];
}

export interface IAukroCategories {
    content: IAukroContent;
    type: ECategoriesType;
}

export interface IAukroContent {
    items: IAukroItems[];
}

export interface IAukroItems {
    images: IAukroImagesList;
}

export interface IAukroImagesList {
    lists: IAukroImagesLists
}

export interface IAukroImagesLists {
    large: IAukroImage[];
    medium: IAukroImage[];
    original: IAukroImage[];
    small: IAukroImage[];
}

export interface IAukroImage {
    id: number,
    url: string;
}

export enum ECategoriesType {
    MobileGridMenu = 'MobileGridMenu',
    BannerPlacementMTFW = 'BannerPlacementMTFW',
    CrazyPricesItems = 'CrazyPricesItems',
    CategoriesItems = 'CategoriesItems',
    HotAuctions = 'HotAuctions',
    MyLastViewedItems = 'MyLastViewedItems',
    InfoBoxes = 'InfoBoxes',
}