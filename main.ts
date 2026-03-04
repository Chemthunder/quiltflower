console.log("Thank you for using Quiltflower game emulator! Consider supporting me on GitHub: " + "github.com/chemthunder" + "! Thank you!");
console.log("If you enjoyed using Quiltflower, check out my other projects, such as Hyacinth!");
let showcaseEnabled = false;
let isGameLoaded = false;
let versionNumber = 1.2;

namespace Quiltflower {
    let miscInfo = sprites.create(img`
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
    `, SpriteKind.Player);

    miscInfo.setPosition(100, 120);
    miscInfo.sayText("Quiltflower v" + versionNumber, Infinity, false, 1, 15);

    let hover: number;
    let hoveredCart: Emulator.Cart;

    let testCart: Emulator.Cart = Emulator.bootstrapNew("Test", 0, Carts._runTest);
    let main: Emulator.Cart = Emulator.bootstrapNew("Main", 1, Carts._runMain);

    let c = -4;
    hover = 1;

    for (let cart of Emulator.cartStrings) {
        c++;
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
        `, SpriteKind.Player);

        cartReadout.setPosition(20 + cart.length, 100);
        cartReadout.setPosition(cartReadout.x, 60 + c * 12);
        cartReadout.sayText(cart, Infinity, false, 1, 15);
    }

    controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
        if (!isGameLoaded) {
            if (Emulator.carts.length > 0) {
                if (hover != Emulator.carts.length) {
                    hover++;
                } else {
                    hover = 1;
                }
            }
        }
    });

    controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
        if (!isGameLoaded) {
            Emulator.loadCart(hoveredCart, hoveredCart.functionToLoad());
        }
    });

    forever(function () {
        if (!isGameLoaded) {
            info.setScore(hover);
            hoveredCart = Emulator.carts.get(hover - 1);
        }
    });
}