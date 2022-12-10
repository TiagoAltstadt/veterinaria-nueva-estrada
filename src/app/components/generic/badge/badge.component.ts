import { Component, OnInit } from '@angular/core';

export interface BadgeData {
  name: string;
  description: string;
  imageName: string;
}
@Component({
  selector: 'app-badge',
  templateUrl: './badge.component.html',
  styleUrls: ['./badge.component.scss'],
})
export class BadgeComponent implements OnInit {
  imageName: string = 'nicoBadge';

  badgeData: BadgeData[] = [
    {
      name: 'Nicolas Morteo',
      description:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid,  voluptas perspiciatis? Excepturi doloremque ipsa praesentium dignissimosofficiis voluptate.',
      imageName: 'docBadge',
    },
    {
      name: 'Chico Nuevo',
      description:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid,  voluptas perspiciatis? Excepturi doloremque ipsa praesentium dignissimosofficiis voluptate.',
      imageName: 'docBadge',
    },
    {
      name: 'Cris',
      description:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid,  voluptas perspiciatis? Excepturi doloremque ipsa praesentium dignissimosofficiis voluptate.',
      imageName: 'docBadge',
    },
    {
      name: 'Caro',
      description:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid,  voluptas perspiciatis? Excepturi doloremque ipsa praesentium dignissimosofficiis voluptate.',
      imageName: 'docBadge',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
