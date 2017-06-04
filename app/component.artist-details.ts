import { Component, Input } from '@angular/core';
import { Artist } from './component.app';

@Component({
  selector: 'artist-details',
  templateUrl: '../partials/artist-details.html',
  styleUrls: ['../css/artist-details.css'],
  inputs: ['artist']
})

export class ArtistDetailsComponent {
  @Input() artist: Artist = null;
}