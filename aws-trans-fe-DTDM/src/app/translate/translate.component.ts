import { Component, OnInit } from '@angular/core';
import { TranslateService } from '../translate.service';
import { TranslateText } from '../translate';
import { Languge } from '../model/language';
@Component({
  selector: 'app-translate',
  templateUrl: './translate.component.html',
  styleUrls: ['./translate.component.css']
})
export class TranslateComponent implements OnInit {
  
  data:any

  language:Languge[]=[];
  
  constructor(private translate:TranslateService) { }
  
  ngOnInit(): void {
    this.language = 
    [
        {"value":"en" , "text":"English"},
        {"value":"vi", "text":"Vietnamese"},
        {"value":"af", "text":"Afrikaans"},
        {"value":"sq", "text":"Albanian"},
        {"value":"am", "text":"Amharic"},
        {"value":"ar", "text":"Arabic"},
        {"value":"hy", "text":"Armenian"},
        {"value":"az", "text":"Azerbaijani"},
        {"value":"bn", "text":"Bengali"},
        {"value":"bs", "text":"Bosnian"},
        {"value":"bg", "text":"Bulgarian"},
        {"value":"ca", "text":"Catalan"},
        {"value":"zh", "text":"Chinese (Simplified)"},
        {"value":"zh-TW", "text":"Chinese (Traditional)"},
        {"value":"hr", "text":"Croatian"},
        {"value":"cs", "text":"Czech"},
        {"value":"da", "text":"Danish"},
        {"value":"fa-AF", "text":"Dari"},
        {"value":"nl", "text":"Dutch"},
        {"value":"et", "text":"Estonian"},
        {"value":"fa", "text":"Farsi (Persian)"},
        {"value":"tl", "text":"Filipino, Tagalog"},
        {"value":"fi", "text":"Finnish"},
        {"value":"fr", "text":"French"},
        {"value":"fr-CA", "text":"French (Canada)"},
        {"value":"ka", "text":"Georgian"},
        {"value":"de", "text":"German"},
        {"value":"el", "text":"Greek"},
        {"value":"gu", "text":"Gujarati"},
        {"value":"ht", "text":"Haitian Creole"},
        {"value":"ha", "text":"Hausa"},
        {"value":"he", "text":"Hebrew"},
        {"value":"hi", "text":"Hindi"},
        {"value":"hu", "text":"Hungarian"},
        {"value":"is", "text":"Icelandic"},
        {"value":"id", "text":"Indonesian"},
        {"value":"ga", "text":"Irish"},
        {"value":"it", "text":"Italian"},
        {"value":"ja", "text":"Japanese"},
        {"value":"kn", "text":"Kannada"},
        {"value":"kk", "text":"Kazakh"},
        {"value":"ko", "text":"Korean"},
        {"value":"lv", "text":"Latvian"},
        {"value":"lt", "text":"Lithuanian"},
        {"value":"mk", "text":"Macedonian"},
        {"value":"ms", "text":"Malay"},
        {"value":"ml", "text":"Malayalam"},
        {"value":"mt", "text":"Maltese"},
        {"value":"mr", "text":"Marathi"},
        {"value":"mn", "text":"Mongolian"},
        {"value":"no", "text":"Norwegian"},
        {"value":"ps", "text":"Pashto"},
        {"value":"pl", "text":"Polish"},
        {"value":"pt", "text":"Portuguese"},
        {"value":"pt-PT", "text":"Portuguese (Portugal)"},
        {"value":"pa", "text":"Punjabi"},
        {"value":"ro", "text":"Romanian"},
        {"value":"ru", "text":"Russian"},
        {"value":"sr", "text":"Serbian"},
        {"value":"si", "text":"Sinhala"},
        {"value":"sk", "text":"Slovak"},
        {"value":"sl", "text":"Slovenian"},
        {"value":"so", "text":"Somali"},
        {"value":"es", "text":"Spanish"},
        {"value":"es-MX", "text":"Spanish (Mexico)"},
        {"value":"sw", "text":"Swahili"},
        {"value":"sv", "text":"Swedish"},
        {"value":"ta", "text":"Tamil"},
        {"value":"te", "text":"Telugu"},
        {"value":"th", "text":"Thai"},
        {"value":"tr", "text":"Turkish"},
        {"value":"uk", "text":"Ukrainian"},
        {"value":"ur", "text":"Urdu"},
        {"value":"uz", "text":"Uzbek"},
        {"value":"cy", "text":"Welsh"},
  
    ]
  }

  // bien cuc bo
  text:string=""
  SourceTranslate:string="en"
  Targettranslate:string="vi"
  translateText:any;


  Translate(val:string){
    this.text=val
    const payload ={
      SourceLanguageCode:this.SourceTranslate, /* required */
      TargetLanguageCode: this.Targettranslate, /* required */
      Text: this.text, /* required */
      TranslatedText:''
    }
    
    this.translate.translate(payload).subscribe(data => {
      this.translateText=data.TranslatedText
      console.log(this.translateText)
    })
  }
}
