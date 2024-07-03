<!-- Banner Image, Landing Page Of Computer Vision Site -->
<div align="center">
  <br />
    <a href="">
      <img src="https://firebasestorage.googleapis.com/v0/b/karizmatik-14de4.appspot.com/o/RecipeAppBanner.png?alt=media&token=c8ed26c6-a3c5-4198-9066-3ee23825356c" alt="Project Banner">

  <div>
    <img src="https://img.shields.io/badge/-ReactNative-black?style=for-the-badge&logoColor=white&logo=react&color=61DAFB" alt="react.js" />
    <img src="https://img.shields.io/badge/Nativewind-black?style=for-the-badge&logoColor=white&logo=tailwindcss&color=06B6D4" alt="nativewind" />
    <img src="https://img.shields.io/badge/expo-black?logo=expo&color=black" alt="Expo" />

  </div>

  <h1 align="center">Recipe App</h1>

   <div align="center">
     <h4>For Lovers of cooking</h4>
    </div>
</div>

## 📋 <a name="table">Table of Contents</a>

1. 🤖 [Introduction](#introduction)
2. ⚙️ [Tech Stack](#tech-stack)
3. 🔋 [Features](#features)
4. 🤸 [Quick Start](#quick-start)
5. 🕸️ [Snippets](#snippets)

## 🚨 About

This repository contains the single client side code for the recipe app.

## <a name="introduction">🤖 Introduction</a>

This simple project implements the basics of React Native, React Navigation and networking with React Native.

## <a name="tech-stack">⚙️ Tech Stack</a>

- React Native - for the front end.
- Nativewind css - for the styling.
- React Navigation - for the routing.
- Expo - framework for managing project.

## <a name="features">🔋 Features</a>

👉 **Home Screen**: A home screen, just like a feed screen that shows users many different random meals.

<img src="https://firebasestorage.googleapis.com/v0/b/karizmatik-14de4.appspot.com/o/Simulator%20Screenshot%20-%20iPhone%2015%20-%202024-07-02%20at%2022.40.31.png?alt=media&token=4eb97b2c-4937-430e-bfbe-caf99cbfc92b">

👉 **A Left Drawer Navigator**: A left drawer that opens up upon tab of a burger menu which lets users navigate between screens.

<img src="https://firebasestorage.googleapis.com/v0/b/karizmatik-14de4.appspot.com/o/Simulator%20Screenshot%20-%20iPhone%2015%20-%202024-07-02%20at%2022.40.28.png?alt=media&token=80cb51fe-6855-4f17-8a5a-be390a4fcd7d" alt="Try page">

👉 **A Details Page**: A page that shows the ingredients, cook timing and process of cooking.

<img src="https://firebasestorage.googleapis.com/v0/b/karizmatik-14de4.appspot.com/o/Simulator%20Screenshot%20-%20iPhone%2015%20-%202024-07-02%20at%2015.53.18.png?alt=media&token=e19cacd5-81e0-4168-b133-d12bc8237aa7" alt="Database">

## <a name="quick-start">🤸 Quick Start</a>

Follow these steps to set up the project locally on your machine.

**Prerequisites**

Make sure you have the following installed on your machine:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en)
- [npm](https://www.npmjs.com/) (Node Package Manager)

**Cloning the Repository**

```bash
git clone https://github.com/vroymv/Recipe-App.git
cd Recipe-App
```

**Installation**

Install the project dependencies using npm:

```bash
npm install
```

**Running the Project**

```bash
npx expo start
```

**Setup NativeWind**

Folloow these instructions to set up tailwindcss(https://www.nativewind.dev/quick-starts/expo)

**Setup Recipe API**

Create An Account on Edamam <br>
I useed this api, feel free to use any other

https://developer.edamam.com/edamam-docs-recipe-api<br>

## <a name="snippets">🕸️ Snippets</a>

**Modify the following In your Code**

<details>
<summary><code>api/index.js</code></summary>

```javascript
Uncomment the follwing code

export async function getRecepes() {
  try {
    // const response = await fetch(
    //   "https://api.edamam.com/api/recipes/v2?type=public&q=chicken&app_id=19935929&app_key=%20c9e19a19139e42c68e4503e45dca5723&diet=balanced&cuisineType=Indian&mealType=Dinner&mealType=Lunch&mealType=Snack&imageSize=REGULAR&random=true&field=uri&field=label&field=image&field=source&field=ingredientLines&field=totalTime"
    // );
    // if (!response.ok) {
    //   throw new Error("Server response was not  okay");
    // }
    // const Recepes = await response.json();
    // return Recepes.hits;
```

</details>

<details>
<summary><code>api/index.js</code></summary>

```javascript
// Delete the return Array with it's static data

return [
      {
        recipe: {
          uri: "http://www.edamam.com/ontologies/edamam.owl#recipe_0450da44878f023f67cdce69713d1ace",
          label: "Black Beluga Lentils",
          image:
            "https://edamam
```

</details>

<details>
<summary><code>Fit in your api url gotten from edamam</code></summary>

```javascript
const response = await fetch(
  "https://api.edamam.com/api/recipes/v2?type=public&q=chicken&app_id=19935929&app_key=%20c9e19a19139e42c68e4503e45dca5723&diet=balanced&cuisineType=Indian&mealType=Dinner&mealType=Lunch&mealType=Snack&imageSize=REGULAR&random=true&field=uri&field=label&field=image&field=source&field=ingredientLines&field=totalTime"
);
```

</details>
