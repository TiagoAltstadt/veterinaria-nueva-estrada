import { Component, OnInit } from '@angular/core';

export interface ContactInformation {
  id: number;
  title: string;
  description: string;
  icon: string;
  color: string;
  link: string;
}

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  contactInformation: ContactInformation[] = [
    {
      id: 0,
      link: '',
      title: 'En nuestro local',
      description:
        'Siempre seras vienvenido para un sobreturno en nuestra veterinaria en Estrada 2958 de Lunes a Viernes de 8 a 18! Recorda que podes sacar turno a travez de Setmore en el inicio de la pagina!',
      icon: 'home-alternative',
      color: 'violet',
    },
    {
      id: 1,
      link: '',
      title: 'Whatsapp',
      description:
        'Podes contactarnos por whatsapp de Lunes a viernes de 8 a 18 al 2230000000',
      icon: 'whatsapp',
      color: 'green',
    },
    {
      id: 2,
      link: '',
      title: 'Facebbok',
      description:
        'No seriamos una Veterinaria seria si no contaramos con nuestra propia pagina de Facebook, podes encontrarnos aca!',
      icon: 'facebook',
      color: 'blue',
    },
    {
      id: 3,
      link: '',
      title: 'Instagram',
      description:
        'Si queres estar al dia con las ultimas novedades, Vete-tips, participar en concursos y tener una fiel mirada de con que es lo que contamos en Veterinaria nueva estrada, Seguinos en instagram como @veterinarianuevaestrada',
      icon: 'instagram',
      color: 'red',
    },
    {
      id: 4,
      link: '',
      title: 'Setmore',
      description:
        'Recorda que podes sacar turnos directamente desde Setmore, un acceso directo de el sistema se encuentra en el inicio de la pagina, sino en Instagram, Facebook o Whatsapp vas a encontrar el link directo. Nunca va a estar de mas avisar que podes llamarnos y uno de nuestros profecionales te va a asignar un turno o darte la auda que necesites por telefono, nos importa mantener viva la calidez humana que nos identifica.',
      icon: 'calendar',
      color: 'lightblue',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
