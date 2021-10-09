// Encapsulates the coordinates for the head of a vector
// The tail of the vector is implicit at the origin (0, 0)
class Vec {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    // The magnitude of the vector
    get length() {
        return Math.sqrt( this.x * this.x + this.y * this.y);
    }

    // The direction of the vector in radians
    get angle() {
        return Math.atan2(this.y, this.x);
    }

    // The direction of the vector in degrees
    get degrees() {
        return this.angle * 180 / Math.PI;
    }

    // This use case screams for operator overloading!

    // Add the coordinates of the vector passed in to the coordinates of this vector.
    plus(vec) {
        return new Vec(this.x + vec.x, this.y + vec.y);
    }

    // Subtract the coordinates of the vector passed in from the coordinates of this vector.
    minus(vec) {
        return new Vec(this.x - vec.x, this.y - vec.y);
    }
}