export const random = (choice = '') => {
    switch (choice) {
        case "email":
            return `${Math.random().toString(36).substring(2,10)}@${Math.random().toString(36).substring(2, 8)}.${Math.random().toString(36).substring(2, 5)}`;
            break;
        case "name":
            return `${Math.random().toString(36).substring(2,12)} ${Math.random().toString(36).substring(2, 12)}`;
            break;
        case "username":
            return `${Math.random().toString(36).substring(2,9)}`;
            break;
        case "":
            return `${Math.random().toString(36).substring(2,7)}`;
            break;

        default:
            return `${Math.random().toString(36).substring(2,7)}`;
            break;

    }
}