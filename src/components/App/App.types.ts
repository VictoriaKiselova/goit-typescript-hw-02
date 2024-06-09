interface Tag {
  title: string;
}
interface Urls {
  small: string;
  regular: string;
}
export interface TypesArticles {
  id: string;
  tags: Tag[];
  urls: Urls;
}
export interface FetchArticlesResponse {
  results: TypesArticles[];
  total_pages: number;
}
