# Photo-Gallery - Angular Exam Project

Single Page Application created with Angular FE, Node.JS/Express.js for BE and MongoDB.  

![image](https://user-images.githubusercontent.com/99253584/208249446-bf391562-7841-4453-a63d-355b4ff86de2.png)

The app works as a gallery and supports several functionalities: 

Registering and logging users. Register and Login components both have quick links for each other. 

Guests have access to the home page and the three latest photos uploaded by the registered users. A quick link is provided for logging in to unlock the full content.

Registered users have access to the full content of the website. Their personal uploads, content and profile information is stored in the profile tab. Clicking on the title of the photo redirects logged in users to a photo-details page from where they can edit/delete the photo if they are the owners. If they are not, only the like button will be availabe. Respectively, photo owners cannot like the photo themselves.

Users can upload their own photos, add title, description, price and attach a link for their photos. Upon creation/deletion of a personal photo, user is redirected back to their profile tab. In case the user has not added any photos yet or deleted them all, there is a quick link provided in the profile tab that redirects them straight back to the upload option.

The database models provide links between themselves - created items have ownerId which links them to their creators. The user model contains an array of uploaded photos so they can be extracted by userId. All photos uploaded by users are created with timestamps so the content can be sorted from the most recent onwards. 

Like-functionality to be implemented on a later stage. 

![image](https://user-images.githubusercontent.com/99253584/208249493-c4c8b110-f196-4f12-8cb3-7fa7c0e7f56f.png)

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.0.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
