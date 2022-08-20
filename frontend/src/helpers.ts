import { BACKEND_URL } from "./config";

export const isPersistedState = (stateName: string): any => {
    const sessionState = sessionStorage.getItem(stateName);
    return sessionState && JSON.parse(sessionState);
  };

const appSettings = {}