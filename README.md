 
# WARNING!
Quiltflower is currently **NOT ABLE TO HOST CUSTOM CARTS.**

**CREATION OF CUSTOM CARTS WILL FORCE CRASH THE SOFTWARE.**

Thank you for your understanding as I'm working to fix this bug.

# Quiltflower
> Open [Quiltflower](https://chemthunder.github.io/quiltflower/) and use the provided MakeCode share link as an extension.

> Make sure the loaded Quiltflower version has `showcaseEnabled` set to false, otherwise it will override any provided programs!

> Thank you for using Quiltflower by Chemthunder!


# To Create a Cartridge!
In a registry method of your choice, use the `Emulator.bootstrapNew` function to create a Cart, similar to a Sprite!

```
    export let TestCart = Emulator.bootstrapNew("Test", 0, loadTestCart);

    export function loadTestCart() {
        scene.setBackgroundColor(1);
    }
```

Carts can be broken down into three paramters:
> The String ID, or the name of the Cart. Should be in regular spelling.

> The Number ID, used to prevent multiple files of the same ID from existing at once. If you want to be sure your Cart doesn't overlap with another, use a number such as 1025.

> The loaded function.

Carts have a special property where, upon running `Emulator.loadCart`, the emulator will load and run a function specified in the Cart's registration.
This is what `loadTestCart` is.

These functions essentially serve as *all* of the code for the Cart. Any code for the Cart outside of this specific function will not run upon the Cart being booted.