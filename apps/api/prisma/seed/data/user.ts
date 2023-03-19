export const creds = [
  {
    uid: 'wU5zP8oP2VcFk67mZhRJ7t6Uagd2',
    email: 'admin@email.com',
    name: 'The admin',
    password: '123456',
    returnSecureToken: true,
  },
  {
    uid: 'VrMPo2is0yaxalxuNHoEmg18MOP2',
    email: 'agent1@email.com',
    name: 'agent 1',
    password: '123456',
    returnSecureToken: true,
  },
  {
    uid: 'g23e1cxdcyWSaCt46HiZbvrfSb93',
    email: 'agent2@email.com',
    name: 'agent 2',
    password: '123456',
    returnSecureToken: true,
  },
  {
    uid: 'CxxMKZePG1WtsPHrWImmeqbXvy52',
    email: 'advertiser1@email.com',
    name: 'advertiser 1',
    password: '123456',
    returnSecureToken: true,
  },
  {
    uid: 'xWSp0XbiikcEv0JPb1Du4eAWYS12',
    email: 'advertiser2@email.com',
    name: 'advertiser 2',
    password: '123456',
    returnSecureToken: true,
  },
  {
    uid: 'sTwP6lNzLcXOtCEmiajutzq48ED2',
    email: 'owner1@email.com',
    name: 'owner 1',
    password: '123456',
    returnSecureToken: true,
  },
  {
    uid: '0He15GZ3xlfeZZnctUwbwnkBOeK2',
    email: 'owner2@email.com',
    name: 'owner 2',
    password: '123456',
    returnSecureToken: true,
  },
] as const

export const admins = creds.filter((cred) => cred.email.includes('admin'))
export const agents = creds.filter((cred) => cred.email.includes('agent'))
export const owners = creds.filter((cred) => cred.email.includes('owner'))
export const advertisers = creds.filter((cred) =>
  cred.email.includes('advertiser'),
)
