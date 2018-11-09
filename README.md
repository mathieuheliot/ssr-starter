# Server Side Renderering with PHP and JS

Proof of concept and boilerplate of Server Side Rendering of ReactJS application inside templates files from PHP.

## Installation
1. `npm install`    
2. Create config.php file at src/php/config/ by using config.php.template file

## Usage
### NPM
Development commands.
Execute `npm run [TASK]`, where TASK can be one of the following values:
- `build`: Compile an application version ready to deploy in the /dist folder
- `serve`: Serve content with server side rendering at http://localhost:3000
- `start`: Launch environnement an hot reload process at http://localhost:3001

### Docker
Production running process
- `docker-compose up -d`: Launch PHP and NodeJS container with full SSR rendering

## Sources
### ReactJS and Express:
- https://scotch.io/tutorials/react-on-the-server-for-beginners-build-a-universal-react-and-node-app
- https://medium.freecodecamp.org/server-side-rendering-your-react-app-in-three-simple-steps-7a82b95db82e
- https://medium.freecodecamp.org/demystifying-reacts-server-side-render-de335d408fe4
- https://medium.com/@andreasmcd/how-my-team-converted-our-website-from-jquery-to-react-in-small-steps-cd4390f0a146
- https://medium.com/@to_pe/how-to-add-react-to-a-simple-html-file-a11511c0235f
- http://blog.theodo.fr/2018/04/react-server-side-rendering/

### SSR Axios:
- https://medium.com/@phoebe.greig/headache-free-isomorphic-app-tutorial-react-js-react-router-node-js-ssr-with-state-and-es6-797a8d8e493a

### Nginx configuration:
- https://github.com/gorangajic/isbot
- https://geekflare.com/nginx-static-files-node-js/
- https://medium.com/@utkarsh_verma/configure-nginx-as-a-web-server-and-reverse-proxy-for-nodejs-application-on-aws-ubuntu-16-04-server-872922e21d38

### Docker configuration:
- https://github.com/mattrayner/docker-lamp
- https://github.com/naga3/docker-lamp