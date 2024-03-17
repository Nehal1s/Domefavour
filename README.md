# Domefavour



- Workflow will be maintained in your account i.e `https://github.com/Nehal1s/Domefavour.git`

- Gh-pages is live on my account because I am using github pro





# Documnetation for UI Guy !

## API

An in-depth overview of the API methods is available in the documentation. The API covers the following modules:

## Project Routes
| Route                        | Method                         | Working                                | Requested data               | Response                  |
| ---------------------------- | ------------------------------ | -------------------------------------- | -----------------------------|-------------------------- |
| /project                     |              `GET`             | For getting all Porjects               | None                         | Project object            |
| /project                     |              `POST`            | For creating a project with owner id   | Full Project Schema          | Json.Status                      |
| /project/:id                 |              `GET`             | For getting Specific Project           | id of Project in params      | Project object            |
| /project/:id                 |              `PATCH`           | For Updating a Specific Project        | id and Attributes            | Project object            |
| /project/category/:category  |              `GET`             | Array of Porjects on specific category | category or tags             | Project object            |
| /project/:id                 |              `DELETE`          | For deleting a project of id           | id of project in params      | Json.Status                      |
## Devs Routes
| Route                        | Method                         | Working                                | Requested data               | Response                  |
| ---------------------------- | ------------------------------ | -------------------------------------- | -----------------------------|-------------------------- |
| /auth/all                    |              `GET`             | For getting all Devs                   | None                         | Devs objects              |
| /auth/dev/                   |              `POST`            | For Creating a Dev                     | Full Devs Schema             | Json.Status                      |
| /auth/dev/:id                |              `GET`             | For getting one specific Dev           | id in params                 | Dev object                |
| /auth/:id                    |              `DELETE`          | For Deleting a Dev                     | id of Dev in params          | Json.Status                      |
| /auth/:id                    |              `PATCH`           | For Updating a Dev                     | id and attributes in schema  | Json.Status                      |
| /auth/category/:category     |              `GET`             | for getting dev of category            | category in params           | Devs objects              |
## Event Routes
| Route                        | Method                         | Working                                | Requested data               | Response                  |
| ---------------------------- | ------------------------------ | -------------------------------------- |------------------------------|-------------------------- |
| /event                       |              `GET`             | For getting all Events                 | None                         | Events objects            |
| /event                       |              `POST`            | For Creating an Event                  | Full Event Schema            | Json.Status                      |
| /event/personal/:id          |              `GET`             | For getting all Personalised events    | id of Dev in params          | Events objects            |
| /event/:id                   |              `GET`             | For getting a Specific Event           | id of event in params        | Event  objects            |
| /event/:id                   |              `DELETE`          | For Deleting an Event                  | id of event in params        | Json.Status                      |
| /event/:id                   |              `PATCH`           | For updating an Event                  | id and attributes in schema  | Json.Status                      |






## Schemas can be found in /Models...



### Project Object

```json
{
  "_id" : "Mongo_id",
  "name" : "name of project",
  "Owner" : "Owner's _id",
  "team" : ["array of team memeber's _id"],
  "src" : "a string link to a image or src",
  "category" : ["Array of categories"],  
  "dob" : "date of creation",
}
```



### Devs Object

```json
{
  "_id" : "Mongo_id",
  "name" : "example",
  "status" : {
  "Onporoject" : "true/false",
  "extra" : "ofcourse if you want"
  },
  "pfp" : "a string link to a image or src",
  "Preferences" : [ "Prefrences or categoried (if any)" ],
  "dob" : "date of creation",
}
```





### Event Object

```json
{
  "_id" : "Mongo_id",
  "title" : "title of Event or post",
  "owner" : "Owner's  _id",
  "reputation_required": "reputation required to join",
  "bids": "Total no. of requests",
  "location": "Obvious",
  "likes": "likeness of project"
  "body" :{
          "description" : "Description of post or whatever you like. eg point tables and stuff",
          "tags" : "tagsof technology involved",
          "src" : "image link"
          },
  "project_id" : "id of associated project",
  "dob" : "date of creation",
}
```


### We have around 6000 fake users and 18000 fake projects with 14 lakh fake categories.  Please don't ask where did I get the data.

