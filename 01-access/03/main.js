const styles = ["Jazz", "Blue"];

styles[styles.length] = "Rock-n-Roll";
styles[1] = "Classic";
delete styles[0];

console.log(styles.length);
console.log(styles);
