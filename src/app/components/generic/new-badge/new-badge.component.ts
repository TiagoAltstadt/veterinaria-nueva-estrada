import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

export interface BadgeData {
  name: string;
  id: number;
  description: string;
  imageName: string;
  state: boolean;
}

@Component({
  selector: 'app-new-badge',
  templateUrl: './new-badge.component.html',
  styleUrls: ['./new-badge.component.scss'],
})
export class NewBadgeComponent implements OnInit {
  @Input() badgeData: BadgeData[] | undefined;
  @Input() selectedId: number | undefined;
  @Output() selectedBadge: EventEmitter<BadgeData> =
    new EventEmitter<BadgeData>();

  constructor() {}

  ngOnInit() {
    
  }
  ngOnChanges() {
    if (this.badgeData && this.selectedId) {
      var aux = this.badgeData.find((element) => element.id == this.selectedId);

      this.badgeData.forEach((element) => {
        if (aux && element.id == aux.id) {
          aux.state = true;
          element = aux;
        } else {
          element.state = false;
        }
      });
    }
  }
  badgeClicked(badge: BadgeData) {
    this.selectedBadge.emit(badge);

    if (this.badgeData && this.selectedId) {
      var aux = this.badgeData.find((element) => element.id == badge.id);

      this.badgeData.forEach((element) => {
        if (aux && element.id == aux.id) {
          aux.state = true;
          element = aux;
        } else {
          element.state = false;
        }
      });
    }
  }
}
