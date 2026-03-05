namespace Carts {
    export function _runCommon() {
        scene.cameraShake(1.5, 400);
        pause(900);

        sprites.destroyAllSpritesOfKind(SpriteKind.UI);
        info.setScore(-1);
        info.showScore(false);
        console.log("Running cart: " + Emulator.getLoadedCart().name + " with ID: " + Emulator.getLoadedCart().id);
    }

    export function _runTest() {
        _runCommon();

        scene.setBackgroundColor(13);
    }

    export function _runMain() {
        _runCommon();
    }
}