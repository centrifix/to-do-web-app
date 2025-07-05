# Dev Log - Centrifix

### 6/27/2025

Perhaps this is unconventional? Oh well. Today I started the whimsical journey of creating my web app. I set up a repo, cloned it and linked it to VSCode, installed node.js and set up a node server in /server and a react app in /client. I confirmed both were working by running "node index.js" in /server and "npm start" in /client to display the text:
"Todo App
API is running🚀"

Oh, and I also added a package.json allowing me to run "npm run dev" in the root folder to concurrently start the front and back ends.

I'm feeling pretty good about all of this! It's exciting to see the skills I've developed over the past years starting to come together.
### 6/28/2025

Pretty simple day today. I branched new/tasklist to start developing the key feature in my to-do web app: tasks. I added a tasks.js route to handle the tasks in /server. I updated /server/index.js accordingly. 

I then added /client/components to house my react components, and created TaskList.jsx. It's my understanding that creating components with react is a lot like building blocks - coming from hardcoded html/css/js this is a welcome change. I updated App.js to display my new-and-shiny TaskList component. I confirmed everything was working with "npm run dev" and I think that's it for today.

Was a short development day, but one more piece of the puzzle is in place, and that's good enough for me.

### 6/29/2025

Big progress today! I continued developing my to-do list web app by adding support for creating, deleting, and completing tasks.

I first created /components/NewTaskForm.jsx to handle submitting new tasks. I wired it up to send POST requests to my backend and immediately update the front.

Next, I implemented task deletion. I added a DELETE /tasks/:id route in my Express backend and connected it to a Delete button in TaskList.jsx. When clicked, the task is removed both from the backend and the UI — no page reload needed.

Finally, I added a "Complete" button. I created a PATCH /tasks/:id route in the backend to update a task’s completed status, and connected it to a handleComplete() function in the frontend. Clicking the button marks the task as completed and updates the UI.

This was my first real experience building full CRUD (Create, Read, Update, Delete) functionality across both client and server. Seeing this all come together is super satisfying. I'm excited for tomorrow's development :)

Final note: I removed some boilerplate code (app.css, logo.svg, app.test.js, and so on)

### 7/1/25

Today was a big day! I added toggling when you complete a task. If a task is marked as complete, you can hit 'undo' to mark it as incomplete. The biggest part of today was the styling.

I added styling for the whole page (not much yet), making the UI look way cleaner and better than plain text in a window. I attempted to use tailwindcss at first, but got frustrated by the inconsistent documentation I found online. I imagine trying to use it in a react app is different than in other use cases, but I ultimately decided to go with what I know best: importing good 'ol index.css. 

I also added an about section with placeholder content for fun.

The web app is really coming together, and I think the next step might be to integrate the database portion. Until next time!

### 7/5/25

Yesterday was the fourth of July, and despite the fireworks and frozen margaritas that occupied me last night, I couldn't help but think about ideas for my web app. 

Although I am a bit embarrassed to admit, my mind was only focused on how I would implement databases! I integrated a persistent database using SQLite with the better-sqlite3 library. I set up the database schema, created a tasks table, and refactored the backend API routes to interact with the database instead of an in memory array.

I had an issue at one point when I neglected to create the /data directory in my server folder, and experienced a few syntax errors as well. Nothing I couldn't handle, however, and it wasn't long until I was able to remedy the issues.

I'm pretty excited to dive into user authentication next. Until next time!