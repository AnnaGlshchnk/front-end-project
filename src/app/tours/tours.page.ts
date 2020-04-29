import {Component, OnInit} from '@angular/core';
import {Tour} from '../models/tour';
import {HttpService} from '../services/http.service';

@Component({
    selector: 'app-tours',
    templateUrl: './tours.page.html',
    styleUrls: ['./tours.page.scss'],
})
export class ToursPage implements OnInit {
    tours: Tour[] = [];

    constructor(private httpService: HttpService) {
        this.tours = [];
    }

    ngOnInit() {
        console.log('send request');
        this.httpService.getTours().subscribe((data: any[]) => this.tours = data);
    }


}
