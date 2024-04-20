export type PostDataType = {
    userId: string;
    userName: string;
    wallet: string;
    postId: string;
    postImg: string;
    description: string;
    likes: string[];
    funded: number;
    bettors: object[];
};

export type BettorsDataType = {
    userId: string;
    userName: string;
    wallet: string;
    betAmount: number;
};