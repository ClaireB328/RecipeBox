![rocketman](https://media.giphy.com/media/cEYFeE4wJ6jdDVBiiIM/giphy.gif)


# PROJECT 2 README <!-- omit in toc -->

- [Project Planning](#Project-Planning)
  - [Overview](#Overview)
  - [Wireframes](#Wireframes)
  - [MVP](#MVP)
    - [Goals](#Goals)
    - [Libraries](#Libraries)
    - [Data](#Data)
    - [Component Hierarchy](#Component-Hierarchy)
    - [Component Breakdown](#Component-Breakdown)
    - [Component Estimates](#Component-Estimates)
  - [Post-MVP](#Post-MVP)
- [Project Delivery](#Project-Delivery)
  - [Code Showcase](#Code-Showcase)
  - [Code Issues & Resolutions](#Code-Issues--Resolutions)



<br>

### Overview

_Using the Recipe Puppy API, you can search an ingredient and recipes including that ingredient will show. You can click on image and recipe will show._

<br>

### Wireframes
- Mobile 
https://vectr.com/claireb328/i1BXBT4i9P
- Tablet
https://vectr.com/claireb328/i1BXBT4i9P?page=2
- Desktop
https://vectr.com/claireb328/i1BXBT4i9P?page=3

<br>

### MVP

- linking API
- search to render results
- recipe ingredients to be properly displayed


<br>



#### Libraries

|     Library      | Description                                |
| :--------------: | :----------------------------------------- |
|   React Router   |  |
|   Storybook   | css/wireframes |



<br>

#### Data


|    API     | Quality Docs? | Website       | Sample Query                            |
| :--------: | :-----------: | :------------ | :-------------------------------------- |
| Edamam |      yes      | https://api.edamam.com/search?q=${input}&app_key=${apiKey}&app_id=ec9b097c|

<br>

#### Component Hierarchy



```
src
|__ components/
      |__ App.css
      |__ App.js
      |__ Button.js
      |__ Footer.js
      |__ Form.js
      |__ FormButton.js
      |__ Header.js
      |__ Recipe.js
      |__ SearchResults.js
      |__ SiteHeading.js
      
```

<br>

#### Component Breakdown


|  Component   |    Type    | state | props | Description                                                      |
| :----------: | :--------: | :---: | :---: | :--------------------------------------------------------------- |
|    APP.js    | functional |   y   |   y   | _will be the parent component and hold all information._               |
|  Header | functional |   n   |   y   | _the header will contain the navigation._       |
|   Nav   |      |     |      | _will bring you back to homepage_      |               |
|    Search Bar    |  |   n   |   n   | _The search bar will render recipes in relation to what was searched._ |
|    Recipe    |  |   n   |   y   | _Recipes will render on this page when selected_ |
|    Footer  |  |   n   |   n   | _footer_ |

<br>

#### Component Estimates



| Task                | Priority | Estimated Time | Time Invested | Actual Time |
| ------------------- | :------: | :------------: | :-----------: | :---------: |
| App  |    H    |     3 hrs      |          |    8 hrs  |
| Add API |    H     |     4 hrs      |          |     8hrs    |
| Add Header |    H     |     3 hr     |          |     1 hr     |
| Search Bar |    H     |     4 hrs      |          |     2hrs     |
| Recipes to render |    H     |     8 hrs      |          |     4hrs     |
| Storybook |    L     |     3 hrs      |          |     8 hrs     |
| CSS/Final touches |    L     |     6 hrs      |          |     8 hrs     |
| TOTAL               |          |     32      |         |     39    |

<br>


### Post-MVP

> 
- _able to 'heart' a recipe._
- _create an account and keep track of recipes._

<br>

***

## Project Delivery

### Code Showcase

> 

### Code Issues & Resolutions

> 