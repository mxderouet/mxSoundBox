## Project Setup
First, make sure you have `node.js`, `yarn`, and the new **Expo CLI** installed on your machine:

1. Install `node.js` from <https://nodejs.org/en/download/>
2. Install Yarn by running: `npm install -g yarn`
3. Install the new Expo CLI by running: `npm install -g expo`
4. Install the **EAS CLI** (for building the app) by running: `npm install -g eas-cli`

## Building for Android (APK)
To build the APK using the preview profile, you will need to use **EAS Build** instead of the legacy `expo-cli` build command. Follow these steps:

1. Make sure you're logged in to Expo:

```bash
eas login
```

2. Run the following command in your terminal or command prompt to build the APK:

```bash
eas build -p android --profile preview
```

This will generate the APK using EAS Build. The APK will be available for download once the build completes successfully.

## Starting the Web App
To start the web app, run the following command in your terminal or command prompt:

```bash
npm run web
```
This command will initialize the development server and open the web app in your default web browser at <http://localhost:19002>.
