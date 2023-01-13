import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Article } from 'src/Modals/Article';
import { ArticleService } from 'src/Services/article.service';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {

  dataSource: MatTableDataSource<Article>;
  displayedColumns: string[] = ['id', 'titre', 'annee', 'auteur', 'actions'];

  constructor(private articleService: ArticleService) {
    //this.dataSource = this.memberService.tab;
    this.dataSource = new MatTableDataSource(this.articleService.table);
  }

  ngOnInit(): void {
  }

}
