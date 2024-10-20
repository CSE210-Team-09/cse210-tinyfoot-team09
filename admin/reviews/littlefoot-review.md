# LittleFoot Code Review

## Design Decisions:

The Littlefoot repository contains a CHANGELOG.md file with details on the differences between it and Bigfoot, as well as notes on changes, bug fixes and additions. This is useful for developers who are familiar with Bigfoot and would like to learn about what Littlefoot offers in terms of features. This document also mentions that the author decided to follow a “decision, not options” philosophy when developing Littlefoot, giving emphasis to simplicity in use over adding extra features. Notably, the settings.ts file provide a variety of options that user can override according to their needs, such as activateDelay (to indicate the delay before the footnote is activated) and dismissOnUnhover (which determines whether the footnote automatically closes when the mouse is moved away from it).

Additionally, while Bigfoot relies on JavaScript and JQuery, Littlefoot utilizes TypeScript for its code, which provides stronger type checking and makes the code more stable and reliable. The tsconfig.json file in the repository helps control how the TypeScript files are converted to JavaScript, allowing the package to work smoothly across different environments. However, it is worth noting that the tsconfig.json file only converts the files found in the src folder.

The repository contains a .vscode folder, which specifies the settings and configurations to work with Littlefoot using VS Code. This allows the user to quickly start working on modifying Littlefoot as needed during development.

Finally, instead of having most of the code in a single file like Bigfoot, Littlefoot splits its code into a variety of files in the src folder, with some in the dom subfolder. This allows for greater separation of concerns between the different modules of code and, given the existence of the dom subfolder, the author clearly had loose coupling in mind when designing the package. The tradeoff, however, is that code execution now has to jump between different files to perform its needed functions, which could potentially decrease performance.

## Code Organization and Quality:

The code is organized across a variety of folders.

The .github/workflows folder contains two CI workflows. The first is a codeql-action used for scanning code quality when a pull request is raised. The other is for uploading coverage reports using Codecov. The .husky folder helps to manage the Git hooks, such as .gitignore, commit-msg and pre-commit. The .vscode folder contains customization specific to VS Code behavior. The assets folder simply contains a demo GIF file to showcase the package behavior. The cypress folder provides an open-source framework with tools for end-to-end testing and fixtures. The src folder contains the typescript and css code files, with the dom subfolder having all DOM-related typescript files. Finally, the test folder contains typescript code files and a few html files for testing.

Overall, the code is well structured, with each file containing no more than a few hundred lines. This makes the code easier to read for a user who wants to understand how Littlefoot works.


## Repository Organization and Quality:

The repository contains a README.md file with an overview of how to install and utilize the library, as well as configure basic options. This README file discusses various methods one can use apart from those used in the code, which is useful information to help the user understand the package, allowing them to better experiment with the available methods.

In the Usage section of the README, the instructions are not very clear for a person new to web development, only providing a markup snippet without adding further details, and mentions the “MultiMarkdown” format. Assuming that the user is a beginner-level web developer with no experience in HTML, CSS, and JavaScript, they might not be familiar with the “markup” term, and may not understand what “MultiMarkdown” refers to. This could be easily fixed by specifying that the snippet of code is HTML and by adding details on “MultiMarkdown.” A similar issue appears in the same section with JavaScript code, where the author does not specify that the snippets of code are for JavaScript and therefore should be in a JavaScript file (or in a script inside an HTML file).

Unlike Bigfoot, however, the README for Littlefoot contains usage instructions for how to use the library across different platforms, such as WordPress and Gatsby, as well as how to use Littlefoot with a CDN. These sections are brief but straightforward, providing links to external pages for setup information. The README also contains details on each CSS property in the library, which is greatly useful information to understand what each core function does and how to use it.

## Tool Quality:

For installation, the repository provides indications using two package managers: NPM and Yarn.

NPM is a package manager for open-source software, with capabilities to install Littlefoot. It is relatively easy to use, reducing the installation process to a single command line that installs the necessary modules to get Littlefoot working. However, the README does not provide further details on this tool, and assumes that the user knows how to utilize NPM already. This is likely true for experienced developers, but a beginner who does not know of NPM would have to research on their own to learn more about the tool. The README could easily make this step much easier by providing a link to a setup guide of NPM for Windows, macOS, and Linux machines

The second package manager, Yarn, is an alternative to NPM, but the README repeats the same mistake by not providing any details on what the tool is and where to download it. A beginner developer would have to rely on their own research to know about this manager, which could have been avoided with a link to an external page with install instructions.

Overall, the README provides sufficient options to set up Littlefoot. Both NPM and Yarn are easy to work with once installed, reducing the installation process to a single command line. However, the instructions could have been clearer in regard to which folder the command should be run in, and it could have also provided install instructions with PNPM, another package manager that is popular for its disk space efficiency, effective dependency resolution, and runtime speed.


## Tooling Challenges:

The NPM-based installation does not work very well with windows machines. The NPM install for updates had issues, causing an error code to trigger. This issue was not because of NPM itself, but rather because of folder referencing, which does not take into account differences in different operating systems. Furthermore, the NPM version was not provided, making it challenging to determine which version should be installed. 

As mentioned in previous sections, the README file is not clear in its usage steps, especially for Windows machines. It only provides the NPM/Yarn command line to run, without making note of how different operating systems should get NPM/Yarn installed. This can easily be remedied by providing links to external pages with installation details for the correct version of NPM or Yarn.

Alongside the referencing issues, the README did not indicate where to run the respective command line: a beginner developer may not know that they should run the command in the terminal inside the project folder, which could lead to unnecessary confusion. This issue can easily be fixed by specifying that the command must be run inside the project folder.

To add to these issues, the repository does not contain a demo HTML file to showcase the library’s features. Without such a file, it was challenging to know if Littlefoot was working as expected. By having a demo file, the user would be able to quickly verify that Littlefoot works as expected, and potentially start experimenting with its features as soon as they finish installing the library.

Finally, the source code for Littlefoot is not properly commented. This might be okay if the user only wanted Littlefoot for their own project and did not plan to look at how the library works. However, if the user faces an issue in their project, or if the user is curious about the inner workings of Littlefoot, they would not be able to easily read through the source code. Additionally, if the user planned to fork the project to use as a base for their own project, this problem is even more problematic because, if an issue were to occur, the user would have to invest a significant amount of time with little progress being done in their own project.

## Would we use it?

If we needed a library to provide footnotes in our site, we would use Littlefoot because of its simplicity in set up and use. The codebase contains CI workflows to ensure that the code quality is maintained, and the codebase has been updated frequently over a long period of time. This makes the tool more dependable and useful in a project.

## What changes would you suggest based on your pain points to improve the littlefoot?

The README contains useful information, but the usage section with Yarn and NPM could be expanded upon, providing more specific language in how to use the library as well as extra details to get Littlefoot installed. More information should be added for Windows, specifying the differences in referencing to make sure Littlefoot runs as expected. Furthermore, an HTML demo file should be included in the repository to be used to verify that Littlefoot works as expected.

In regards to the code, the files should be thoroughly documented, with file headers and inline comments to specify what each file and module does. That way, developers trying to understand how Littlefoot works will have an easier time following the code from beginning to end.

If possible, an installation process should be added for PNPM. While having a single installation process is sufficient, PNPM is a popular package manager and some developers prefer it over Yarn and NPM due to its disk space efficiency. Having an installation process for PNPM users would increase the library’s accessibility as an open-source package.

We would replace TypeScript with regular JavaScript. Instead of having TypeScript convert the code into JavaScript, we could directly code the JavaScript. We would lose the type safety advantage of TypeScript, but there will be more control about the JavaScript code in the library, which would avoid the issue of the TypeScript code generating inefficient JavaScript code, and make it more readable for later use.

## Demo - color change

### [Video Link](CSE_210_Team_9_Littlefoot_Demo.mp4)

The demo video shows the basic version of little foot loaded in a simple html file. Then a minor color change is made to the button of the footnote is made in the source file. then npm install is run to make the node_module folder. It can be seen that the html page is changed with the color change.
