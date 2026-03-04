console.log("Thank you for using Quiltflower game emulator! Consider supporting me on GitHub: " + "github.com/chemthunder" + "! Thank you!");
console.log("If you enjoyed using Quiltflower, check out my other projects, such as Hyacinth!");
let showcaseEnabled = true;

namespace Quiltflower {
    if (showcaseEnabled) {

        let testCart: Emulator.Cart = Emulator.bootstrapNew("test", 0);
        let secondCart: Emulator.Cart = Emulator.bootstrapNew("secondTest", 1);
        // registers two carts, using a string id and a number id.

        Emulator.loadCart(testCart, _load);
        // loads a cart, and connects a load function that will run upon start.


        // the ran function upon loading a cart
        function _load() {
            QuiltCarts.run(Emulator.getLoadedCart().id); // uses a dedicated namespace for the carts
        }
    }
}

namespace QuiltCarts {
    export function run(id: number): void {
        switch (id) {
            case (0): {
                run0();
                break;
            }
            case (1): {
                run1();
                break;
            }
        }
    }

    function run0() { // this will run if the loaded cart's id is 0
        console.log("a");
    }

    function run1() {
        console.log("b");
    }
}