export type ILocalStorage = {
  [key in LocalStorageKeys]: key extends 'access_token'
    ? string
    : key extends 'redirect_to'
      ? string
      : key extends 'user'
        ? {
            email: string;
            family_name: string;
            given_name: string;
            picture: string;
            sub: string;
          }
        : string;
};

export type LocalStorageKeys = 'access_token' | 'redirect_to' | 'user';
