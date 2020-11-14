# Employee Directory

The Employee Directory application allows the user to view employees. Users can view their employees' picture, full name, phone number, email address, and date of birth. In addition, users can sort each field and search for specific employees by name.

<br>

![alt-text](employee-directory.gif)

<br>

## Coding Process

The application is built with React.js. The application is component based, it keeps track of event changes using state, and updates to the page render dynamically and without needing to refresh the page.

<br>

Instead of searching and using personal information and images of employees, I went with incorporating a random user generator API from [randomuser.me](randomuser.me).

```

import axios from "axios";

export default{ 
    getUsers:function(){    

        return axios.get("https://randomuser.me/api/?results=200&nat=us");
    }
};

```

<br>

To view this application, please navigate to the **Deployed Link** below or [click here](https://christyglee.github.io/react-employee-directory/) to view.

<br>

## Powered By

* [Javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
* [Node.js](https://nodejs.org/en/)
* [npm install](https://nodejs.org/en/)
* [axios js](https://www.npmjs.com/package/axios)
* [React js](https://reactjs.org/)
* [Bootstrap](https://getbootstrap.com/)
* [Google Fonts](https://fonts.google.com/)

<br>

### Other Resources Used

* [Visual Studio Code](https://code.visualstudio.com/)
    * [How to install VS Code](https://code.visualstudio.com/docs/setup/setup-overview)
* [GitBash](https://gitforwindows.org/)
    * [Download GitBash for Windows](https://git-scm.com/downloads)

<br>

## Deployed Link

* [See Deployed Link](https://christyglee.github.io/react-employee-directory/)

<br>

## Author
**Christy Lee** 

- [Github](https://github.com/christyglee)
- [LinkedIn](https://www.linkedin.com/in/christy-g-lee/)

<br> 

## Acknowledgments

* [Google-Fu](https://www.google.com)
* [w3schools](https://www.w3schools.com/)
* [Stack Overflow](https://stackoverflow.com/search?q=over)
* [Node.js](https://nodejs.org/en/)
* [npm install](https://nodejs.org/en/)
* [React js](https://reactjs.org/)