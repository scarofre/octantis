# Octantis

## Projet summary
Data to the soil, soil to the data #wineWatcher #openSource

## Development environment

### Database

Use docker and docker-compose to launch postgresql database.

```shell
cp .env.dist .env               # to set your own environment variables
docker-compose up -d database   # you can now connect to your database (on localhost:5432)
```
