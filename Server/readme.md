# Documnetation for sharma !

## API

An in-depth overview of the API methods is available in the documentation. The API covers the following modules:

| Route                        | Method                         | Working                                | Requested data               | Response                  |
| -----------------------------| ------------------------------ | ---------------------------------------|--------------------------------------------------------- |
## Project Routes
| -----------------------------| ------------------------------ | ---------------------------------------|--------------------------------------------------------- |
| /project                     |              `GET`             | For getting all Porjects               | None                         | Project object            |
| /project                     |              `POST`            | For creating a project with owner id   | Full Project Schema          | Bool                      |
| /project/:id                 |              `GET`             | For getting Specific Project           | id of Project in params      | Project object            |
| /project/:id                 |              `PATCH`           | For Updating a Specific Project        | id and Attributes            | Project object            |
| /project/category/:category  |              `GET`             | Array of Porjects on specific category | category or tags             | Project object            |
| /project/:id                 |              `DELETE`          | For deleting a project of id           | id of project in params      | Bool                      |
| -----------------------------| ------------------------------ | ---------------------------------------|--------------------------------------------------------- |
## Devs Routes
| -----------------------------| ------------------------------ | ---------------------------------------|--------------------------------------------------------- |
| /auth/all                    |              `GET`             | For getting all Devs                   | None                         | Devs objects              |
| /auth/dev/                   |              `POST`            | For Creating a Dev                     | Full Devs Schema             | Bool                      |
| /auth/dev/:id                |              `GET`             | For getting one specific Dev           | id in params                 | Dev object                |
| /auth/:id                    |              `DELETE`          | For Deleting a Dev                     | id of Dev in params          | Bool                      |
| /auth/:id                    |              `PATCH`           | For Updating a Dev                     | id and attributes in schema  | Bool                      |
| /auth/category/:category     |              `GET`             | for getting dev of category            | category in params           | Devs objects              |
| -----------------------------| ------------------------------ | ---------------------------------------|--------------------------------------------------------- |
## Event Routes
| -----------------------------| ------------------------------ | ---------------------------------------|--------------------------------------------------------- |
| /event                       |              `GET`             | For getting all Events                 | None                         | Events objects            |
| /event                       |              `POST`            | For Creating an Event                  | Full Event Schema            | Bool                      |
| /event/personal/:id          |              `GET`             | For getting all Personalised events    | id of Dev in params          | Events objects            |
| /event/:id                   |              `GET`             | For getting a Specific Event           | id of event in params        | Event  objects            |
| /event/:id                   |              `DELETE`          | For Deleting an Event                  | id of event in params        | Bool                      |
| /event/:id                   |              `PATCH`           | For updating an Event                  | id and attributes in schema  | Bool                      |






## Schemas can be found in /Models...





