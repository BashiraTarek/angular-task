import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Pipe({
  name: 'searchHighlight',
  standalone: true
})
export class SearchHighlightPipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {}

  transform(value: string, searchTerm: string): SafeHtml {
    if (!searchTerm) {
      return value;
    }

    const regex = new RegExp(searchTerm, 'gi'); // Case-insensitive global search
    const highlightedText = value.replace(regex, (match) => {
      return `<span style="background-color: red;">${match}</span>`;
    });

    return this.sanitizer.bypassSecurityTrustHtml(highlightedText);
  }
}
