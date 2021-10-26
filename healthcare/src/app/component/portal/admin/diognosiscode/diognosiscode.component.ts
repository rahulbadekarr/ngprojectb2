import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AdddialogPopupComponent } from './adddialog-popup/adddialog-popup.component';
@Component({
  selector: 'app-diognosiscode',
  templateUrl: './diognosiscode.component.html',
  styleUrls: ['./diognosiscode.component.css']
})
export class DiognosiscodeComponent implements OnInit {

  constructor(public dialog:MatDialog) { }

  ngOnInit(): void {
  }
  OpenDialog()
  {
    this.dialog.open(AdddialogPopupComponent)
  }

}
