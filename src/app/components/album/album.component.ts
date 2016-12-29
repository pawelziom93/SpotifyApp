import { Component, OnInit } from '@angular/core';
import {SpotifyService} from '../../services/spotify.service';
import {Artist} from '../../../../Artist';
import {Album} from '../../../../Album';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'album',
  templateUrl: 'app/components/album/album.component.html'
})

export class AlbumComponent  {
	id:string;
	albums: Album[];

	constructor(private _spotifyService:SpotifyService,
		private _route:ActivatedRoute) {

	}

	ngOnInit() {
		this._route.params
			.map(params => params['id'])
			.subscribe((id) => {
				this._spotifyService.getAlbum(id)
					.subscribe(album => {
						this.albums = album;
						console.log(this.albums)
					})
			})
	}
}

