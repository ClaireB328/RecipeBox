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


<br>

#### Data


|    API     | Quality Docs? | Website       | Sample Query                            |
| :--------: | :-----------: | :------------ | :-------------------------------------- |
| Recipe Puppy |      yes      | http://www.recipepuppy.com/api/| http://www.recipepuppy.com/api/?i=onions,garlic&q=omelet&p=3|

<br>

#### Component Hierarchy



```
src
|__ components/
      |__ App.js
      |__ Home.js
      |__ Nav.js
      |__ SearchResults.js
      |__ Recipes.js
      |__ App.css
```

<br>

#### Component Breakdown

> Use this section to go into further depth regarding your components, including breaking down the components as stateless or stateful, and considering the passing of data between those components.

|  Component   |    Type    | state | props | Description                                                      |
| :----------: | :--------: | :---: | :---: | :--------------------------------------------------------------- |
|    APP.js    | functional |   n   |   n   | _will be the parent component and hold all information._               |
|  Header | functional |   n   |   n   | _the header will contain the navigation._       |
|   Nav   |      |     |      | _will bring you back to homepage_      |               |
|    Search Bar    |  |   n   |   n   | _The search bar will render recipes in relation to what was searched._ |
|    Recipe    |  |   n   |   y   | _Recipes will render on this page when selected_ |
|    Footer  |  |   n   |   n   | _footer_ |

<br>

#### Component Estimates



| Task                | Priority | Estimated Time | Time Invested | Actual Time |
| ------------------- | :------: | :------------: | :-----------: | :---------: |
| App  |    H    |     3 hrs      |          |    TBD   |
| Add API |    H     |     4 hrs      |          |     TBD     |
| Add Header |    H     |     1 hr     |          |     TBD     |
| Search Bar |    H     |     4 hrs      |          |     TBD     |
| Recipes to render |    H     |     8 hrs      |          |     TBD     |
| CSS |    H     |     8 hrs      |          |     TBD     |
| Final touches |    L     |     4 hrs      |          |     TBD     |
| TOTAL               |          |     32      |         |     TBD     |

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