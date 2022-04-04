# Full Stack App
Test Task at SynergyWay

# Tech Stack: 
Express, TypeORM, PostgreSQL, React, TypeScript
Requests - axios

# Description
Client
    2 pages: Users and Groups
    You can create groups, then create user and select one of existing group for it
    You can edit and delete users/group, but group deletion possible only if it doesn't contains any users

Server
  Models
      User {
        id: number
        username: string
        createdAt: Date
        group: Group
      }
      Group {
        id: number
        name: string
        description: string
        users: User[]
      }
  API
    CRUD for User and Group

# Deploy
