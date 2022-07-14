a = 1;
b = 0;

try {
    if (a > 0) {
        console.log(a/b);
    } else {
        console.log('aaaa');
    }
} catch (error) {
    console.log('bbb');
}
