import { Component, OnInit } from '@angular/core';
import {SpotifyService} from '../../services/spotify.service';
import {Artist} from '../../../../Artist';
import {Album} from '../../../../Album';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'artist',
  templateUrl: 'app/components/artist/artist.component.html'
})

export class ArtistComponent  {
	id:string;
	artist: Artist[];
	albums: Album[];

	constructor(private _spotifyService:SpotifyService,
		private _route:ActivatedRoute) {

	}

	ngOnInit() {
		this._route.params
			.map(params => params['id'])
			.subscribe((id) => {
				this._spotifyService.getArtist(id)
					.subscribe(artist => {
						this.artist = artist;
					})

				this._spotifyService.getAlbums(id)
					.subscribe(alb => {
						this.albums = alb.items;
						console.log(this.albums)
					})
			})
	}
}
