import { Component, OnInit } from '@angular/core';
import { LoadingScreenService } from 'src/app/services/loading-screen.service';

@Component({
  selector: 'app-loading-screen',
  templateUrl: './loading-screen.component.html',
  styleUrls: ['./loading-screen.component.scss']
})
export class LoadingScreenComponent implements OnInit {

  constructor(public loader: LoadingScreenService) { }

  ngOnInit(): void {
  }

}
