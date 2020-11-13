import { Component, OnInit, SimpleChanges, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-search-section',
  templateUrl: './search-section.component.html',
  styleUrls: ['./search-section.component.css']
})
export class SearchSectionComponent {
  constructor() {}

  public searchCriteria: string = '';

  public search() {
    console.log(this.searchCriteria);
  }

  public ngOnChanges(changes: SimpleChanges): void {
    console.log('SearchSectionComponent', changes);
  }
}
