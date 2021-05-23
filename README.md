# Evaluate News Article with NLP

My first project in Front End Web Development Advanced from Udacity.

Building a web tool that allows client users to use Natural Language Processing (NLP) on articles from any website. 

## Used Build Tools
* HTML
* CSS
* JavaScript
* Webpack 
* Express Server
* Meaningcloud API
* Workbox for service workers
* Jest Testing

## Installation

1. Clone the repo
```
git clone <repo url>
```
2. Install npm
```
npm install

```
3. Sign up for your API key at [meaningcloud.com](https://www.meaningcloud.com/developer/create-account)

4. Configure environment variables
	1. Install dotenv
	```
	npm install dotenv
	```
	2. Create a new `.env` file in the root of the project
	3. Fill the `.env` file with your registered API key:
	```
	API_KEY=***********************************

5. You can test using Jest
```
npm run test
```
6. Start the project
```
In two terminals, run the following two commands:
```
Command | Action
:------------: | :-------------:
`npm run build-dev` | Build project
`npm run start` | Run project

7. The project will directly at http://localhost:8080/
8. Analys: submit an article URL
