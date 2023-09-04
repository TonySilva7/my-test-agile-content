<img src="https://agilecontent.com/wp-content/uploads/2023/02/agile_content_RGB_color_black_green.webp" height="50">

# Technical Test [@Tony](https://github.com/TonySilva7)

### Jose Antonio Sousa da Silva

This project intends to meet the requirements for a technical test. The project implements <u>Atomic Design</u> and has <u>different layers</u> for state management. It is <u>Dockerized</u> and served in PRD with <u>NGINX</u>. Also have a <u>script to change the package manager</u>.

It uses technologies such as:

- `"react": "^18.2.0"`
- `"typescript": "^4.9.5"`
- `"vite": "^4.4.9"`
- `"tailwindcss": "^3.3.3"`
- `"react-router-dom": "^6.15.0"`
- `"react-hook-form": "^7.45.4"`
- `"yup": "^1.2.0`
- `"react-redux": "^8.1.2"`
- `"axios": "^1.5.0"`

---

- `"@faker-js/faker": "^8.0.2"`
- `"eslint": "^8.35.0"`
- `"prettier": "^2.8.4"`
- `"@testing-library/react": "^14.0.0"`
- `"postcss": "^8.4.29"`
- `"husky": "^8.0.3"`
- `"lint-staged": "^13.3.0"`
- `"@commitlint/config-conventional": "^17.7.0"`

## &#9881; Set up

> <br>&#128161; If you want **to use `yarn` instead of `pnpm`**, after downloading or cloning the project, open a terminal in the project root and run the command: `chmod +x setup-with-yarn.sh`, then run the command: `./setup-with-yarn.sh`, and **follow the project's local README** instead of the README on Github. This will change all scripts, hooks, including the Dockerfile to use yarn. <br><br>&#9888; Note that this _**script only works for MacOS and Linux**_.<br><br>

- Download or clone the project.
- Run the command below to install the project dependencies (you need `pnpm` installed):

  ```shell
  pnpm i
  ```

- Optionally, run the command below:

  ```shell
  pnpm prepare
  ```

## &#128640; Run

- Run the command below to start the project:

  ```shell
  pnpm start:dev
  ```

## &#129514; Tests

- Run the command below to run the tests:

  ```shell
  pnpm test
  ```

## &#128293; Build

- Run the command below to build the project:

  ```shell
  pnpm build
  ```

## &#128064; Preview

- Run the command below to run the project in preview mode:

  ```shell
  pnpm preview
  ```

## &#128051; Production

- To run in production mode, at the root of the project run the command below to build an image and initialize a container with an instance of the application, served by `nginx` (you need to have docker installed and configured on your machine):

  ```shell
  docker-compose up -d
  ```

- To stop the container run the command:

  ```shell
  docker-compose down
  ```
