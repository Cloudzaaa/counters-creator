# Counters-creator

<p align="center">
    <img src="https://lh3.googleusercontent.com/EEbkBvCkmjhYr0xIfkCAEoN3cWVChd6Fh7tC5jfRS06MU0_8mMBwx9yTOHAnO_Hzp40" height="200" width="200px">
</p>

Counters-creator simple script for automated creation yandex and google counters.

## Getting Started

### Installation

To use Counters-creator, run:

```nodejs
npm install
```

### Usage

For usage you should fill down config with your account data and wish domains for counters creation.

```js
const config = {
    'google' : {
        'email' : 'adolf@yandex.ru', //login to google analytics
        'password' : 'SDF431a', //password to google analytics
        //domains for creation counters
        'domains' : [
            'test1.site.com',
            'test2.site.com',
        ],
        'countersGroup' : 'a125583771w195806383p190949876', //address that identify your counters group (from url)
        'typingDelay' : 5, //Time to wait between key presses
    },
    'yandex' : {
        'email' : 'adolf@yandex.ru', //login to yandex metrica
        'password' : 'SDF431a', //password to yandex metrica
        //domains for creation counters
        'domains' : [
            'test1.site.com',
            'test2.site.com',
        ],
        'typingDelay' : 5, //Time to wait between key presses
    }
};
```
