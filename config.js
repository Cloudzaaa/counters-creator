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

module.exports = config;