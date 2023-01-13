import { Component, OnInit } from '@angular/core';
import { MatDialogRef} from '@angular/material/dialog';
@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.css']
})
export class ConfirmDialogComponent implements OnInit {
  public confirm= "confirm"
  public cancel = "cancel"
  public message= "Do you realy want to remove this item ?"
  public title = "Are you Sure ?"
  constructor(public dialogRef: MatDialogRef<ConfirmDialogComponent>) { }

  ngOnInit(): void {
  }

}
