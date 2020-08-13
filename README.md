# CryptoBot

## Table of Content

* [General Info](#general-info)
* [Technologies](#technologies)
* [Functionalities](#functionalities)
* [Setup](#setup)

## General Info

Cryptocurrency portfolio using CryptoCompare API https://min-api.cryptocompare.com/documentation with conversion of each cryptocurrency into euros, total amount of the portfolio, percentage of each currency in the portfolio and display with a chart pie.

![CryptoBot signin page screenshot](/public/capture-login-2.PNG?raw=true)

## Technologies

Project is created with :

* React : 16.13.1
* React-router-dom: 5.2.0
* Reactstrap : 8.5.1
* Redux : 7.2.0
* Chart.js : 2.9.3
* API : CryptoCompare https://min-api.cryptocompare.com/documentation
* Firebase : 7.12.2

## Functionalities

* Create or log to your account
* Chose your favorite mode between light or dark. The mode is then saved and retrieve next time you connect.
* See the amount of your wallet at a glance
* The amount of each cryptocurrency, the percentages and the total of the wallet is updated every 10 seconds
* See the percentage of each cryptocurrency in the portfolio with clear chart pie - The chart is updated every 10 seconds
* Local date and time
* When the page is displayed, all the data is shown simultaneously with the use of a loader

## Setup

To run this project, install locally using npm :

```
$ npm install
$ npm start
```
