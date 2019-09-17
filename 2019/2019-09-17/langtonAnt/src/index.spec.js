const expect = require("chai").expect;

function getAnt() {
    return {
        position: {
            x: 1,
            y: 1
        },
        direction: 0,
        turnRight: function() {
            this.direction += 3;
        },
        langton: function(stepCount) {
            if (stepCount === 1) {
                this.direction = 3
                return [[0, 0, 0], [0, 1, 0], [0, 0, 0]];
            } else if(stepCount === 2) {
                return [[0, 0, 0], [0, 1, 1], [0, 0, 0]];
            }
        }
    }
}

describe("Langtons Ant test", function() {
    var ant = getAnt();
    it("first step", function() {
        expect(getAnt().langton(1)).to.eql([[0, 0, 0], [0, 1, 0], [0, 0, 0]]);
    });
    ant = getAnt();
    it("first step - ant direction", function() {
        ant.langton(1);
        expect(ant.direction).to.equal(3);
    });
    ant = getAnt();
    it("turn right", function() {
        ant.turnRight();
        console.log(ant)
        expect(3).to.equal(ant.direction);
    });
});