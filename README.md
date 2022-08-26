# Time to get productive

Log Time is a console-based time logger for node.js that can help you track execution time of your functions and libraries. And everthing with only two methods.

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)
[![codecov](https://codecov.io/gh/Joao208/didactic-parakeet/branch/main/graph/badge.svg?token=CCI03J2T00)](https://codecov.io/gh/Joao208/didactic-parakeet)

## Install

You can install with npm or yarn

```bash
    yarn add console-time
```

```bash
    npm install console-time
```

## Example of uses

```javascript
import LogTime from 'console-time'

const myTime = new LogTime(console.log) // here you pass your logging method

myTime.start()

func() {
    // make you code here
}

myTime.stop('My function delayed {{seconds}} seconds') // My function delayed 2 seconds
```

## Times documentation

| Variable     | Whats mean                        |
| ------------ | --------------------------------- |
| milliseconds | Time of execution in milliseconds |
| seconds      | Time of execution is seconds      |
| minutes      | Time of execution in minutes      |
| hours        | Time of execution in hours        |
| days         | Time of execution in days         |
