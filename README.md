# Single Page Applications Sprint Challenge

**Read these instructions carefully. Understand exactly what is expected _before_ starting this Sprint Challenge.**
**READ ALL INSTRUCTIONS BEFORE REACHING OUT TO ASK A QUESTION!!**
(that above part was because the FAQs section answers 75% of questions)

This challenge allows you to practice the concepts and techniques learned over the past sprint and apply them in a concrete project. This sprint explored **single page applications**. During this sprint, you studied **routing, forms, and testing in cypress**. In your challenge this week, you will demonstrate your mastery of these skills by creating **Lambda Eats**, a website designed to bring food to hungry coders.

This is an individual assessment. All work must be your own. Your challenge score is a measure of your ability to work independently using the material covered through this sprint. You need to demonstrate proficiency in the concepts and objectives introduced and practiced in preceding days.

You are not allowed to collaborate during the sprint challenge.

## Full Time Students

_You have until 5pm PST to complete this challenge. The challenge is available from midnight on Thursday. However you should not be coding through the night; rather you can wake up on Friday and start coding at an hour you choose, rather than waiting for a unified start time. Ideally, you will be writing the majority of the code during the time block allocated on your calendar (9am to 1pm PST). And if you need extra time, there is a second time block allocated from 3pm - 5pm PST. CodeGrade submissions cannot be accepted beyond this time. Set up CodeGrade before you start coding to avoid common problems._

## Introduction

In this challenge you will be working from the `Lambda Eats` homepage to create a functional `Pizza?` button that leads to a build your own pizza custom form.

You may use the following wireframes (also in a folder above) as guidance as you design your site but it is not required that you do so.

[Form](https://tk-assets.lambdaschool.com/d43783ef-e6a8-4154-ba68-430e2275fddc_Form.png)

[Home Page](https://tk-assets.lambdaschool.com/ed737cf5-723e-428d-9b25-192143c8b71f_HomePage.png)

[Confirmation](https://tk-assets.lambdaschool.com/a0f43a34-9fab-4d2b-89f7-e23b22d32964_Pizza.gif)

### Commits

Commit your code regularly and meaningfully. This helps both you (in case you ever need to return to old code for any number of reasons) and your team lead as the evaluate your solution.

## Interview Questions

Demonstrate your understanding of this week's concepts by answering the following free-form questions. Edit this document to include your answers after each question.

1. In 1-2 sentences, explain what React's `useRouteMatch` hook is used for.

    - useRouteMatch is particularly helpful whilst matching <Links> to their <Routes> within Component urls. Let's say (in the case of this project), if i did the stretch and wanted to pass around more props and more Links to more Components, useRouteMatch would have allowed me to to this with more fluidity. useRouteMatch takes a URL and a PATH as arguments and matches (as in the name) them together easily. These are then matched to the current url, so that we dont have to type and retype.
    
    useParams is used for if i wanted to allow one person's the opportunity to order multiple pizzas under their name (singular). If i would have done the stretch, (i am too scared to break things anymore with this test, but..) I would have gone about this in such a way as to create a "/cart/:${pizzaOrder.name}" which would provide a change in url endpoint based on their name input. 
    This way if Terry wanted to order multiple pizzas, we would see his pizzas in "{url}/cart/Terry" and if Tim wanted to order his own, we would see ".../cart/:Tim" in the url. I could accomplish this using useRouteMatch in order to bring me dynamic url matching.


1. How would you explain form validation to someone who has never programmed before?

    - Form Validation is what I believe they call in most industries, "idiot proofing"... Form vaidation is the red error messages that you get when filling out a form online, if you are doing it incorrectly. The goal of form validation is to ensure the data which is needed for the construction of the app, will be inputted and documented by the form to the app. If you are signing up for an application, and input an email without the "@" symbol, how are they supposed to contact you? to be read and observed by the people using the app. For this reason could imaging that form validation is a nessecary step in webDev in many ways. 

1. In 1-2 sentences, define end to end testing.

    - end to end testing is basically bug fixing. Cypress (and i'm sure there are many others) make it easy to simulate issues that may happen in the field. You can automate the inputs of the form, or clicks of submit button to ensure the desired result. Not to mention it's easier than testing and retesting as the form changes. Cypress is very helpful for getting insight into bugs to fix.

## Instructions

### Task 1: Project Set Up

- [ ] Create a forked copy of this project
- [ ] Clone your OWN version of the repository (Not Lambda's by mistake!)
- [ ] Implement the project on the main branch, committing changes regularly
- [ ] Push commits: `git push origin main`
- [ ] PUSH EVERYTHING TO THE MAIN BRANCH

### Task 2: Project Requirements

Your finished project must include all of the following requirements:

- [ ] A homepage that has a "/" route and links to your form (button, nav bar, or any other type of link is acceptable but must have an id of "order-pizza")
- [ ] A order form that has a "/pizza" route and shows the form
- [ ] A form with an id of "pizza-form"
- [ ] A name text input field with an id of "name-input"
- [ ] Validation for name and the error message is "name must be at least 2 characters" (Use this exact error message to make sure tests pass) ::: VERY IMPORTANT TO USE THAT EXACT ERROR MESSAGE (casing included!)
- [ ] A dropdown for pizza size with an id of "size-dropdown"
- [ ] A checklist for toppings - at least 4 (hint: name each separately!)
- [ ] Text input for special instructions with an id of "special-text"
- [ ] An Add to Order button that has an id of "order-button" and that submits form and returns a database record of name, size, toppings and special instructions

Data should look something like
```
{
    name: string,
    size: string,
    topping1: bool,
    topping2: bool,
    special: string,
}
```
where there is a key for name, size and special and they are strings
and
there is a key for each of the toppings and they are booleans
(Note - your payload should look similar to the about data)

#### Testing MVP

Implement the following tests in Cypress:

- [ x ] test that you can add text to the box
- [ x ] test that you can select multiple toppings
- [ ] test that you can submit the form

In your solution, it is essential that you follow best practices and produce clean and professional results. You will be scored on your adherence to proper code style and good organization. Schedule time to review, refine, and assess your work and perform basic professional polishing including spell-checking and grammar-checking on your work. It is better to submit a challenge that meets MVP than one that attempts too much and does not.

**npm install cypress --save-dev**
**npx cypress open**

### Task 3: Stretch Goals

After finishing your required elements, you can push your work further. These goals may or may not be things you have learned in this module but they build on the material you just studied. Time allowing, stretch your limits and see if you can deliver on the following optional goals:

- [ ] Toggle form component for gluten free crust
- [ ] Turn form element sections into nested routes
- [ ] Test more of the application with Cypress
- [ ] Build UI for the eventuality of a network error when POSTing the order
- [ ] Add functionality to your order button that it leads to a Congrats! Pizza is on it's way! page **and** returns a database record of the whole order

## FAQs

**How do I return a database record of the order?**

One of your goals is to return a database record of the order - for this you'll need to write a post request. For more detailed steps, use the below:

1. Create a new state
2. Post to [reqres](https://reqres.in/) with `axios`
3. Log data in console
4. The URL you should use is `https://reqres.in/api/orders`. The tests are based on this URL.

## Submission format

Follow these steps for completing your project.

Set up your fork on Github to codegrade following the instructions [here](https://lambdaschool.instructure.com/courses/1675/assignments/51399?module_item_id=617624), pushing commits to your main branch.
- [ ] Your code will be reviewed over the next few days. Read [these instructions](https://www.notion.so/How-to-View-Feedback-in-CodeGrade-c5147cee220c4044a25de28bcb6bb54a) to learn how to view feedback in CodeGrade.
