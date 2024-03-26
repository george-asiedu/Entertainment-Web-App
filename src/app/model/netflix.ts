export interface Netflix {
    title: string;
    thumbnail: {
        trending: {
            small: string;
            large: string;
        },
        regular: {
            small: string;
            medium: string;
            large: string;
        }
    },
    year: number;
    category: string;
    rating: string;
    isBookmarked: boolean;
    isTrending: boolean;
    id: string;
}

export interface Login {
    email: string;
    password: string;
}

export interface Signup {
    email: string;
    password: string;
    repeatPassword: string;
}