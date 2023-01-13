import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Member } from 'src/Modals/Member';
import { ArticleService } from 'src/Services/article.service';
import { MemberService } from 'src/Services/member.service';
@Component({
  selector: 'app-affect',
  templateUrl: './affect.component.html',
  styleUrls: ['./affect.component.css']
})
//récuperer lid apartir de url : snapshot  /redirection : router
export class AffectComponent implements OnInit {
tab:any[];
idArticle : string="" ;

selected!:string;
  
 

constructor(private memberService: MemberService,private articleService: ArticleService, private router: Router, private activatedRoute: ActivatedRoute) {
    this.tab = this.memberService.tab;
    //this.dataSource = new MatTableDataSource(this.memberService.tab);
  }
  ngOnInit(): void {

  }
  add(name:string):void{
    this.idArticle=this.activatedRoute.snapshot.params['id'];//bech njib l id ml url na3ml activatedRoute;snapshot.params
    if(!!this.idArticle)
    this.articleService.Affect(name,this.idArticle).then(()=>{
      this.router.navigate(['/articles'])})
      }
}
