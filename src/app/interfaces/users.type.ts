export interface User {
    id: number;
    first_name: string;
    last_name: string;
    email: string;
}
export interface ResponseUsers {
    data: User[];
}
export interface ResponseUser {
    data: User;
}

export interface RequestCreate {
    first_name: string;
    last_name: string;
    email: string;
}
export interface ResponseCreate {
    first_name: string;
    last_name: string;
    email: string;
    id: string;
}
export interface RequestUpdate {
    first_name: string;
    last_name: string;
    email: string;
}
export interface ResponseUpdate {
    first_name: string;
    last_name: string;
    email: string;
    id: string;
}
