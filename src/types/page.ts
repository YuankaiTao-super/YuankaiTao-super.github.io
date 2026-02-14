export interface BasePageConfig {
    type: 'about' | 'publication' | 'card' | 'text' | 'timeline';
    title: string;
    description?: string;
}

export interface PublicationPageConfig extends BasePageConfig {
    type: 'publication';
    source: string;
}

export interface TextPageConfig extends BasePageConfig {
    type: 'text';
    source: string;
}

export interface CardItem {
    title: string;
    subtitle?: string;
    date?: string;
    content?: string;
    tags?: string[];
    link?: string;
    image?: string;
}

export interface CardPageConfig extends BasePageConfig {
    type: 'card';
    items: CardItem[];
}

export interface TimelineItem {
    title: string;
    organization?: string;
    location?: string;
    date?: string;
    summary?: string;
    bullets?: string[];
    supervisors?: string[];
    tags?: string[];
    link?: string;
    logo?: string;
}

export interface TimelinePageConfig extends BasePageConfig {
    type: 'timeline';
    items: TimelineItem[];
}
