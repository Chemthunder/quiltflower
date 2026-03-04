console.log("Thank you for using Quiltflower game emulator! Consider supporting me on GitHub: " + "github.com/chemthunder" + "! Thank you!");
console.log("If you enjoyed using Quiltflower, check out my other projects, such as Hyacinth!");
let showcaseEnabled = false;
let isGameLoaded = false;


namespace Quiltflower {
    let hover: number;

    let testCart: Emulator.Cart = Emulator.bootstrapNew("Test", 0);
    let main: Emulator.Cart = Emulator.bootstrapNew("Main", 1);

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
        let cartToLoad:Emulator.Cart;
        let functionToLoad:Function;

        if (!isGameLoaded) {
            switch (hover) {
                case (1): {
                    cartToLoad = testCart;
                    functionToLoad = Carts._runTest;
                    break;
                }

                case (2): {
                    cartToLoad = main;
                    functionToLoad = Carts._runMain;
                    break;
                }
            }

            Emulator.loadCart(cartToLoad, functionToLoad);
        }
    });

    forever(function () {
        if (!isGameLoaded) {
            info.setScore(hover);
        }
    });
}