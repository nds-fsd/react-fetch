import { getUserRole } from "./localStorage.utils"

export const hasPermission = (permission) => {
    const userPermission = getUserRole();
    return permission === userPermission;
}

