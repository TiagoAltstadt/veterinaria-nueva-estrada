import { Component, OnInit } from '@angular/core';

export interface BadgeData {
  name: string;
  description: string;
  imageName: string;
}

@Component({
  selector: 'app-new-badge',
  templateUrl: './new-badge.component.html',
  styleUrls: ['./new-badge.component.scss'],
})
export class NewBadgeComponent implements OnInit {

  //--------------------Variables--------------------
  badgeData: BadgeData[] = [
    {
      name: 'Nicolas',
      description:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid,  voluptas perspiciatis? Excepturi doloremque ipsa praesentium dignissimosofficiis voluptate.',
      imageName: 'nicoBadge',
    },
    {
      name: 'Fabio',
      description:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid,  voluptas perspiciatis? Excepturi doloremque ipsa praesentium dignissimosofficiis voluptate.',
      imageName: 'docBadge',
    },
    {
      name: 'Cris',
      description:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid,  voluptas perspiciatis? Excepturi doloremque ipsa praesentium dignissimosofficiis voluptate.',
      imageName: 'crisBadge',
    },
    {
      name: 'Caro',
      description:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid,  voluptas perspiciatis? Excepturi doloremque ipsa praesentium dignissimosofficiis voluptate.',
      imageName: 'caroBadge',
    },
    {
      name: 'Natalia',
      description:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid,  voluptas perspiciatis? Excepturi doloremque ipsa praesentium dignissimosofficiis voluptate.',
      imageName: 'docBadge',
    },
    {
      name: 'Cynthia',
      description:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid,  voluptas perspiciatis? Excepturi doloremque ipsa praesentium dignissimosofficiis voluptate.',
      imageName: 'docBadge',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
