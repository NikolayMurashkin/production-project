import { User } from 'entities/User';

export enum ArticleSortField {
    VIEWS = 'views',
    TITLE = 'title',
    CREATED = 'createdAt',
}

export enum ArticleBlockType {
    TEXT = 'TEXT',
    CODE = 'CODE',
    IMAGE = 'IMAGE',
}

export enum ArticleType {
    IT = 'IT',
    SCIENCE = 'SCIENCE',
    POLITICS = 'POLITICS',
    ECONOMICS = 'ECONOMICS',
}

export enum ArticleView {
    BIG = 'BIG',
    SMALL = 'SMALL',
}

export interface ArticleBlockBase {
    id: string;
    type: ArticleBlockType;
}
export interface ArticleCodeBlock extends ArticleBlockBase{
    code: string;
    type: ArticleBlockType.CODE;
}
export interface ArticleTextBlock extends ArticleBlockBase {
    paragraphs: string[];
    type: ArticleBlockType.TEXT;
    title?: string;
}
export interface ArticleImageBlock extends ArticleBlockBase {
    title: string;
    src: string;
    type: ArticleBlockType.IMAGE;
}

export type ArticleBlock = ArticleTextBlock | ArticleCodeBlock | ArticleImageBlock;

export interface Article {
    id: string;
    title: string;
    subtitle: string;
    img: string;
    views: number;
    createdAt: string;
    type: ArticleType[];
    blocks: ArticleBlock[];
    user: User;
}
