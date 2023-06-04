import { Component } from '@angular/core';
import { ArticleService } from '../services/article.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-article',
  templateUrl: './add-article.component.html',
  styleUrls: ['./add-article.component.css']
})
export class AddArticleComponent {

  public titre:string="Ajout nouveau Article";
  imgPlus:string="https://img.freepik.com/icones-gratuites/bouton-ajouter_318-757580.jpg"
  constructor(private service: ArticleService, private router: Router) { }


  formation:string="Angular";

  persistArticle(article:any)
  {
    this.service.createArticle(article).subscribe(data => {this.router.navigate(["listArticle"])});
  }

}
