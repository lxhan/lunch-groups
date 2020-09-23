# Random groups

This app makes random groups for lunch time

## Docker

### Copy the app

```
git clone https://github.com/lxhan/lunch-groups.git
```

### Go to root directory

```
cd lunch-gorups
```

### Build image

```
docker build -t web .
```

### Run

```
docker-compose up -d
```

## Without docker

### DB

Assuming you have MongoDB up and running.

You need to change ENV variables in `.env` and create `people` collection in database.

### Source files

```
git clone https://github.com/lxhan/lunch-groups.git
```

### Server

```
npm run server
```

### Client

```
npm start
```

### Both

```
npm run start:all
```

> Please note! If using this app in production add `.env` to `.gitignore`
