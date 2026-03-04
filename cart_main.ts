namespace Carts {
    export function _runCommon() {
        sprites.destroyAllSpritesOfKind(SpriteKind.Player);
        info.setScore(-1);
        info.showScore(false);
    }

    export function _runTest() {
        _runCommon();
    }

    export function _runMain() {
        _runCommon();
    }
}