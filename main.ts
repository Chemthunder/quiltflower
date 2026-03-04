namespace Quiltflower {
    export let testCart:Emulator.Cart = Emulator.bootstrapNew("test", 0);
    export let secondCart:Emulator.Cart = Emulator.bootstrapNew("secondTest", 1);
    // registers two carts, using a string id and a number id.

    Emulator.loadCart(secondCart, _load);
    // loads a cart, and connects a load function that will run upon start.


    // the ran function upon loading a cart
    export function _load() {
        if (Emulator.getLoadedCart() == testCart) {
            console.log("a");
        } else {
            console.log("b");
        }
    }
}