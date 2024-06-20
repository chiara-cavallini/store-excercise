import { Component, OnInit } from '@angular/core';
import { ListItem } from '../../../shared/models/list-item';
import { ListService } from '../../../shared/services/list.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-film-list',
  templateUrl: './film-list.component.html',
  styleUrls: ['./film-list.component.scss']
})
export class FilmListComponent implements OnInit {
  list: ListItem[] = []

  constructor(private listService: ListService, private readonly router: Router) { }

  ngOnInit(): void {
    this.list = this.listService.getItems();
  }

  edit(id: string) {
    this.router.navigate(['films', id])
  }
}
