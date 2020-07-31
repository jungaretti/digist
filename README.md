# Digist

Today's code snippets are ugly, static, and self-contained. Digist transforms your GitHub Gists into highly functional code snippets for the web that mimic the look and feel of VS Code. Your functions, classes, and random blobs of code have never looked better!

## Getting Started

The Digist API requires three pieces of information: a GitHub Gist ID, a primary file, and a primary slice. A Gist can contain multiple files. The "primary" file is the one that you want displayed by default. Let's digist the following Gist:

```
https://gist.github.com/jungaretti/26b7cb6545cb1cb56d9dc8ac273ee4fc
```

First, we choose the parameters that will format the digist:
- **Gist ID:** 26b7cb6545cb1cb56d9dc8ac273ee4fc
- **Primary file**: Thing.ts
- **Slice:** 4:6
- **Theme:** dark

Which we can then use to compose the following API query:
```
https://digist.azurewebsites.net/gist/26b7cb6545cb1cb56d9dc8ac273ee4fc?file=Thing.ts&slice=4:6&theme=dark
```

And this is the result:

![Sample digist](https://i.imgur.com/utRwmXX.png)

Beautiful! 😍

## Vocabulary

- **Gist:** a set of files stored on GitHub's Gist service.
- **Slice:** a subsection of a Gist for a certain file (e.g., main.js:4:6).
- **Snippet:** an embedded code viewer with two states: collapsed and expanded.

## Deployment

Digist is deployed using [Azure App Service](https://azure.microsoft.com/en-us/services/app-service/) at [digist.azurewebapp.net](https://digist.azurewebsites.net/). For more information, refer to [this guide](https://docs.microsoft.com/en-us/azure/app-service/app-service-web-get-started-nodejs).
