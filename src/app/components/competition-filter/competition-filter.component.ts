import { Component, Input, OnInit } from '@angular/core';
import { MainServiceService } from 'src/app/services/main-service.service';
import { Output, EventEmitter } from '@angular/core';
import { LoaderService } from 'src/app/services/loader.service';

@Component({
  selector: 'app-competition-filter',
  templateUrl: './competition-filter.component.html',
  styleUrls: ['./competition-filter.component.scss'],
})
export class CompetitionFilterComponent implements OnInit {
  @Input() type: 'CUP' | 'LEAGUE' | undefined;

  @Output() newItemEvent = new EventEmitter<string[]>();

  competitions: any[] = [];

  currentCompetition: string = 'WC';

  seasons: number[] = [];

  currentSeason = (new Date().getFullYear() - 1).toString();

  constructor(
    private service: MainServiceService,
    public loaderService: LoaderService
  ) {}

  ngOnInit(): void {
    this.getDefaultCompetition();
    this.getSeasons();
    this.service.getCompetitions().subscribe((data) => {
      data.competitions?.map((comp: any) => {
        if (comp.type === this.type && comp.code !== 'EC') {
          this.competitions.push(comp);
        }
      });
      console.log(this.competitions);
    });
  }

  getDefaultCompetition() {
    if (this.type === 'CUP') {
      this.currentCompetition = 'WC';
    } else {
      this.currentCompetition = 'PD';
    }
  }

  getSeasons() {
    for (let i = 2020; i <= parseInt(this.currentSeason); i++) {
      this.seasons.push(i);
    }
  }

  onSelected() {
    const data = [this.currentCompetition, this.currentSeason];
    this.newItemEvent.emit(data);
  }
}
