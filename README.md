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
  
    API - CRUD for User and Group

# Deploy
1) Connect to server
2) Install docker
3) Pull Docker images for Client and Server
        
       docker pull 422142214221/frontend
       
       docker pull 422142214221/backend
       
4) Run containers
       
       docker run -d -p 5000:5000 --name server --rm 422142214221/backend
       
       docker run -d -p 80:3000 --name client --rm 422142214221/frontend
