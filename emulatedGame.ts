namespace Emulator {
    export enum CartEvents {
        LOAD,
        STOP
    }
    
    export let carts: Cart[] = []; // all registered cartridges
    export let cartStrings: String[] = []; // All cart string ids
    export let loadedCart:Cart; // The currently loaded cart

    export class Cart {
        _name: string; // The string id
        _id: number; // The numerical id of the cartridge. Should be higher than 0

        constructor(_name: string, _id: number) {
            this._name = _name;
            this._id = _id;
        }

        get name(): string {
            return this._name;
        }

        get id(): number {
            return this._id;
        }

        set name(input: string) {
            this._name = input;
        }

        set id(input: number) {
            this._id = input;
        }
    }


    // creates a new cart, akin to sprites.create
    export function bootstrapNew(name: string, id: number): Cart {
        let cart = new Cart(name, id);
        carts.push(cart);
        cartStrings.push(name);
        return cart;
    }

    // tests each cart, crashes if any are null
    export function checkAllTest(): void {
        let loadedCart:Cart;
        let cardIDS = [];
        let count = 0;

        try {
            for (let value of carts) {
                count++;
                const valueName: string = value.name;
                const valueId: number = value.id;

                console.log("Loaded cart: " + valueName + " with ID: " + valueId);
                loadedCart = value;
                cardIDS.push(valueId);
            }
        } catch {
            crash(loadedCart);
        }
    }

    // crash system, throws a fatal error
    function crash(cart:Cart) {
        control.fail("Failed to load cart: " + cart.name);
    }

    // gets the loaded cart
    export function getLoadedCart(): Cart {
        return loadedCart;
    }

    // loads a cart.
    /*
    @param cart The cart to load
    @param (optional) loadEvent The function to run upon loading a cart.
    */
    export function loadCart(cart: Cart, loadEvent?: Function): void {
        try {
            checkAllTest();
        } catch {
            crash(cart);
        }

        loadedCart = cart;
        loadEvent();

    }

    
}