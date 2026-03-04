namespace Quiltflower {
    export let testCart:Emulator.Cart = Emulator.bootstrapNew("test", 0);
    export let secondCart:Emulator.Cart = Emulator.bootstrapNew("secondTest", 1);
    Emulator.loadCart(secondCart, loadEvent);



    export function loadEvent() {
        if (Emulator.getLoadedCart() == testCart) {
            console.log("a");
        } else {
            console.log("b");
        }
    }
}