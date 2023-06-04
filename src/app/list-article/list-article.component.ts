import { Component } from '@angular/core';
import { ArticleService } from '../services/article.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-list-article',
  templateUrl: './list-article.component.html',
  styleUrls: ['./list-article.component.css']
})
export class ListArticleComponent {
  articles: any;
  constructor(private service: ArticleService, private router: Router) { }
  ngOnInit() {
    this.service.listArticles().subscribe(
      response => {
        this.articles = response;
      }
    );
  }


  deleteArticle(id: any) {
    this.service.deleteArticle(id).subscribe(response => {
      console.log(response);
      this.refreshListArticles();
    })
  }
  refreshListArticles() {
    this.service.listArticles().subscribe(
      response => {
        this.articles = response;
      }
    );
  }
  updateArticle(id: any) {
    this.router.navigate(['updateArticle' + '/' +id]);
  }
}
