<br />
<p align="center">
  <p align="center">
    Application build in ReactJS using TypeScript along with Redux
   </p>
</p>


### Built With
These are few libraries/plugins I used in this approach apart from NextJS.

* [ReactJS](https://reactjs.org/)
* [Redux](https://redux.js.org/)
* [Typescript](https://www.typescriptlang.org/)
* Linting with [ESLint](https://eslint.org/)
* Formatting with [Prettier](https://prettier.io/)
* Testing with [`react-testing-library`](https://testing-library.com/docs/react-testing-library/intro)

### To run once code kept in **src/utils**

   ```sh
    node src/utils/once
   ```

### Prerequisites
To begin with I assume you have NodeJS installed in your machine.

### Installation

1. Clone the repo
   ```sh
    https://github.com/MohsinCG/react-hooks.git   ```
2. Install NPM packages
   ```sh
   npm install
   ```


<!-- SCRIPTS -->
## Scripts
Below are the scripts that can be useful to run application post installation

### To run applicaton on Development server
 ```sh
   npm start
   ```

### To Create a build
 ```sh
   npm run build
   ```
   
### To run unit test
 ```sh
   npm run test
   ```

### To run unit test and update snapshot
 ```sh
   npm run test -- -u
   ```
### To run unit test coverage report
 ```sh
   npm run test:coverage
   ```
### To run unit test coverage report and update snapshot
 ```sh
   npm run test:coverage -- -u
   ```
Note: Once you run the above command you can go to project and go inside coverage folder and open index.html, this will give you the full unit coverage report
of all the files. And once you run above command you will also see a coverage summary on your command prompt.
Below is the one generated from above command:
![image](https://user-images.githubusercontent.com/22741874/109169895-2e35f100-7778-11eb-8df3-ec5fff31aef8.png)
      
### Lint Check
 ```sh
   npm run lint
   ```
### Lint auto fix
 ```sh
   npm run lint:fix
   ```

## Components Screenshots
 ### Buttons
![image](https://user-images.githubusercontent.com/22741874/109172568-d482f600-777a-11eb-9b55-1813a45f96c1.png)

 ### Cards
![image](https://user-images.githubusercontent.com/22741874/109172742-04ca9480-777b-11eb-85db-c7489c03225d.png)


## Profiler

### Initial render:
![image](https://user-images.githubusercontent.com/22741874/109171419-ad77f480-7779-11eb-97f3-134028d0d83c.png)


### Renders on interval of five seconds, if you notice below after first render SelectComponent is never re-renders again.

![image](https://user-images.githubusercontent.com/22741874/109171820-08a9e700-777a-11eb-9aa5-85d2813354cc.png)
![image](https://user-images.githubusercontent.com/22741874/109171982-33943b00-777a-11eb-93dd-6b8dc04655bc.png)
![image](https://user-images.githubusercontent.com/22741874/109172114-54f52700-777a-11eb-8303-a6f052c95a8d.png)
