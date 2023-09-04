<img src="https://agilecontent.com/wp-content/uploads/2023/02/agile_content_RGB_color_black_green.webp" height="50">

# Technical Test [@Tony](https://github.com/TonySilva7)

### Jose Antonio Sousa da Silva

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
