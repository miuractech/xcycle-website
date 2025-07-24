export class Vec2 {
  x: number;
  y: number;

  constructor(x = 0, y = 0) {
    this.x = x;
    this.y = y;
  }

  clone(): Vec2 {
    return new Vec2(this.x, this.y);
  }

  copy(v: Vec2): Vec2 {
    this.x = v.x;
    this.y = v.y;
    return this;
  }

  sub(v: Vec2): Vec2 {
    this.x -= v.x;
    this.y -= v.y;
    return this;
  }

  lerp(target: Vec2, amount: number): Vec2 {
    this.x += (target.x - this.x) * amount;
    this.y += (target.y - this.y) * amount;
    return this;
  }
}

export const vec2 = (x = 0, y = 0) => new Vec2(x, y);