For testing, you first have to clone the repo and then install the npm dependencies "$ npm install"
Now, in the project directory, you can run "$ npm start".
Some links that I found useful for this part were - https://medium.com/geekculture/how-to-test-a-local-react-npm-package-still-on-development9bed7f199164
                                                  - https://create-react-app.dev/docs/getting-started/
                                                  - https://www.digitalocean.com/community/tutorials/how-to-set-up-a-react-project-with-create-react-app


The hierarchy will look something like this:

.src
  |___assets(here are all the pictures that are used)
  |
  |___components(here i implemented the NavBar)
  |
  |___parts(here are other parts of the page such as the Footer, the MostViewed section etc)
  |
  |___styles(here are the css files)


In App.js are all the components and parts of the page ordered as they appear on the page.
