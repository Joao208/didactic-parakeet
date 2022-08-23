# Log Time

Library with help you to see the execution time of anything. With only two methods.

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)

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

const myTime = new LogTime(console.log) // here you pass your logging method, and can do anything

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
