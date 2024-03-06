# mxSoundBox

# mxSoundBox - Readme

## Table of Contents
1. [Project Setup](#project-setup)
2. [Building for Android (APK)](#building-for-android--apk--)
3. [Starting the Web App](#starting-the-web-app--)

## Project Setup
First, make sure you have `node.js`, `yarn` and Expo CLI installed on your machine:

1. Install `node.js` from <https://nodejs.org/en/download/>
2. Install Yarn by running: `npm install -g yarn`
3. Install Expo CLI by running: `npm install -g expo-cli`

## Building for Android (APK)
To build the APK using the preview profile, run the following command in your terminal or command prompt:

```bash
expo build -p android --profile preview
````
This will generate the APK file in the android/app/build/outputs/apk directory.

## Starting the Web App
To start the web app, run the following command in your terminal or command prompt:

```bash
npm run web
```
This command will initialize the development server and open the web app in your default web browser at <http://localhost:19002>.
