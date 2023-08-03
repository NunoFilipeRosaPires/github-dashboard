export interface IRepositoryComponent {
  repository: IRepository;
  withBorder?: boolean;
  orientation?: "horizontal" | "vertical";
  withShadow?: boolean;
}

export interface IRepository {
  id: number;
  stargazers_count: number;
  name: string;
  description: string;
  html_url: string;
}

export interface IRepositoryList {
  search?: string;
}
