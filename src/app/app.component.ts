import { Component } from '@angular/core';
import { ConnectionService } from 'ng-connection-service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})

export class AppComponent {

    public lottieConfig: Object;
    private anim: any;
    private animationSpeed: number = 1;

    status = 'ONLINE';
    isConnected = true;

    constructor(private connectionService: ConnectionService) {

        this.connectionService.monitor().subscribe(isConnected => {
            this.isConnected = isConnected;
            if (this.isConnected) {
                this.status = "ONLINE";
            }
            else {
                this.status = "OFFLINE";
            }
            console.log("STATUS: ", this.status);
        })

        

        this.lottieConfig = {
            path: 'assets/astronauta.json',
            autoplay: true,
            loop: true
        };
    }

    handleAnimation(anim: any) {
        this.anim = anim;
    }

    stop() {
        this.anim.stop();
    }

    play() {
        this.anim.play();
    }

    pause() {
        this.anim.pause();
    }

    setSpeed(speed: number) {
        this.animationSpeed = speed;
        this.anim.setSpeed(speed);
    }

}