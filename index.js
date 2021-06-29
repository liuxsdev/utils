function random(minNum, maxNum) {
    // 生成[n,m]的随机整数
    // see https://www.cnblogs.com/starof/p/4988516.html
    switch (arguments.length) {
        case 1:
            return parseInt(Math.random() * minNum + 1, 10);
        case 2:
            return parseInt(Math.random() * (maxNum - minNum + 1) + minNum, 10);
        default:
            return 0;
    }
}

function random_pick_from_array(arr) {
    // 从数组中随机选一个元素
    let len = arr.length;
    let random_number = random(0, len - 1);
    return arr[random_number]
}

function random_pick_by_wight(arr, weight) {
    // 根据权重来随机选择
    let r = [];
    let len = arr.length;
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < weight[i]; j++) {
            r.push(arr[i]);
        }
    }
    return random_pick_from_array(r)
}

export { random, random_pick_by_wight, random_pick_from_array };
