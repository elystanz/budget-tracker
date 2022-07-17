# Budget Tracker!
# Table of Contents
1. [Introduction](#introduction)
2. [Application](#application)
3. [Roadmap](#roadmap)
4. [Contributions](#contributions)
5. [Authors](#authors)
6. [License](#license)


## <a id="introduction">Introduction</a>
Budget Tracker is a great and easy way to keep track of your daily transactions. Log today's paycheck, subtract the coffee price from the afternoon, and keep an eye on what your friends and family may owe you.

## <a id="application">Application</a>
Here is the application in use:

![budgettrackerdemo](https://user-images.githubusercontent.com/95983252/179381846-6c5ce7e1-60a9-4782-9bcd-75643cacdc7d.gif)

## <a id="roadmap">Roadmap</a>
Future development of the Budget Tracker includes being able to assign dates to transactions, therefore keeping a more accurate log of your payments and earnings.

## <a id="contributions">Contributions</a>
Please feel free to make a pull request or submit an issue to troubleshoot any bugs you come across.

This application requires the following dependencies to run, which are already declared within the package.json file:
* compression (^1.7.4)
* dotenv (^16.0.1)
* express (^4.17.1)
* mongoose (^5.13.14)
* morgan (^1.9.1)

## <a id="authors">Authors</a>
[Elyse Stanziale](https://github.com/elystanz) is the main contributors and the creators of this application.

## <a id="license">License</a>
This application is protected under the ISC license.

## <a id=#status>Project Status</a>
This project is still in development. While localstorage persists well over localhost, once deployed throuhg Heroku the application loses data persistence. This can be fixed by manually creating a service worker. The file exists in this code, but currently must be initiated by the user for offline functionality. This seems to be common but feels annoying, so another plan for the future is to streamline offline use.
