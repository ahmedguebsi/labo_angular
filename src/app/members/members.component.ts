import {Component, OnInit} from '@angular/core';
import {Member} from 'src/Modals/Member';
import {MemberService} from "../../Services/member.service";
import {Router} from "@angular/router";
import {MatTableDataSource} from "@angular/material/table";
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MembersComponent implements OnInit {
  dataSource: MatTableDataSource<Member>;
  displayedColumns: string[] = ['id', 'cin', 'name', 'type', 'cv', 'creationDate', 'icone'];

  constructor(private memberService: MemberService, private router: Router,private dialog: MatDialog) {
    //this.dataSource = this.memberService.tab;
    this.dataSource = new MatTableDataSource(this.memberService.tab);
  }

  ngOnInit(): void {
  }

  fetchDataSource(): void {
    this.memberService.getAllMembers().then((tableau) => {
      this.dataSource = new MatTableDataSource(tableau)
    });
  }

  deleteMember(id: string): void {
    //1. ouvrir la boite de dialog
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      height: '400px',
      width: '600px',
    });
    //2 attendre le retour de l user //lance u thread w un listener
    dialogRef.afterClosed().subscribe(result => {
      if (result){
        this.memberService.deleteMemberbyID(id).then(() =>{this.fetchDataSource();})
      }});
    //tester sur le retour
    //4 if(click sur confirm)
    

  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
