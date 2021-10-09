class Vec {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    get length() {
        return Math.sqrt( this.x * this.x + this.y * this.y);
    }

    get angle() {
        return Math.atan2(this.y, this.x);
    }

    get degrees() {
        return this.angle * 180 / Math.PI;
    }

    // This use case screams for operator overloading!
    plus(vec) {
        return new Vec(this.x + vec.x, this.y + vec.y);
    }

    minus(vec) {
        return new Vec(this.x - vec.x, this.y - vec.y);
    }
}