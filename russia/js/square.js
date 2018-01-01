/**
 * Created by sf on 2018/1/1.
 */

var Square = function () {
    // 方块数据
    this.data = [
        [0, 2, 0, 0],
        [0, 2, 0, 0],
        [0, 2, 0, 0],
        [0, 2, 0, 0]
    ];

    // 原点
    this.origin = {x: 0, y: 0};

    // 方向
    this.dir = 0;

    // 旋转数组
    this.rotates = [
        [
            [0, 2, 0, 0],
            [0, 2, 0, 0],
            [0, 2, 0, 0],
            [0, 2, 0, 0]
        ],
        [
            [0, 0, 0, 0],
            [2, 2, 2, 2],
            [0, 0, 0, 0],
            [0, 0, 0, 0]
        ],
        [
            [0, 2, 0, 0],
            [0, 2, 0, 0],
            [0, 2, 0, 0],
            [0, 2, 0, 0]
        ],
        [
            [0, 0, 0, 0],
            [2, 2, 2, 2],
            [0, 0, 0, 0],
            [0, 0, 0, 0]
        ]
    ];
};

// 检测数据是否合法（旋转）
Square.prototype.canRotate = function (isValid) {
    var d = this.dir + 1;
    if (d == 4) {
        d = 0;
    }
    var test = [
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0]
    ];
    for (var i = 0; i < this.data.length; i++) {
        for (var j = 0; j < this.data[0].length; j++) {
            test[i][j] = this.rotates[d][i][j];
        }
    }
    return isValid(this.origin, test);
};

// 旋转
Square.prototype.rotate = function () {
    this.dir = this.dir + 1;
    if (this.dir == 4) {
        this.dir = 0;
    }
    for (var i = 0; i < this.data.length; i++) {
        for (var j = 0; j < this.data[0].length; j++) {
            this.data[i][j] = this.rotates[this.dir][i][j];
        }
    }
};

// 检测数据是否合法（下移）
Square.prototype.canDown = function (isValid) {
    var test = {};
    test.x = this.origin.x + 1;
    test.y = this.origin.y;
    return isValid(test, this.data);
};

// 下移
Square.prototype.down = function () {
    this.origin.x = this.origin.x + 1;
};

// 检测数据是否合法（左移）
Square.prototype.canLeft = function (isValid) {
    var test = {};
    test.x = this.origin.x;
    test.y = this.origin.y - 1;
    return isValid(test, this.data);
};

// 左移
Square.prototype.left = function () {
    this.origin.y = this.origin.y - 1;
};

// 检测数据是否合法（右移）
Square.prototype.canRight = function (isValid) {
    var test = {};
    test.x = this.origin.x;
    test.y = this.origin.y + 1;
    return isValid(test, this.data);
};

// 右移
Square.prototype.right = function () {
    this.origin.y = this.origin.y + 1;
};