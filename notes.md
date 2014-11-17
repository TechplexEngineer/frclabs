# Where
- Code in the /server directory only runs on the server.
- Code in the /client directory only runs on the client.
- Everything else runs on both the client and server.
- Your static assets (fonts, images, etc.) go in the /public directory.

# Order:
1. Files in /lib are loaded before anything else.
2. Any main.* file is loaded after everything else.
3. Everything else loads in alphabetical order based on the file name.