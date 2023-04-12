import { appAuth } from "../auth-services"

export const authenticate = async (credentials: {email: string, password: string}) => {
    return await appAuth.post('/auth/login', credentials);
}