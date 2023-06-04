import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  urlArticles = 'http://127.0.0.1:8080/articles/';


  constructor(private Http: HttpClient) { }
  listArticles() {
    return this.Http.get(this.urlArticles);
  }

  deleteArticle(idArticle: any) {
    return this.Http.delete(this.urlArticles + idArticle)
  }
  updateArticle(article: any) {
    return this.Http.put(this.urlArticles + article['id'], article);
  }


  createArticle(article: any) {
    return this.Http.post(this.urlArticles, article);
  }

  getArticle(id: any) {
    return this.Http.get(this.urlArticles + id)
  }
}
