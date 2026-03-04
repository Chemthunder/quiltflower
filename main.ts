console.log("Thank you for using Quiltflower game emulator! Consider supporting me on GitHub: " + "github.com/chemthunder" + "! Thank you!");
console.log("If you enjoyed using Quiltflower, check out my other projects, such as Hyacinth!");
let showcaseEnabled = false;
let isGameLoaded = false;


namespace Quiltflower {
    let testCart: Emulator.Cart = Emulator.bootstrapNew("Test1", 0);
    let secondTest: Emulator.Cart = Emulator.bootstrapNew("Test2", 1);
    let c = 0;

    for (let cart of Emulator.cartStrings) {
        c ++;
        let cartReadout = sprites.create(img`
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
        `);

        cartReadout.setPosition(scene.screenWidth() / 2, 0);
        cartReadout.setPosition(cartReadout.x, 60 + c * 8);

        cartReadout.sayText(cart, Infinity, false, 1, 15);
    }

    Emulator.loadCart(testCart, _draw);

    function _draw() {

    }

    game.showLongText(Emulator.carts.length, DialogLayout.Bottom);
}