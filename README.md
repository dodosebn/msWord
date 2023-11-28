# msWord
This is a code snippet that demonstrates the usage of JavaScript and DOM manipulationto create interactive elements on a web page. 
The code includes event listeners and functions to show and hide different elements based on user interactions.

#Getting Started
To use this code snippet, follow these steps:

Include the JavaScript code in your HTML file. Place the code within <script> tags or link to an external JavaScript file.

<script src="your-script.js"></script>
Ensure that you have the corresponding HTML elements available in your web page. 
The code relies on specific element IDs to select and manipulate the DOM. Make sure you have elements with the following IDs:

<div id="save"></div>
<div id="Forsave"></div>
<div id="undo"></div>
<div id="Forundo"></div>
<div id="redo"></div>
<div id="Forredo"></div>
<div id="toolBar"></div>
<div id="toolBbar"></div>
<div id="FileBar"></div>
<button id="file">File</button>
<button id="insert">Insert</button>

Customize the code to fit your specific requirements. You can adjust the event listeners, element IDs, and any other functionality as needed.
Functionality
#Show Save Notification
When the user moves the mouse, the showSaveNot function is triggered.
It checks if the mouse is over the save element. 
If so, it displays the Forsave element at the mouse's position. 
When the mouse is not over the save element, the Forsave element is hidden.

#Show Undo Notification
Similar to the above functionality, the showundoNot function shows the Forundo element when the mouse is over the undo element, 
and hides it otherwise.

#Show Redo Notification
The showredoNot function operates in the same manner as the previous two functions, 
displaying the Forredo element when the mouse is over the redo element, and hiding it otherwise.

#File Bar Animation
When the file button is clicked, 
the DOMContentLoaded event triggers an animation that slides the FileBar element from left to right until it reaches its final position. 
The toolBar and toolBbar elements are hidden during this animation.

#Redirect to Home
Clicking the insert button triggers the Home function, which redirects the user to the "index.html" page. 
You can modify the URL within the Home function to suit your needs.

#Acknowledgments
I would like to express my gratitude to Egwu Florence, popularly known as dev fae, 
for Her mentorship and guidance in developing this code snippet.
Her expertise and support have been instrumental in enhancing my skills as a developer.

#Contact
If you have any questions, suggestions, or feedback, please feel free to reach out.
@dodos_ebn  Twitter
orjidominion32@gmail.com  Gmail


Happy coding!

