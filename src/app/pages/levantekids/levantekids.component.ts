import { Component, OnInit } from '@angular/core';
import { EmbedVideoService } from 'ngx-embed-video';

@Component({
  selector: 'me-levantekids',
  templateUrl: './levantekids.component.html',
  styleUrls: ['./levantekids.component.css']
})
export class LevantekidsComponent implements OnInit {
    
    safeURL: any;
    youtubeUrl = "";

    constructor(private _embedService: EmbedVideoService){
        //this.safeURL = this._embedService.embed(this.youtubeUrl);
    }

    ngOnInit() {
    }

}
