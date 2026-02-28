## Sprig + Ionic + Capacitor Quickstart

This is a barebones implementation of Sprig inside an Ionic/Capacitor project.

### Setup
1. Clone the repo.
2. Run `npm install`.
3. Open `src/main.js` and replace `YOUR_ENV_ID` with your Sprig Environment ID.

### Running on Web
1. Run `npm run dev`.
2. Open page on localhost.

### Running on Android
1. Build the web project: `npm run build`
2. Sync with Capacitor: `npx cap sync android`
3. Open in Android Studio: `npx cap open android`
4. **Important**: In Android Studio, you may need to run **Build > Clean Project** before hitting Play to ensure styles load correctly.

### Running on iOS
1. Build the web project: `npm run build`
3. Sync with Capacitor: `npx cap sync ios`
4. Open in Xcode: `npx cap open ios`
5. **Important**: In Xcode, select your target device or simulator and hit the **Play** button. 
   * Note: Capacitor uses a WKWebView on iOS, which handles the Sprig SDK similarly to the Android WebView.
