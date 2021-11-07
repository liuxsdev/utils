function random(minNum: number, maxNum?: number) {
    // 生成[n,m]的随机整数
    let by_min = Math.random() * minNum + 1;
    if (maxNum) {
        let by_min_and_max = Math.random() * (maxNum - minNum + 1) + minNum;
        return parseInt(by_min_and_max.toString(), 10);
    } else {
        return parseInt(by_min.toString(), 10);
    }
}

function random_pick_from_array(arr: any[]) {
    // 从数组中随机选一个元素
    let len = arr.length;
    let random_number = random(0, len - 1);
    return arr[random_number];
}

function random_pick_by_wight(arr: any[], weight: number[]) {
    // 根据权重来随机选择
    let r: any[] = [];
    let len = arr.length;
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < weight[i]; j++) {
            r.push(arr[i]);
        }
    }
    return random_pick_from_array(r);
}

export { random, random_pick_by_wight, random_pick_from_array };
