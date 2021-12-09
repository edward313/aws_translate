import { Component, OnInit } from '@angular/core';
import { TranslateService } from '../translate.service';
@Component({
  selector: 'app-translate',
  templateUrl: './translate.component.html',
  styleUrls: ['./translate.component.css']
})
export class TranslateComponent implements OnInit {

  constructor(private translate:TranslateService) { }

  ngOnInit(): void {
    const payload ={
      SourceLanguageCode:'en', /* required */
      TargetLanguageCode: 'vi', /* required */
      Text: 'hello world', /* required */

    }
    this.translate.translate(payload).subscribe(data => {
      console.log(JSON.stringify(data))
    })
  }
}
