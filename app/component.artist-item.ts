import { Component, Input } from '@angular/core';
import { Artist } from './component.app';

@Component({
  selector: 'artist-item',
  templateUrl: '../partials/artist-item.html',
  styleUrls: ['../css/artist-item.css'],
})

export class ArtistItemComponent {
  @Input() artist: Artist = null;
} 