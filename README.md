# Digist

Today's code snippets are ugly, static, and self-contained. Digist transforms your GitHub Gists into highly functional code snippets for the web that mimic the look and feel of VS Code. Your functions, classes, and random blobs of code have never looked better!

## Getting Started

### Vocabulary

- **Gist:** a set of files stored on GitHub's Gist service
- **Slice:** a subsection of a Gist for a certain file (e.g., main.js:4:6)
- **Snippet:** an embedded code viewer with two states: collapsed and expanded

### Installation

Installing Digist is a walk in the park. Just clone this repo, install its dependencies with npm, and start the Express server.

```shell
npm install

# Start Express server on port 3000
npm start
```

## Usage

### Render a Snippet

`https://localhost:3000/gist/{gist_id}?file={file}&slice={slice}&theme={theme}`

| Name      | Description                                                                    |
| --------- | ------------------------------------------------------------------------------ |
| `gist_id` | Gist ID from GitHub                                                            |
| `file`    | The default file shown by the snippet                                          |
| `slice`   | The lines of `file` shown by the snippet, formatted as `{startLine}:{endLine}` |
| `theme`   | Optional: either `dark` (default) or `light`                                   |

Here's a sample request:

`https://localhost:3000/gist/26b7cb6545cb1cb56d9dc8ac273ee4fc?file=Thing.ts&slice=4:6&theme=dark`

Here's the result:

![Sample of rendered snippet](https://i.imgur.com/utRwmXX.png)

Beautiful! 😍

## Deployment

Digist is deployed using [Azure App Service](https://azure.microsoft.com/en-us/services/app-service/) at [digist.azurewebapp.net](https://digist.azurewebsites.net/). For more information, refer to [this guide](https://docs.microsoft.com/en-us/azure/app-service/app-service-web-get-started-nodejs).
