# Tweeter Project

Tweeter is a simple, single-page Twitter clone.

Starter code is from github.com/lighthouse-labs/tweeter.
This website was built using jQuery, JS, AJAX, HTML, CSS, Node, Express.
I adopted the Mobile First development method.

Many improvements were made to heighten user experience and the responsiveness aspect of front-end design.

## Table of Content

- [Description](https://github.com/esther-sh-choi/tweeter#esthers-tinyapp-project)
- [Final Product](https://github.com/esther-sh-choi/tweeter#final-product)
  - [Desktop](https://github.com/esther-sh-choi/tweeter#desktop)
  - [Desktop to Tablet](https://github.com/esther-sh-choi/tweeter#desktop-to-tablet)
  - [Mobile](https://github.com/esther-sh-choi/tweeter#mobile)
- [Dependencies](https://github.com/esther-sh-choi/tweeter#dependencies)
- [Getting Started](https://github.com/esther-sh-choi/tweeter#getting-started)


## Final Product

#### Desktop:

- When the user types within the character limit, an ajax request will be sent to post the new tweet on the bottom of the page.
- When user scrolls below the navbar, the top form-toggle button will disappear and the bottom form-toggle button will appear.
- When user scrolls above the navbar, the buttons will be toggled hidden/show.
- * When user clicks on the bottom form-toggle button, the window will automatically scroll to show the form. *
- * This prevents users from scrolling all the way up the page to post a new tweet. *



https://user-images.githubusercontent.com/100092097/216224664-82632a25-b636-4f88-b588-678d64be1864.mp4



- The counter on the bottom right of the form keeps track of how many characters the user can submit.
- When the user has less than 0 characters left, the counter and text field will turn red to indicate there is an error.
- If the user tries to submit when there is more than 140 characters or empty field, they will see an error modal.
- The user can close the error modal by clicking on the OK button, X icon, or the backdrop.



https://user-images.githubusercontent.com/100092097/216224696-2916b847-5751-4627-9464-73eb7cc3c627.mp4





#### Desktop to Tablet:

- Responsive design using media query to switch from desktop to tablet/mobile format.
- * When user clicks on the bottom form-toggle button, the window will automatically scroll to show the form. *
- * This prevents users from scrolling all the way up the page to post a new tweet. *



https://user-images.githubusercontent.com/100092097/216224714-3e6d3c67-2654-4571-96c8-46a73e2e8388.mp4




#### Mobile:

- The bottom form-toggle button has a label.
- Rather than having just the icon there, labelling makes it clear to users what the button is for.
- * When user clicks on the bottom form-toggle button, the window will automatically scroll to show the form. *
- * This prevents users from scrolling all the way up the page to post a new tweet. *



https://user-images.githubusercontent.com/100092097/216224731-c1f0c76c-fe4c-4578-9ae9-50be12a574a6.mp4




## Getting Started

1. Clone this repository onto your local device.
2. Install dependencies using the `npm install` command.
3. Start the web server using the `npm start` or `npm run local` (nodemon) command. The app will be served at <http://localhost:8080/>.
4. Go to <http://localhost:8080/> in your browser.

## Dependencies

- Express
- Node 5.10.x or above
- body-parser
- chance
- md5
