import { Component, OnInit } from '@angular/core';
import { ListItem } from '../../../shared/models/list-item';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ListService } from '../../../shared/services/list.service';

@Component({
  selector: 'app-film-edit',
  templateUrl: './film-edit.component.html',
  styleUrls: ['./film-edit.component.scss']
})
export class FilmEditComponent implements OnInit {
  listItem: ListItem = {};
  itemForm: FormGroup = this.fb.group({
    title: [''],
    description: [''],
    imageUrl: ['']
  });

  constructor(
    private route: ActivatedRoute,
    private listService: ListService,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id') ?? '';
    console.log('id', id)
    this.listItem = this.listService.getItemById(id) ?? {};
    this.itemForm.patchValue(this.listItem);
  }

  updateItem(): void {
    const updatedItem = { ...this.listItem, ...this.itemForm.value };
    this.listService.updateItem(updatedItem);
  }
}
