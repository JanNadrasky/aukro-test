import { DOCUMENT } from '@angular/common';
import { ChangeDetectionStrategy, Component, Inject, OnInit } from '@angular/core';
import { map, Observable, ReplaySubject } from 'rxjs';
import { IAukroItems } from 'src/app/interfaces/aukro-items.interface';
import { JsonFetchService } from 'src/app/services/json-fetch.service';

@Component({
  selector: 'app-photo-fetcher',
  templateUrl: './photo-fetcher.component.html',
  styleUrls: ['./photo-fetcher.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PhotoFetcherComponent implements OnInit {

  $photoFetchData!: Observable<IAukroItems[]>;
  greyscale$: ReplaySubject<string> = new ReplaySubject<string>();

  constructor(private jsonFetchService: JsonFetchService, @Inject(DOCUMENT) private document: Document) { }

  public ngOnInit(): void {
    this.greyscale$.next('no-greyscale');
    this.loadData();
  }

  public loadPhotos(): void {
    this.loadData();
  }

  private loadData(): void {
    this.$photoFetchData = this.jsonFetchService.getImagesList().pipe(map((data) => {
      return data.sort(() => 0.5 - Math.random()).slice(0, 4);
    }));
  }

  public checkGreyscale(event: Event): void {
    if ((event.target as HTMLInputElement).checked) { 
      this.greyscale$.next('greyscale');
    } else {
      this.greyscale$.next('no-greyscale');
    }
  }
}
