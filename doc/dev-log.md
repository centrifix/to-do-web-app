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