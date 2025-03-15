export interface SignUp {
    email: string;
    password: string;
    repeatPassword: string;
}

export interface Login {
    email: string;
    password: string;
}

export interface Success {
    message: string;
}