import { Component, OnInit } from '@angular/core';
export interface BadgeData {
  name: string;
  id: number;
  description: string;
  imageName: string;
  state: boolean;
}
@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss'],
})
export class AboutUsComponent implements OnInit {
  //--------------------Variables--------------------
  badgeData: BadgeData[] = [
    {
      name: 'Nicolas',
      id: 1,
      description:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid,  voluptas perspiciatis? Excepturi doloremque ipsa praesentium dignissimosofficiis voluptate.',
      state: false,
      imageName: 'nicoBadge',
    },
    {
      name: 'Fabio',
      id: 2,
      description:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid,  voluptas perspiciatis? Excepturi doloremque ipsa praesentium dignissimosofficiis voluptate.',
      state: false,
      imageName: 'docBadge',
    },
    {
      name: 'Cris',
      id: 3,
      description:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid,  voluptas perspiciatis? Excepturi doloremque ipsa praesentium dignissimosofficiis voluptate.',
      state: false,
      imageName: 'crisBadge',
    },
    {
      name: 'Caro',
      id: 4,
      description:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid,  voluptas perspiciatis? Excepturi doloremque ipsa praesentium dignissimosofficiis voluptate.',
      state: false,
      imageName: 'caroBadge',
    },
    {
      name: 'Natalia',
      id: 5,
      description:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid,  voluptas perspiciatis? Excepturi doloremque ipsa praesentium dignissimosofficiis voluptate.',
      state: false,
      imageName: 'docBadge',
    },
    {
      name: 'Cynthia',
      id: 6,
      description:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid,  voluptas perspiciatis? Excepturi doloremque ipsa praesentium dignissimosofficiis voluptate.',
      state: false,
      imageName: 'docBadge',
    },
  ];
  selectedId: number | undefined;
  constructor() {}

  ngOnInit(): void {}
  selectedBadge(badge: BadgeData) {}
  selectedItem: BadgeData | undefined;

  selectedOption(optionSelected: string) {
    this.selectedId = +optionSelected;
  }
}
