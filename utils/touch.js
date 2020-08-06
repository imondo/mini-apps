const MIN_DISTANCE = 10;
const MIN_DEVIATION = 30;

function getDirection(x, y) {
    if (x > y && x > MIN_DISTANCE) {
        return 'horizontal';
    }
    if (y > x && y > MIN_DISTANCE) {
        return 'vertical';
    }
    return '';
}

/***
 * 判断用户滑动
 * 左滑还是右滑
 */
function getTouchData(endX, endY, startX, startY) {
    let turn = "";
    if (endX - startX > MIN_DEVIATION && Math.abs(endY - startY) < MIN_DEVIATION) {
        turn = "right";
    } else if (endX - startX < -MIN_DEVIATION && Math.abs(endY - startY) < MIN_DEVIATION) {
        turn = "left";
    }
    return turn;
}

const touch = {
    touchStart(e) {
        const touches = e.changedTouches[0];
        this.startX = touches.clientX;
        this.startY = touches.clientY;
    },

    touchMove(e) {
        const touch = e.changedTouches[0];
        const deltaX = touch.clientX - this.startX;
        const deltaY = touch.clientY - this.startY;
        const offsetX = Math.abs(deltaX);
        const offsetY = Math.abs(deltaY);
        this.direction = getDirection(offsetX, offsetY);
    },

    touchEnd(e) {
        const touch = e.changedTouches[0];
        let x = touch.clientX;
        let y = touch.clientY;
        const direction = getTouchData(x, y, this.startX, this.startY);
        
        if (this.direction === 'horizontal') {
            return direction;
        }

    }
}

module.exports = touch