export default class HUD extends Phaser.Scene {

    constructor ()
    {
        super({ key: 'UIScene', active: true });

        this.score = 0;
    }

    create ()
    {
        //  Our Text object to display the Score
        let info = this.add.text(10, 10, 'Score: 0', { font: '38px Arial', fill: '#FFFFFF' });

        //  Grab a reference to the Game Scene
        let ourGame = this.scene.get('GameScene');

        //  Listen for events from it
        ourGame.events.on('CalcScore', function (player) {
	    // Do calculation
	}, this);
    }
}
