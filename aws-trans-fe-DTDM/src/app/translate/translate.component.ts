import { Component, OnInit } from '@angular/core';
import { TranslateService } from '../translate.service';
import { TranslateText } from '../translate';
@Component({
  selector: 'app-translate',
  templateUrl: './translate.component.html',
  styleUrls: ['./translate.component.css']
})
export class TranslateComponent implements OnInit {
  translateText:any;
  data:any
 
  constructor(private translate:TranslateService) { }
  
  ngOnInit(): void {
    
  }
  text:string=""


  getValue(val:string)
  {
   this.text=val
    console.warn(this.text)
  }
  
  Translate(){
   

    const payload ={
      SourceLanguageCode:'en', /* required */
      TargetLanguageCode: 'vi', /* required */
      Text: this.text, /* required */
      TranslatedText:''
    }
    // const data={
    //   SourceLanguageCode=
    // }
    this.translate.translate(payload).subscribe(data => {
      this.translateText=data.TranslatedText
      console.log(this.translateText)
    })
  }
}
