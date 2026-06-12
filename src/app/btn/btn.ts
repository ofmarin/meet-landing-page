import { Component, computed, Input, input} from '@angular/core';

@Component({
  selector: 'app-btn',
  imports: [],
  templateUrl: './btn.html',
  styleUrls: ['./btn.css'],
})
export class Btn{

  content = input.required<{label: string; version?: string}>();
  variant = input<string | undefined>();


  btnClass = computed(()=>{
    if(this.content().version){
      return this.variant();
    }
    return 'versionless';
  });


}
