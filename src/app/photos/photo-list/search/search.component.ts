import { Component, EventEmitter, OnDestroy, OnInit, Output} from "@angular/core";
import { Subject } from "rxjs";
import { debounceTime } from "rxjs/operators";

@Component({
  selector: 'loona-search',
  templateUrl: './search.component.html'
})

const element = event.currentTarget as HTMLInputElement
const value = element.value

export class SearchComponent implements OnInit, OnDestroy {

  @Output() onTyping = new EventEmitter<string>();
  debounce: Subject<string> = new Subject<string>();


  ngOnInit(): void {
    this.debounce.pipe(debounceTime(300)).subscribe(filter => this.onTyping.emit(filter));
}
ngOnDestroy(): void {
    this.debounce.unsubscribe();
}}
