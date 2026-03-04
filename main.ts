namespace Quiltflower {
    export let testCart:Emulator.Cart = Emulator.bootstrapNew("test", 0);
    export let secondCart:Emulator.Cart = Emulator.bootstrapNew("secondTest", 1);
    Emulator.loadCart(secondCart, _load);



    export function _load() {
        if (Emulator.getLoadedCart() == testCart) {
            console.log("a");
        } else {
            console.log("b");
        }
    }
}