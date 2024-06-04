export type ILocalStorage = {
  [key in LocalStorageKeys]: key extends 'accessToken'
    ? string
    : key extends 'redirectTo'
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

export type LocalStorageKeys = 'accessToken' | 'redirectTo' | 'user';
