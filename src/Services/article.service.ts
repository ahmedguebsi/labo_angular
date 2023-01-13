import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GLOBAL } from 'src/app/app_config';
import { Article } from 'src/Modals/Article';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  table: Article[] = GLOBAL._DB.articles;
  tab: any;

  constructor(private httpClient: HttpClient) {
  }
  Affect(name:string,idArticle:string):Promise<void>{
    this.getArticleByID(idArticle).then((article) =>{article.auteur=name}
    );
    return new Promise(resolve => resolve());
  }
  getArticleByID(idArticle: string): Promise<Article> {
    // si j'ai la partie back
    //return this.httpClient.get<Member>('linktorestAPI').toPromise();

    return new Promise(resolve => resolve(this.table.filter(item => item.id === idArticle) [0] ?? null));
  }

}
