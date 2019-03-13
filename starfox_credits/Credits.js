const CREDIT_STATE = {
  LEFT_SWIPE: "left_swipe",
  WAIT_SHORT: "wait_short",
  WAIT_LONG: "wait_long",
  COMING_AT_YOU: "coming_at_you",
  UP: "up",
  DOWN: "down",
  RESET: "reset",
  END: "END"
};

class Credits {
  constructor(list) {
    this.list = list;
    this.state = CREDIT_STATE.WAIT_LONG;

    this.index = 0;
    this.size = 32;
    this.y = 1;
    this.x = 0;
    this.timer = 0;
  }

  //TODO: Separate update from draw
  draw() {
    fill("white");
    strokeWeight(0);
    textSize(this.size);

    const txt = this.list[this.index];

    switch (this.state) {
      case CREDIT_STATE.LEFT_SWIPE: {
        this.x += 1;
        if (this.x > 300) {
          this.state = CREDIT_STATE.WAIT_SHORT;
        }
        break;
      }

      case CREDIT_STATE.WAIT_SHORT: {
        this.timer += 1;
        if (this.timer > 50) {
          this.timer = 0;
          this.state = CREDIT_STATE.COMING_AT_YOU;
        }
        // increase timer until number
        break;
      }

      case CREDIT_STATE.WAIT_LONG: {
        this.timer += 1;
        if (this.timer > 100) {
          this.timer = 0;
          this.state = CREDIT_STATE.LEFT_SWIPE;
        }
        // increase timer until number
        break;
      }

      case CREDIT_STATE.COMING_AT_YOU: {
        this.size *= 1.01;
        this.y *= 1.04

        if (this.size > 400) {
          this.state = CREDIT_STATE.RESET;
        }
        break;
      }

      case CREDIT_STATE.RESET: {
        this.timer = 0;
        this.size  = 32;
        this.y     = 1;
        this.x     = 0;
        if (this.index >= this.list.length - 1) {
          this.state = CREDIT_STATE.END;
        } else {
          this.index += 1;
          this.state = CREDIT_STATE.WAIT_LONG;
        }
        break;
      }

      case CREDIT_STATE.END:
        this.index = 0;
        break;
    }

    text(txt,
      width - map(this.x, 0, 300, 0, width/2 + textWidth(txt)/2),
      height/2 + this.y
    );
  }
}

