import { Service } from '@angular/core';

@Service()
export class ButtonData {
  buttonContent :{label: string; version?:string}[]= [
    {label:"Download", version:"v1.3"},
    {label:"What is it?"},
  ];

  getData(){
    return this.buttonContent;
  }

}
