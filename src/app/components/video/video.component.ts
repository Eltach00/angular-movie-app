import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss'],
})
export class VideoComponent implements OnInit {
  @Input() key: string;
  @Input() site: string = 'YouTube';
  videoUrl: string;
  constructor(private sanitizer: DomSanitizer) {}
  ngOnInit(): void {
    switch (this.site) {
      case 'YouTube':
        this.videoUrl = <string>(
          this.getSafeUrl('https://www.youtube.com/embed/' + this.key)
        );
        break;
      case 'Vimeo':
        this.videoUrl = <string>(
          this.getSafeUrl('https://www.vimeo.com/embed/' + this.key)
        );
        break;
    }
  }
  getSafeUrl(url: string) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
