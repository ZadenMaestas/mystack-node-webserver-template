# mystack-node-webserver-template

(name not final)

```license
MIT License

Copyright (c) [2022] [TheProtonDev]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

## About:
### I needed serverside JS for a project I'm working on and came to really like doing things this way when working with websites, so I created this template for future use in later projects [still in development]
### Note this is pre V1.0.0, production use is risky
## Usage:
### Currently only one recommended way of using this template which is the good ol' git clone (this is only temporary until I create a python script for quick project generation)
```bash
git clone https://github.com/TheProtonDev/mystack-node-webserver-template.git
```
### You can start the server using the following command
```bash
npm run serverstart
```

## ToDos (In order of urgency):
- Create a template generator script to reduce changes users have to do
- Better URL parsing system without requiring positional args, and providing more flexibility
- Beautify server.js layout to be very minimal and move current contents to its own class (this needs more brainstorming though)
- Add a template system (maybe?)
- Documentation
- Favicons seem to be broken? Likely a MIMETYPE issue

This list is far from final.
