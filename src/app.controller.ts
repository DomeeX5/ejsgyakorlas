/* eslint-disable prettier/prettier */

import { Controller, Get, Render } from '@nestjs/common';
import { AppService } from './app.service';
import { User } from './user';

const users: User[] = [
  {
    name: 'János',
    gender: 'férfi',
    bday: '1989.04.30',
    balance: 56000,
    activity: true
  },
  {
    name: 'Feri',
    gender: 'férfi',
    bday: '2013.10.28',
    balance: 0,
    activity: false
  },
  {
    name: 'Csilla',
    gender: 'nő',
    bday: '1997.05.17',
    balance: 37500,
    activity: true
  },
  {
    name: 'Krisztián',
    gender: 'férfi',
    bday: '2004.09.06',
    balance: 78350,
    activity: false
  },
  {
    name: 'Kata',
    gender: 'nő',
    bday: '1979.03.18',
    balance: 30000,
    activity: false
  },
  {
    name: 'Gergő',
    gender: 'férfi',
    bday: '1974.02.24',
    balance: 150000,
    activity: true
  }
]

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Render('index')
  getNewUser() {
    const aktiv = users.filter(a => a.activity == true)
    return {
      users: aktiv
    }
    } 
  }

