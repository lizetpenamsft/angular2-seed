import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject } from "rxjs/Subject";
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/takeUntil';
import { ValueService } from './../services/value.service';


@Component({
    templateUrl: './value.component.html',
    styleUrls: ['./value.component.css']
})
export class ValueComponent implements OnInit, OnDestroy {
    values$: Observable<any[]>;
    private ngUnsubscribe: Subject<void> = new Subject<void>();


    constructor(private valueService: ValueService) {
    }

    ngOnInit() {
        this.values$ = this.valueService.getAll().takeUntil(this.ngUnsubscribe);
    }

    ngOnDestroy() {
        this.ngUnsubscribe.complete();
    }
}