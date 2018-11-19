import { Component, OnInit } from '@angular/core';
import { EmbedVideoService } from 'ngx-embed-video';

@Component({
  selector: 'me-ministeriobem',
  templateUrl: './ministeriobem.component.html',
  styleUrls: ['./ministeriobem.component.css']
})
export class MinisteriobemComponent implements OnInit {

    safeURL: any;
    youtubeUrl = "https://www.youtube.com/watch?v=GnP34YdIp64";

    constructor(private _embedService: EmbedVideoService){
        this.safeURL = this._embedService.embed(this.youtubeUrl);
    }

  ngOnInit() {
  }

}
