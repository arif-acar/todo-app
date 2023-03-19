# ToDo Server

## Run

Run following command to start server

```bash
docker-compose up
```

## Check if running

Go to following url to check if app running

http://localhost:3000/health

## Available endpoints

- `POST /api/todo` to create to-do

```
    {
        "name": "To-Do name"
    }
```

- `GET /api/todo` to get all to-dos
- `GET /api/todo/{id}` to get to-do with id
- `DELETE /api/todo/{id}` to delete to-do with id
- `POST /api/todo{id}/complete` to mark to-do complete with id
- `POST /api/todo{id}/uncomplete` to get to-do uncomplete with id

## Stop the System

Stopping all the running containers is also simple with a single command:

```bash
docker-compose down
```
