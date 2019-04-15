export interface UmbrellaData {
    search_recommendations: SearchRecommendations;
    search_response: SearchResponse;
}

export interface SearchRecommendations {
    categoryID;
    relatedCategories: Related[];
    relatedQueries: Related[];
}

export interface Related {
    url: string;
    title: string;
}

export interface SearchResponse {
    breadCrumb_list: BreadCrumbList[];
    face_list: FaceList[];
    items;
    metaData: MetaData[];
    sort_options: SortOptions;
}


export interface BreadCrumbValues {
    label: string;
    category: string;
    index: number;
    categoryId?: string;
}

export interface BreadCrumbList {
    index: number;
    breadCrumbValues: BreadCrumbValues[];
}

export interface FaceList {
    displayName: string;
    expand: boolean;
    id: number;
    name: string;
    type: string;
}

export interface SearchResponseItems {
    item;
}

export interface Item {

}

export interface MetaData {
    name: string;
    value: string;
}

export interface SortOptions {
    Featured: string;
    PriceHigh: string;
    PriceLow: string;
    RatingHigh: string;
    bestselling: string;
    newest: string;
}

