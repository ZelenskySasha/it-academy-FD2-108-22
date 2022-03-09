function CreateArray(size) {
    let arr = Array(size).fill(null).map(() => Array(size));
    let x = 0;
    let y = 0;
    z = 0;
    circle = 0;
    arr[0][0] = 1;
    for (let i = 2; i < size * size + 1; i++) {

        if (z == 0) {
            x++;
            if (x == size - circle) {
                z = 1;
                x--;
            }
        }
        if (z == 1) {
            y++;
            if (y == size - 1 - circle) {
                z = 2;
                x++;
            }
        }
        if (z == 2) {
            x--;
            if (x == -1 + circle) {
                z = 3;
                x++;
            }
        }
        if (z == 3) {
            y--;
            if (y == 1 + circle) {
                z = 0;
                circle++;

            }
        }
        arr[y][x] = i;

    }
    //for (let i = 0; i < size; i++) {
    //    console.log((arr[i]));
    //}
    console.table(arr);
    return arr;
}
CreateArray(1);
CreateArray(2);
CreateArray(3);
CreateArray(4);
CreateArray(5);
CreateArray(6);