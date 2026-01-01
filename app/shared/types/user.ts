import type { Role } from "./role";

export interface User {
    uuid: string;
    email: string;
    first_name: string;
    middle_name?: string;
    last_name: string;
    contact: string;
    role: Role;
}