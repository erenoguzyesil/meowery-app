# Meowery

## Description

In Meowery, cats of the internet gather up to showcase their adorability within randomly selected GIFs worldwide! On top of the application's carefree design, settle down and let yourself free from the hassle of human society -
just delve into the world of felines and partake in their meowery!

[Read more on itch.io](https://dancingjovialpenguin.itch.io/meowery)

## Installation

Installation through itch.io can be restrained because of the app's lack of code-signing and notarization. Certain workarounds have been provided on the itch.io page.

Regardless, you can also run the application on your own machine through this numbered process involving the creation of two separate directories:

### App Directory

1. Fork this GitHub repository, create a directory for the application's contents, and clone your forked repository there.
2. Install the necessary NPM dependencies, which are listed on `package.json`, by running `npm install`. A `node_modules` folder will appear inside the app directory.
3. Create an `.env` file on the root of the app directory, where you're soon going to provide a URL from your server that fetches GIFs from Tenor API.

### Server Directory

4. Fork the [meowery-server](https://github.com/erenoguzyesil/meowery-server) repository, create another directory for the server, which is going to extract GIFs and deliver them to the application, and clone your forked repository on this directory.
5. Run `npm install` to gather the necessary dependencies.
6. Create an `.env` file, and type in a Tenor API key as assigned to a key called `TENOR_API_KEY` ([grab one here](https://developers.google.com/tenor/guides/quickstart)):
```
TENOR_API_KEY=your_tenor_api_key_goes_here
```
7. Run `node index.js` to host the server locally or connect it to a hosting service. If hosting locally, the server will be listened on `localhost:3001`
8. Copy this server URL, which sends GIF links as response.

### Final Steps
9. **Move to the app directory.** In the `.env` file there, paste the server URL as assigned to a key called `SERVER_URL`

```
SERVER_URL=https://localhost:3001/
```
10. Run `npm run start` in the same directory - the app will execute.

11. **(optional)** Run `npm run dist-all` to package the application and create distributables into an `out/` directory on the parent of your app directory.

Finally, this is the expected file structure:

```
app/
    assets/
    node_modules/
    scripts/
    styles/
    templates/
    .env (-> SERVER_URL here)
    .gitignore
    LICENSE
    main.js
    package-lock.json
    package.json

out/

server/
    node_modules/
    .env (-> TENOR_API_KEY here)
    .gitignore
    index.js
    package-lock.json
    package.json
```

## Resources

Promotional graphics for the application were created on Krita, and the GIFs are extracted off Tenor API. 

On the backend, various NodeJS frameworks, including *Electron*, *node-fetch*, and *dotenv*, made this application feasible overall.

Moreover, *Express*, *express-rate-limit*, *node-fetch*, and *Render* were used to configure the server that delivers the GIFs to clients. [See  source code for the server setup.](https://github.com/erenoguzyesil/meowery-server)

Lastly, the application was packaged and made distributable through *electron-builder*.
