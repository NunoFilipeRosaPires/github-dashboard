export interface IUser {
  id: number;
  name: string;
  login: string;
  email: string;
  followers: number;
  avatar_url: string;
  html_url: string;
  url: string;
}

export interface IUserList {
  title?: string;
  sort: "followers" | "repositories";
  search?: string;
}

export interface IUserRepository {
  username: string;
}
