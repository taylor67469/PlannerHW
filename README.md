# 05 Third-Party APIs: Work Day Scheduler

## Your Task

Create a simple calendar application that allows a user to save events for each hour of the day by modifying starter code. This app will run in the browser and feature dynamically updated HTML and CSS powered by jQuery.

You'll need to use the [Moment.js](https://momentjs.com/) library to work with date and time. Be sure to read the documentation carefully and concentrate on using Moment.js in the browser.

## User Story

```md
AS AN employee with a busy schedule
I WANT to add important events to a daily planner
SO THAT I can manage my time effectively
```

## Acceptance Criteria

GIVEN I am using a daily planner to create a schedule
WHEN I open the planner
<!-- Use javascript moment function or jquery ui to display date, time and month -->
THEN the current day is displayed at the top of the calendar 
WHEN I scroll down
<!-- Code html and css to style timeblocks and use bootstrap columns to format -->
THEN I am presented with timeblocks for standard business hours
WHEN I view the timeblocks for that day
<!-- We want to see the previous hours of the day change color as time passes, so a conditional statemnt(if/else) add different classes based of conditions. Using classes of past etc... MOMENT USES MILITARY TIME when hours are used. Use variables for moment.hours          https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.27.0/moment.min.js  -->
<!-- Use seperate id's per hour slot to assign times to each block that you compare to the moment.hours. You want to compare the time blocks to the moment.hours -->
<!-- data-attribute number can also be assigned to the time blocks and based off of the moment.hours-->
THEN each timeblock is color coded to indicate whether it is in the past, present, or future
WHEN I click into a timeblock
<!-- Use the textarea section and description class for this portion -->
THEN I can enter an event
<!-- Add an event listener that listens for the save click -->
WHEN I click the save button for that timeblock
<!-- Have the click function save the textarea to local storage -->
THEN the text for that event is saved in local storage
WHEN I refresh the page
<!-- retrieve the saved information from local storage and display in the description -->
THEN the saved events persist
The following animation demonstrates the application functionality:

![A user clicks on slots on the color-coded calendar and edits the events.](./Assets/05-third-party-apis-homework-demo.gif)


## Grading Requirements

This homework is graded based on the following criteria: 

### Technical Acceptance Criteria: 40%

* Satisfies all of the above acceptance criteria plus the following:

  * Uses a date utility library to work with date and time

### Deployment: 32%

* Application deployed at live URL

* Application loads with no errors

* Application GitHub URL submitted

* GitHub repo contains application code

### Application Quality: 15%

* Application user experience is intuitive and easy to navigate

* Application user interface style is clean and polished

* Application resembles the mock-up functionality provided in the homework instructions

### Repository Quality: 13%

* Repository has a unique name

* Repository follows best practices for file structure and naming conventions

* Repository follows best practices for class/id naming conventions, indentation, quality comments, etc.

* Repository contains multiple descriptive commit messages

* Repository contains quality README file with description, screenshot, and link to deployed application

## Review

You are required to submit the following for review:

* The URL of the deployed application

* The URL of the GitHub repository, with a unique name and a README describing the project

- - -
© 2021 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.
