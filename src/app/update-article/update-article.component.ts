import { Component } from '@angular/core';
import { ArticleService } from '../services/article.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-article',
  templateUrl: './update-article.component.html',
  styleUrls: ['./update-article.component.css']
})
export class UpdateArticleComponent {
  id:any;
  name:any;
  description:any;

  constructor(private service: ArticleService, private router: Router, private activeRoute: ActivatedRoute ) { }

  ngOnInit() {
    this.activeRoute.paramMap.subscribe(
      params => {
        this.id = params.get('id');
        //alert(this.id);

    });

    this.service.getArticle(this.id).subscribe(
      (article:any)=>{
                      this.name=article.name;
                      this.description = article.description;
                      console.log(article);
                    }
    );
  }


  updateArticle()
  {

    let article={
      "id":this.id,
      "name":this.name,
      "description":this.description,

    };
    this.service.updateArticle(article).subscribe(
         data =>this.router.navigate(["listArticle"])
    );
  }
}
