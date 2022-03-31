import React from 'react';
import Groups from '../pages/groups';
import Users from '../pages/users';

export interface IRoute {
  path: string;
  element: React.ComponentType;
}

export enum RouteNames {
  USERS = 'users',
  GROUPS = 'groups'
}

export const routes: IRoute[] = [
  {
    path: RouteNames.USERS,
    element: Users
  },
  {
    path: RouteNames.GROUPS,
    element: Groups
  }
]