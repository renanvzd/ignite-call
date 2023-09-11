
---

# Meet Scheduling

## How to Build and Run the Application

### Node Version Manager - NVM

To ensure that the development environment uses the correct version of Node.js, I recommend using Node Version Manager (NVM). For this application, NVM version 18.12.0 was used.

```bash
nvm use v18.12.0
```

### Install Node Modules Package

```bash
npm install
```

### Starting the Development Server

Next, start the development server with the following command:

```bash
npm run dev
```

After running these commands, you can view the result in your browser by accessing:

[http://localhost:3000](http://localhost:3000)


### Database: MySQL (Prisma)

You can check and manage MySQL Database with the following command:

```bash
npx prisma studio
```