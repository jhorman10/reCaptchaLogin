import { createContext } from "react";
import { Result } from '../Dashboard/pages/interface/hero.interface';

interface User {
    email: string;
    password: string;
}

interface ContextData {
    users: User[];
    Hero: Result[];
}


export const MockContext = createContext<ContextData>({
    users: [],
    Hero: []
});
