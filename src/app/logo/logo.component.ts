import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component( {
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: [ './logo.component.css' ],
  changeDetection: ChangeDetectionStrategy.OnPush
} )
export class LogoComponent implements OnInit {

  public title = 'video course';

  constructor () { }

  ngOnInit(): void {
  }

}
